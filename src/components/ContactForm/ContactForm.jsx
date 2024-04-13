import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from 'nanoid'

export default function ContactForm({ onAdd }) {
    
const nameId = useId();
    const numberId = useId();
    

    const initialValues = {
    id: "",
    name: "",
    number: "",
    };
    const phoneRegExp = /^\d{3}-\d{2}-\d{2}$/;
    const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Is required"),
  number: Yup.string()
    .matches(phoneRegExp, "Invalid phone number, use format 111-11-11")
    .required("Is required"),
});

const handleSubmit = (values, actions) => {
    const newContact = {
        ...values,
        id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
       onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={nameId}>Name:</label>
          <Field type="text" name="name" id={nameId}/>
          <ErrorMessage name="name" component="div"  />
        </div>
        <div>
          <label htmlFor={numberId}>Number:</label>
          <Field type="text" name="number" id={numberId}/>
          <ErrorMessage name="number" component="div"  />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}


