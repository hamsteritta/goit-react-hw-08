import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { defaultValue } from "../../redux/contacts/slice";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(9, "Enter the number in the format 111-11-11")
    .max(9, "Enter the number in the format 111-11-11")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Enter the number in the format 111-11-11")
    .required("Required"),
});

const 
ContactForm = () => {
    const dispatch = useDispatch();
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = async (values, actions) => {
      await dispatch(addContact(values));
      actions.resetForm();
    };

    return (
        <Formik
      initialValues={defaultValue}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
        >
        <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor={nameId} className={css.label}>
            Name:
          </label>
          <Field type="text" name="name" className={css.input} id={nameId} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.group}>
          <label htmlFor={numberId} className={css.label}>
            Phone:
          </label>
          <Field type="tel" name="number" className={css.input} id={numberId} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button type="submit" className={css.button}>
          Submit
        </button>
      </Form> 
    </Formik>
    );
}

export default ContactForm