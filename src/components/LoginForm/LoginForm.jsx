import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import toast from "react-hot-toast";

const LoginForm = () => {
  const emailRegExp = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .matches(emailRegExp, "Email is not valid!")
      .required("Required Email"),
    password: Yup.string()
      .min(8, "Password is short!")
      .max(30, "Password is long!")
      .required("Required Password"),
  });

  const INITIAL_VALUES = { email: "", password: "" };
  const emailId = nanoid();
  const passwordId = nanoid();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(data => {
        toast.success(`Hi, ${data.user.name}!`);
      })
      .catch(() => {
        toast.error("Error login or password!");
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <h1>Login</h1>

          <label htmlFor={emailId}>
            Email
          </label>
          <Field
            type="text"
            name="email"
            id={emailId}
            placeholder="E-mail"
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
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;