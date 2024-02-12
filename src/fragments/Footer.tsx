import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        mt: 6,
        py: 2,
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h1">
            Trendesign
          </Typography>
          <Box>
            <Link
              href="https://www.facebook.com/trendesign.lb/"
              target="_blank"
              color="inherit"
              sx={{ mx: 1 }}
              aria-label="check on facebook"
            >
              <Facebook />
            </Link>
            <Link
              href="https://wa.me/+96170888660"
              target="_blank"
              color="inherit"
              sx={{ mx: 1 }}
              aria-label="Chat on whatsapp"
            >
              <WhatsApp />
            </Link>
            <Link
              href="https://www.instagram.com/trendesign.lb/"
              target="_blank"
              color="inherit"
              sx={{ mx: 1 }}
              aria-label="check on instagram"
            >
              <Instagram />
            </Link>
          </Box>
        </Box>
        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
          Phone:{" "}
          <Link
            sx={{ color: "white" }}
            href="tel:+9611555360"
            aria-label="call tel:+9611555360"
          >
            +961 1 555-360
          </Link>
          ,{" "}
          <Link
            sx={{ color: "white" }}
            href="tel:+96170888660"
            aria-label="call tel:+96170888660"
          >
            +961 70 888 660
          </Link>
        </Typography>
        <Typography variant="body2" align="center">
          Email:{" "}
          <Link
            sx={{ color: "white" }}
            href="mailto:sales@trendesign.com"
            aria-label="send mailto:sales@trendesign.com"
          >
            sales@trendesign.com
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
