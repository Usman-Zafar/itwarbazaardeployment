import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

export const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddProduct({ name, description, price, image });
    setName("");
    setDescription("");
    setPrice("");
    setImage(null);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <br />
      <TextField
        label="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <br />
      <input type="file" onChange={handleImageChange} />
      <br />
      <br />
      <Button variant="contained" type="submit" color="success">
        Add Product
      </Button>
    </form>
  );
};
