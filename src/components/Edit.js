import {
  Avatar,
  Box,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import status from "../Data/status";

const ProductEdit = (props) => {
  const { data, setEditedProduct } = props;
  const [price, setPrice] = useState(data?.price || 0);
  const [quantity, setQuantity] = useState(data?.quantity || 0);
  const [selectedChip, setSelectedChip] = useState(data?.status || null);
  const [total, setTotal] = useState(data?.price * data?.quantity || 0);

  const totalValue = (price, quantity) => {
    setTotal(price * quantity);
  };

  const handleChipClick = (chip) => {
    setSelectedChip(chip === selectedChip ? null : chip);
    setEditedProduct({
      productId: data.id,
      price: price,
      quantity: quantity,
      newStatus: chip === selectedChip ? null : chip,
    });
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    totalValue(event.target.value, quantity);
    setEditedProduct({
      productId: data.id,
      price: event.target.value,
      quantity: quantity,
      newStatus: selectedChip !== null ? selectedChip : status.PriceUpdated,
    });
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
    totalValue(price, quantity + 1);
    setEditedProduct({
      productId: data.id,
      price: price,
      quantity: quantity + 1,
      newStatus: selectedChip !== null ? selectedChip : status.QuantityUpdated,
    });
  };

  const handleQuantityDecrement = () => {
    // Ensure that the quantity does not go below 0
    setQuantity(Math.max(0, quantity - 1));
    totalValue(price, quantity - 1);
    setEditedProduct({
      productId: data.id,
      price: price,
      quantity: quantity - 1,
      newStatus: selectedChip !== null ? selectedChip : status.QuantityUpdated,
    });
  };

  const handleQuantityChange = (event) => {
    // Ensure that the entered value is not less than 0
    const inputValue = Math.max(0, event.target.value);
    setQuantity(inputValue);
    totalValue(price, inputValue);
    setEditedProduct({
      productId: data.id,
      price: price,
      quantity: inputValue,
      newStatus: selectedChip !== null ? selectedChip : status.QuantityUpdated,
    });
  };

  return (
    <Box p={4}>
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item md={3} sm xs>
          <Avatar
            alt={data?.name}
            src={`${data?.image}`}
            sx={{ width: 120, height: 120 }}
          />
        </Grid>
        <Grid container spacing={2} md={9} sm xs>
          <Grid item md={3} sm xs>
            price($)
          </Grid>
          <Grid item md={9} sm xs>
            <Box display={"flex"} justifyContent={"flex-start"}>
              <TextField
                type="number"
                variant="outlined"
                name="price"
                id="price"
                value={price}
                onChange={handlePriceChange}
                sx={{ maxWidth: "200px", minWidth: "200px" }}
                size="small"
              />
              <Typography mx={2}>/6*1LB</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm xs>
            Quantity
          </Grid>

          <Grid item md={9} sm xs>
            <Box display={"flex"} justifyContent={"flex-start"}>
              <TextField
                type="number"
                variant="outlined"
                name="quantity"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                sx={{ maxWidth: "200px", minWidth: "200px" }}
                size="small"
                inputProps={{
                  min: 0, // Set the minimum value for the input
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {" "}
                      <IconButton
                        onClick={handleQuantityDecrement}
                        aria-label="Decrement"
                        color="primary"
                      >
                        <RemoveIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleQuantityIncrement}
                        aria-label="Increment"
                        color="primary"
                      >
                        <AddIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography mx={2}> X 6*1LB</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm xs>
            Total
          </Grid>
          <Grid item md={9} sm xs>
            <Typography>${total}</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>Choose reason</strong> <span>(optional)</span>
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={2} justifyContent={"flex-start"}>
          <Grid item>
            <Chip
              label="Missing product"
              clickable
              color={selectedChip === "Missing product" ? "primary" : "default"}
              onClick={() => handleChipClick("Missing product")}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Chip
              label="Quantity is not the same"
              clickable
              color={
                selectedChip === "Quantity is not the same"
                  ? "primary"
                  : "default"
              }
              onClick={() => handleChipClick("Quantity is not the same")}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Chip
              label="Price is not the same"
              clickable
              color={
                selectedChip === "Price is not the same" ? "primary" : "default"
              }
              onClick={() => handleChipClick("Price is not the same")}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Chip
              label="Other"
              clickable
              color={selectedChip === "Other" ? "primary" : "default"}
              onClick={() => handleChipClick("Other")}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductEdit;
