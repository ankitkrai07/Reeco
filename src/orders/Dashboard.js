import {
  Avatar,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";

// icons
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import LiquorOutlinedIcon from "@mui/icons-material/LiquorOutlined";
import IcecreamOutlinedIcon from "@mui/icons-material/IcecreamOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct, updateProductStatus } from "../Store/reducer";
import { colorCategory, printPage } from "../tools/tracker";
import status from "../Data/status";
import { orderedProducts } from "../Data/Data";
import ProductEdit from "../components/Edit";

const generateNextId = (products) => {
  const maxId = Math.max(...products.map((product) => product.id), 0);
  return maxId + 1;
};

const OrdersDashboard = () => {
  const data = useSelector((state) => state.order.products);
  const totalPrice = useSelector((state) => state.order.totalPrice);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [missingPopUp, setMissingPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [productValue, setProductValue] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);

  const handleEditProduct = () => {
    if (editedProduct) {
      console.log(editedProduct);
      dispatch(editProduct(editedProduct));
      handleEditClose();
    }
  };

  const handleEditOpen = (product) => {
    setProductValue(product);
    setEditPopUp(true);
  };
  const handleEditClose = () => {
    setEditPopUp(false);
    setEditedProduct(null);
    setProductValue(null);
  };

  const handleMissingOpen = (product) => {
    setProductValue(product);
    setMissingPopUp(true);
  };
  const handleMissingClose = () => {
    setMissingPopUp(false);
    setProductValue(null);
  };

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleStatusUpdate = (productId, status) => {
    dispatch(updateProductStatus({ productId, status }));
  };

  const handlechange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleAddProducts = () => {
    // Calculate the maximum ID only once for the existing products
    const maxId = generateNextId(data);

    // Assuming you want to add products from orderedProducts
    orderedProducts.forEach((product) => {
      const newProduct = {
        ...product,
        id: maxId + product.id, // Ensure a unique ID for each new product
      };

      // Dispatch the addProduct action for each product
      dispatch(addProduct(newProduct));
    });
  };

  return (
    <Box p={4} mx={4}>
      {productValue && missingPopUp && (
        <Dialog
          aria-labelledby="Missing-Procuct-check"
          open={missingPopUp}
          maxWidth="xs"
        >
          <DialogTitle id="dialog-title-missing">
            Missing Product
            <IconButton
              aria-label="close"
              onClick={handleMissingClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
              size="small"
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography gutterBottom noWrap sx={{ maxWidth: "sm" }}>
                is {productValue?.name}
              </Typography>{" "}
              Urgent?
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleStatusUpdate(productValue.id, status.Missing);
                handleMissingClose();
              }}
              color="inherit"
              sx={{
                textTransform: "capitalize",
              }}
              size="small"
            >
              No
            </Button>
            <Button
              onClick={() => {
                handleStatusUpdate(productValue.id, status.MissingUrgent);
                handleMissingClose();
              }}
              color="inherit"
              sx={{
                textTransform: "capitalize",
              }}
              size="small"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {productValue && editPopUp && (
        <Dialog
          aria-labelledby="edit-Procuct-check"
          open={editPopUp}
          maxWidth="md"
        >
          <DialogTitle id="dialog-title-edit">
            <IconButton
              aria-label="close"
              onClick={handleEditClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
              size="small"
            >
              <CloseOutlinedIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography noWrap sx={{ maxWidth: "sm" }} variant="h5">
              <strong> {productValue?.name}</strong>
            </Typography>{" "}
            <Typography gutterBottom noWrap sx={{ maxWidth: "sm" }}>
              {productValue?.brand}
            </Typography>{" "}
            <ProductEdit
              data={productValue}
              setEditedProduct={setEditedProduct}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleEditClose();
              }}
              sx={{
                borderRadius: "36px",
                padding: "4px 24px",
                textTransform: "none",
              }}
              size="small"
              variant="outlined"
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleEditProduct();
              }}
              sx={{
                borderRadius: "36px",
                padding: "4px 24px",
                textTransform: "none",
              }}
              size="small"
              variant="contained"
              color="primary"
            >
              Send
            </Button>
          </DialogActions>
        </Dialog>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 2 }} variant="outlined">
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <Box sx={{ borderRight: "1px solid #CCC", height: "100%" }}>
                  <Typography>Supplier</Typography>
                  <Typography>
                    <strong>East Coast Furits & Vegitables</strong>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <Box sx={{ borderRight: "1px solid #CCC", height: "100%" }}>
                  <Typography>Shiping Date</Typography>
                  <Typography>
                    <strong>{"Thu, Feb 10"}</strong>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <Box sx={{ borderRight: "1px solid #CCC", height: "100%" }}>
                  <Typography>Total</Typography>
                  <Typography>
                    <strong>${totalPrice.toFixed(2)}</strong>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <Box sx={{ borderRight: "1px solid #CCC", height: "100%" }}>
                  <Typography>Category</Typography>
                  <Box>
                    <Grid container spacing={0}>
                      <Grid item xs={4}>
                        <FoodBankOutlinedIcon />
                      </Grid>
                      <Grid item xs={4}>
                        <LiquorOutlinedIcon />
                      </Grid>
                      <Grid item xs={4}>
                        <IcecreamOutlinedIcon />
                      </Grid>
                      <Grid item xs={4}>
                        <AcUnitOutlinedIcon />
                      </Grid>
                      <Grid item xs={4}>
                        <HandshakeOutlinedIcon />
                      </Grid>
                      <Grid item xs={4}>
                        <EggAltOutlinedIcon />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <Box sx={{ borderRight: "1px solid #CCC", height: "100%" }}>
                  <Typography>Department</Typography>
                  <Typography>
                    <strong>300-444-678</strong>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={2}>
                <Box>
                  <Typography>Status</Typography>
                  <Typography>
                    <strong>Awaiting your Approval</strong>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 1 }} variant="outlined">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={9}>
                {" "}
                <TextField
                  size="small"
                  variant="outlined"
                  sx={{
                    minWidth: "30vw",
                    borderRadius: "36px", // Set your desired border radius here
                    "& fieldset": {
                      borderRadius: "36px", // This is to style the border of the TextField
                    },
                  }}
                  name="search"
                  id="search"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={handlechange}
                  InputProps={{
                    endAdornment: (
                      <Box>
                        <SearchOutlinedIcon color="inherit" />
                      </Box>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      borderRadius: "36px",
                      padding: "4px 24px",
                      textTransform: "none",
                    }}
                    size="small"
                    onClick={handleAddProducts}
                  >
                    Add item
                  </Button>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        printPage();
                      }}
                    >
                      <PrintOutlinedIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <TableContainer
                  component={Paper}
                  variant="outlined"
                  elevation={0}
                  sx={{
                    borderRadius: "12px",
                    borderRight: "none",
                    borderLeft: "none",
                    maxHeight: "70vh",
                    maxWidth: "100vw",
                  }}
                  className="custom-scrollbar"
                >
                  <Table
                    sx={{ minWidth: 650 }}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead sx={{ border: "2px solid inherit" }}>
                      <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Brand</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quntity</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell colSpan={2}>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredProducts.map((row, index) => (
                        <TableRow
                          key={`${row?.name}-${index}`}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                // justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Avatar
                                alt={row?.name}
                                src={`${row?.image}`}
                                sx={{ width: 56, height: 56 }}
                              />
                              <Typography ml={2} variant="">
                                {row?.name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="right">{row?.brand}</TableCell>
                          <TableCell align="right">
                            ${row?.price} / {row?.weight}
                          </TableCell>
                          <TableCell align="right">
                            {row?.quantity} * {row?.weight}{" "}
                          </TableCell>
                          <TableCell align="right">
                            {Number(row?.quantity) * Number(row?.price)}
                          </TableCell>
                          <TableCell style={{ backgroundColor: "#eee" }}>
                            {row?.status && (
                              <Chip
                                label={row?.status}
                                color={colorCategory(row?.status)}
                              />
                            )}
                          </TableCell>
                          <TableCell
                            style={{ backgroundColor: "#eee" }}
                            align="right"
                          >
                            <Grid container spacing={2}>
                              <Grid item xs={4}>
                                {" "}
                                <IconButton
                                  onClick={() =>
                                    handleStatusUpdate(row?.id, status.Approved)
                                  }
                                  color={
                                    row?.status
                                      ? colorCategory(row.status)
                                      : "inherit"
                                  }
                                >
                                  <CheckOutlinedIcon />
                                </IconButton>
                              </Grid>
                              <Grid item xs={4}>
                                {" "}
                                <IconButton
                                  onClick={() => handleMissingOpen(row)}
                                  color={
                                    row?.status
                                      ? colorCategory(row.status)
                                      : "inherit"
                                  }
                                >
                                  <CloseOutlinedIcon />
                                </IconButton>
                              </Grid>
                              <Grid item xs={4}>
                                {" "}
                                <Button
                                  onClick={() => handleEditOpen(row)}
                                  sx={{ textTransform: "capitalize" }}
                                  variant="text"
                                  color="inherit"
                                >
                                  Edit
                                </Button>
                              </Grid>
                            </Grid>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrdersDashboard;
