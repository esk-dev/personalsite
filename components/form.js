import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { Formik, Field, useField, Form, useFormikContext } from "formik";
import { forwardRef, useImperativeHandle, useRef } from "react";
import * as Yup from "yup";

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

// eslint-disable-next-line react/display-name
const ModalForm = forwardRef((props, ref) => {
  const formikRef = useRef();

  async function postForm(values) {
    await fetch("/api/postdata", {
      method: "POST",
      body: JSON.stringify(values, null, 4),
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
  };
  const triggerSubmit = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      triggerSubmit,
    }),
    []
  );
  return (
    <Formik
      innerRef={formikRef}
      initialValues={{
        name: "",
        email: "",
        contacts: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address"),
        message: Yup.string().required("Please, print some message"),
      })}
      onSubmit={(values, actions) => {
        postForm(values);
        console.log(values);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <FormField label="Name" name="name" />
          <FormField label="Email" name="email" type="email" />
          <FormField label="Or another contacts" name="contacts" />
          <FormControl
            isInvalid={formik.errors.message && formik.touched.message}
          >
            <FormLabel>Message</FormLabel>
            <Textarea
              {...formik.getFieldProps("message")}
              resize="none"
              name="message"
              type="text"
            ></Textarea>
            <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
});

export default ModalForm;
