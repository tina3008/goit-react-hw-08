import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";

import { openModal } from "../../redux/modal/slice";
import { changeContact } from "../../redux/contacts/operations";
import { validationControl } from "../ContactForm/ContactForm";

export default function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal(id));
  };

  const handleChange = ({values:{name, number}}) => {    
    dispatch(changeContact(id, name, number));
  };

 const initialContact = {
   name: name,
   number: number,
 };
 const nameFieldId = useId();
 const numberFieldId = useId();
  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleChange}
      validationSchema={validationControl}
    >
      <Form className={css.formStyle}>
        <div className={css.fialdStyle}>
          <label htmlFor={name}>Name</label>
          <Field
            className={css.field}
            id={nameFieldId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.err} name="name" component="span" />
        </div>

        <div className={css.fialdStyle}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            id={numberFieldId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={css.err} name="number" component="span" />
        </div>

        <div className={css.btnBlock}>
          <button type="submit" className={css.btn}>
            Change
          </button>
          <button className={css.btnDel} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </Form>
    </Formik>
  );
}
