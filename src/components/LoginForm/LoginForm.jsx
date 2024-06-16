import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    // .unwrap()
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.formStyle} autoComplete="off">
        <div className={css.fialdStyle}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field} />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field} />
          </label>
          <button type="submit" className={css.btn}>
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
}
