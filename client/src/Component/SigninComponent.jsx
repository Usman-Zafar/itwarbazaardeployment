import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
export const Signin = () => (
  <div style={{ padding: "50px" }}>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        const formData = new FormData();
        //   formData.append("file", values.avatar); // Append the image file to the form data
        formData.append("email", values.email);
        formData.append("password", values.password);
        for (const [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
        axios
          .post("/user/signin", values, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Response from server:", response.data);
          })
          .catch((error) => {
            console.error("server error");
          });
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            error={Boolean(errors.email && touched.email)}
            helperText={errors.email && touched.email && String(errors.email)}
            onChange={(event) => {
              setFieldValue("email", event.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            error={Boolean(errors.password && touched.password)}
            helperText={
              errors.password && touched.password && String(errors.password)
            }
            onChange={(event) => {
              setFieldValue("password", event.target.value);
            }}
          />
          <br />
          <br />
          <Button variant="contained" type="submit" color="success">
            Submit
          </Button>
          <br />
          <Button href="/signup">Dont Have an Account?</Button>
        </Form>
      )}
    </Formik>
  </div>
);
