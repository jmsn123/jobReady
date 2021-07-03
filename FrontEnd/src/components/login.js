import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
//  import your redux here
import { logout, login } from "../redux/features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  if (user) {
    return (
      <div>
        Hi, {user.username} !<button onClick={() => dispatch(logout)}></button>
      </div>
    );
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        maxWidth: "1200px",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
        margin: "0 auto",
      }}
    >
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          dispatch(login(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" />
            <Field type="password" name="password" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
