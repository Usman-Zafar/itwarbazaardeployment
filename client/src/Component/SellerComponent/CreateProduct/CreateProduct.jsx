import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import "./CreateProduct.css";

const ProductSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  quantity: Yup.number()
    .min(0, "Quantity must be a positive number")
    .required("Required"),
  price: Yup.number()
    .min(0, "Price must be a positive number")
    .required("Required"),
  description: Yup.string().required("Required"),
  image: Yup.mixed().required("Please select an image file."),
});

export const ProductPage = () => (
  <div className="Container">
    <div className="ProductForm">
      <div className="ProductPage">
        <h1>Add Product</h1>
        <Formik
          initialValues={{
            name: "",
            description: "",
            quantity: "",
            price: "",
            image: null,
          }}
          validationSchema={ProductSchema}
          onSubmit={(values) => {
            console.log(values);
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("quantity", values.quantity);
            formData.append("price", values.price);
            formData.append("description", values.description);
            formData.append("image", values.image);

            axios
              .post("/seller/product", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  token: localStorage.getItem("token"),
                },
              })
              .then((response) => {
                console.log("Product added successfully:", response.data);
              })
              .catch((error) => {
                console.error("Error adding product:", error);
              });
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <TextField
                name="name"
                label="Product Name"
                variant="standard"
                error={Boolean(errors.name && touched.name)}
                helperText={errors.name && touched.name && String(errors.name)}
                onChange={(event) => {
                  setFieldValue("name", event.target.value);
                }}
              />
              <br />
              <TextField
                name="quantity"
                label="Quantity"
                variant="standard"
                type="number"
                error={Boolean(errors.stockQuantity && touched.stockQuantity)}
                helperText={
                  errors.stockQuantity &&
                  touched.stockQuantity &&
                  String(errors.stockQuantity)
                }
                onChange={(event) => {
                  setFieldValue("stockQuantity", event.target.value);
                }}
              />
              <br />
              <TextField
                name="price"
                label="Price"
                variant="standard"
                type="number"
                error={Boolean(errors.price && touched.price)}
                helperText={
                  errors.price && touched.price && String(errors.price)
                }
                onChange={(event) => {
                  setFieldValue("price", event.target.value);
                }}
              />
              <br />
              <TextField
                name="description"
                label="Description"
                variant="standard"
                multiline
                rows={4}
                error={Boolean(errors.description && touched.description)}
                helperText={
                  errors.description &&
                  touched.description &&
                  String(errors.description)
                }
                onChange={(event) => {
                  setFieldValue("description", event.target.value);
                }}
              />
              <br />
              <TextField
                name="image"
                variant="standard"
                type="file"
                error={Boolean(errors.image && touched.image)}
                helperText={
                  errors.image && touched.image && String(errors.image)
                }
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                }}
              />
              <br />

              <Button type="submit" variant="contained" color="success">
                Add Product
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="ProductImage"></div>
    </div>
  </div>
);
