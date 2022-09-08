import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginApi } from "../../redux/reducers/userReducer";

export default function Login(props) {
  const dispatch = useDispatch();
  //lay du lieu tu form
  const frm = useFormik({
    initialValues: {
      //Du lieu ban dau macj dinh cua form
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("email khong duoc bo trong")
        .email("email khong dung dinh dang"),
      password: Yup.string()
        .required("password khong duoc bo trong")
        .min(1, "pass tu 1-32")
        .max(32, "pass tu 1-32"),
    }),

    onSubmit: (values) => {
      //console.log(values);
      const action = loginApi(values);
      dispatch(action);
    },
  });
  return (
    <form className="container" onSubmit={frm.handleSubmit}>
      <h3>Login2</h3>
      <div className="form-group">
        <p>email</p>
        <input
          className="form-control"
          id="email"
          name="email"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.email ? (
          <span className="text-danger">{frm.errors.email}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>password</p>
        <input
          className="form-control"
          id="password"
          name="password"
          onChange={frm.handleChange}
          onBlur={frm.handleBlur}
        />
        {frm.errors.password ? (
          <span className="text-danger">{frm.errors.password}</span>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button className="btn btn-success mt-3" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
