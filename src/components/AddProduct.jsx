import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router";
import { useProducts } from "./context/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ width: "50vw", margin: "10vh auto" }}>
      <TextField
        id="standard-basic"
        label="NAME"
        variant="standard"
        fullWidth
        name="name"
        onChange={handleInp}
      />
      <TextField
        id="standard-basic"
        label="DESCRIPTION"
        variant="standard"
        fullWidth
        name="description"
        onChange={handleInp}
      />
      <TextField
        id="standard-basic"
        label="PRICE"
        variant="standard"
        fullWidth
        name="price"
        onChange={handleInp}
      />
      <TextField
        id="standard-basic"
        label="PICTURE"
        variant="standard"
        fullWidth
        name="picture"
        onChange={handleInp}
      />

      <Button
        variant="outlined"
        fullWidth
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
