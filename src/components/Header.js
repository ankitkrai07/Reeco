import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { approveAllProducts, resetOrder } from "../Store/reducer";
import { useDispatch } from "react-redux";

function handleClick(event) {
  event.preventDefault();
}

const Header = (props) => {
  const dispatch = useDispatch();

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Order
    </Link>,
    <Typography key="3" color="text.primary">
      Order 32457abc
    </Typography>,
  ];

  return (
    <AppBar position="static" color="transparent" sx={{ p: 2 }}>
      {" "}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" color="inherit" noWrap mt={1}>
          <strong> Order 32457abc</strong>
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: "36px",
              padding: "4px 24px",
              textTransform: "none",
              mr: 1,
            }}
            size="small"
            onClick={() => {
              dispatch(resetOrder());
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "36px",
              padding: "4px 24px",
              textTransform: "none",
              ml: 1,
            }}
            size="small"
            onClick={() => {
              dispatch(approveAllProducts());
            }}
          >
            Approve order
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
