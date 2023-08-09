import React from "react";
import { Typography, Link, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const FooterContainer = styled(Container)({
  position: "fixed",
  bottom: 0,
  backgroundColor: "gray",
});

export const CustomerFooter = () => {
  return (
    <FooterContainer maxWidth="xl">
      <Typography variant="body1">
        © {new Date().getFullYear()} Itwar Bazaar
      </Typography>
      <Typography variant="body2">An E-Commerce Website</Typography>
      <Typography variant="body2">
        <Link color="inherit" href="https://www.yourwebsite.com/terms">
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link color="inherit" href="http://localhost:3000">
          Home
        </Link>
      </Typography>
      <Facebook />
      <Twitter />
      <Instagram />
    </FooterContainer>
  );
};
