import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
  type: Yup.string().required("Please select an account type"),
});

export const SignUp = () => {
  const [value] = React.useState("");
  return (
    <div>
      <div style={{ padding: "50px" }}>
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            type: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            const formData = new FormData();
            //   formData.append("file", values.avatar); // Append the image file to the form data
            formData.append("firstname", values.firstname);
            formData.append("lastname", values.lastname);
            formData.append("email", values.email);
            formData.append("password", values.password);
            formData.append("type", values.type);
            for (const [key, value] of formData.entries()) {
              console.log(`${key}: ${value}`);
            }
            axios
              .post("/user/signup", values, {
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
                name="firstname"
                label="First Name"
                variant="outlined"
                error={Boolean(errors.firstname && touched.firstname)}
                helperText={
                  errors.firstname &&
                  touched.firstname &&
                  String(errors.firstname)
                }
                onChange={(event) => {
                  setFieldValue("firstname", event.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                name="lastname"
                label="Last Name"
                variant="outlined"
                error={Boolean(errors.lastname && touched.lastname)}
                helperText={
                  errors.lastname && touched.lastname && String(errors.lastname)
                }
                onChange={(event) => {
                  setFieldValue("lastname", event.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                error={Boolean(errors.email && touched.email)}
                helperText={
                  errors.email && touched.email && String(errors.email)
                }
                onChange={(event) => {
                  setFieldValue("email", event.target.value);
                }}
              />
              <br />
              <br />
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                type="password"
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
              <FormControl error={Boolean(errors.type && touched.type)}>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Account Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value.type}
                  onChange={(event) => {
                    setFieldValue("type", event.target.value);
                  }}
                >
                  <FormControlLabel
                    value="customer"
                    control={<Radio />}
                    label="Customer"
                  />
                  <FormControlLabel
                    value="seller"
                    control={<Radio />}
                    label="Seller"
                  />
                </RadioGroup>
                {errors.type && touched.type && (
                  <div style={{ color: "red" }}>{errors.type}</div>
                )}
              </FormControl>
              <br />
              <Button variant="contained" type="submit" color="success">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
