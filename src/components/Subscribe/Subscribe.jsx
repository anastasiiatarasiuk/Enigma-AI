import s from "./Subscribe.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

const Subscribe = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    toast.success(`Thanks for subscribe, ${values.email}!`);
    resetForm();
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className={s.container}>
        <div className={s.titleContainer}>
          <h2 className={s.title}>Subscribe to our newsletter</h2>
          <p className={s.subtitle}>
            Get a summary of what we’ve shipped during the last month, behind
            the scenes updates, and team picks.
          </p>
        </div>
        <div className={s.formContainer}>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={s.subscribeForm}>
              <div className={s.inputWrapper}>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                  className={s.subscribeInput}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={s.errorMessage}
                />
              </div>
              <button type="submit" className={s.subscribeBtn}>
                Subscribe
              </button>
            </Form>
          </Formik>
          <p className={s.formDescription}>
            By submitting your email address, you agree to receive Enigma
            monthly newsletter. For more information, please read our privacy
            policy. You can always withdraw your consent.
          </p>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
