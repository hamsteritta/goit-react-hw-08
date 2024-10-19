import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const emailRegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Required Name"),
    email: Yup.string()
      .matches(emailRegExp, "Email is not valid!")
      .required("Required Email"),
    password: Yup.string()
      .min(8, "Password must be 8 characters minimum!")
      .max(30, "Password must be 30 characters maximum!")
      .required("Required Password"),
  });

  const INITIAL_VALUES = { name: "", email: "", password: "" };
  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(data => {
        toast.success(`${data.user.name} is successfully registered!`);
      })
      .catch(() => {
        toast.error("Email is already registered!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <h1>Register</h1>
          <label htmlFor={nameId}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={nameId}
            placeholder="Name"
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorText}
            name="name"
            component="span"
          />

          <label htmlFor={emailId}>
            Email
          </label>
          <Field
            type="text"
            name="email"
            id={emailId}
            placeholder="E-mail"
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorText}
            name="email"
            component="span"
          />

          <label htmlFor={passwordId}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordId}
            placeholder="Password"
            autoComplete="off"
          />
          <ErrorMessage
            className={css.errorText}
            name="password"
            component="span"
          />

          <button
            disabled={Object.keys(errors).length > 0}
            type="submit"
          >
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
}