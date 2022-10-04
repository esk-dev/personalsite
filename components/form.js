import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Form() {
  return (
    <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Yup.object({
            message: Yup.string()
              .max(250, "Must be 100 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            sendForm(values.name, values.email, values.message);
            setSubmitting(false);
          }}
        >
      </Formik>
  );
}
