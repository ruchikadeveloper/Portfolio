import React, { useEffect } from "react";
import "@fontsource/kalam";
import { Box, Container, Typography } from "@mui/material";
import "../FeaturedProjects/FeaturedProject.css";
const AboutUser = () => {
  useEffect(() => {
    const textElement = document.querySelector(".zoom-in-text");
    textElement.classList.add("animate-zoom-in");
  }, []);
  return (
    <div minHeight="100vh" sx={{ backgroundColor: "#1F2833" }}>
      <Container
        maxWidth="sm"
        sx={{ textAlign: "left", marginLeft: "0px", marginBottom: "10px" }}
      >
        <Box
          sx={{
            textAlign: "left",
            marginTop: "120px",
            color: "#C5C6C7",
          }}
        >
          <Typography variant="h3" color="#2924a6" style={Styles.nameFont}>
            My name is
          </Typography>
          <Typography
            variant="h2"
            style={Styles.nameFont}
            className="zoom-in-text"
          >
            Ruchika Shakya
          </Typography>
          <Typography style={Styles.info}>
            Hi There,I'm Ruchika Shakya and I am FrontEnd Web Developer, It's
            been 6 months ,Im learning web developer skills through  various courses. I have developed 
            few personal projects websites. I'm also React.js , Node.js, MongoDb and looking forward to be a full
            stack web developer.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};
const Styles = {
  SocialMedialLogoColor: {
    color: "#2924a6",
    fontSize: "36px",
  },
  nameFont: {
    fontFamily: "kalam",
    fontWeight: 700,
    color: "#2924a6",
  },
  info: {
    fontFamily: "poppins",
    color: "#2924a6",
  },
};
export default AboutUser;
