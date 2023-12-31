import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SocialMediaApps from "../../Containers/SocialMedia/ScoialMediaApps";
import "@fontsource/kalam";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NameInfo = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      toast(
        "Do you like the portfolio ?",
        {
          type: "info",
          theme: "dark",
          autoClose: false,
        }
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const onClickHandler = () => {
    navigate("/profile");
  };
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ textAlign: "left", marginLeft: "0px", marginBottom: "10px" }}
      >
        <Box
          sx={{
            textAlign: "left",
            marginTop: "60px",
            color: "#C5C6C7",
          }}
        >
          <Typography variant="h2" color="#2924a6" style={Styles.nameFont}>
            I'm RUCHI
          </Typography>
          <Typography variant="h4" color="#2924a6">
            FrontEnd Developer
          </Typography>
        </Box>
        <SocialMediaApps />
        <Button
          onClick={onClickHandler}
          variant="contained"
          sx={{ backgroundColor: "#2924a6", marginTop: "10px" }}
        >
          More About Ruchika
        </Button>
        <ToastContainer />
      </Container>
    </>
  );
};
const Styles = {
  SocialMedialLogoColor: {
    color: "#66FCF1",
    fontSize: "36px",
  },
  nameFont: {
    fontFamily: "kalam",
    fontWeight: 700,
    paddingTop: "10px",
  },
};
export default NameInfo;
