import { Box, Typography, Link } from "@mui/material";
import HeaderAppBar from "./components/Navbar";
import OrdersDashboard from "./orders/Dashboard";
import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  useEffect(() => {
    const checkScrollHeight = () => {
      const boxElement = document.getElementById("custom-scrollbar-box");
      if (boxElement) {
        const shouldApplyCustomScrollbar =
          boxElement.scrollHeight >= window.innerHeight;
        if (shouldApplyCustomScrollbar) {
          boxElement.classList.add("custom-scrollbar");
        } else {
          boxElement.classList.remove("custom-scrollbar");
        }
      }
    };

    window.addEventListener("scroll", checkScrollHeight);

    checkScrollHeight();

    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, []);

  return (
    <Box id="custom-scrollbar-box" className="custom-scrollbar">
      <HeaderAppBar />
      <Header />
      <OrdersDashboard />
    </Box>
  );
}

export default App;
