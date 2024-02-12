import { Box, Link, Typography } from "@mui/material";
import Hero from "../components/Hero";
import MapView from "../fragments/MapView";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

export const Contact = () => {
  return (
    <>
      <Hero
        image={"https://trendesign.sirv.com/Images/imgs/contactHero.jpg"}
        text={"Get in touch"}
        subtext={
          <>
            <b>Write, call or visit us</b> for project ideas, feasibility study,
            quotation and cost analysis, or request our design services
          </>
        }
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          padding: 2,
          paddingTop: 4,
        }}
      >
        <Typography variant="h5" component={"body"} gutterBottom>
          Our Social Media
        </Typography>
        <Box>
          <Link
            href="https://www.facebook.com/trendesign.lb/"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
            aria-label="check on facebook"
          >
            <Facebook fontSize="large" />
          </Link>
          <Link
            href="https://wa.me/+96170888660"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
            aria-label="Chat on whatsapp"
          >
            <WhatsApp fontSize="large" />
          </Link>
          <Link
            href="https://www.instagram.com/trendesign.lb/"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
            aria-label="check on instagram"
          >
            <Instagram fontSize="large" />
          </Link>
        </Box>

        <br />
        <Typography variant="h5" component={"body"} gutterBottom>
          Availablity
        </Typography>
        <Typography>
          <b>Monday - Friday</b>: 9 a.m. to 5 p.m.
        </Typography>
        <Typography>
          <b>Saturday</b>: 9 a.m. to 1 p.m.
        </Typography>
        <br />

        <Typography variant="h5" component={"body"} gutterBottom>
          How to reach us
        </Typography>
        <Typography>
          <b>Call us</b> on{" "}
          <Link
            sx={{ color: "black", textDecoration: "none" }}
            href="tel:+9611555360"
          >
            +961 1 555-360
          </Link>
          ,{" "}
          <Link
            sx={{ color: "black", textDecoration: "none" }}
            href="tel:+96170888660"
          >
            +961 70 888 660
          </Link>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "cetner" }}>
          <Typography>
            <b>Whatsapp call or chat</b> at{" "}
            <Link
              sx={{ color: "black", textDecoration: "none" }}
              href="https://wa.me/+96170888660"
              target="_blank"
            >
              +961 70 888 660
            </Link>
          </Typography>
          <Link
            href="https://wa.me/+96170888660"
            target="_blank"
            color="inherit"
            sx={{ mx: 1 }}
          >
            <WhatsApp />
          </Link>
        </Box>

        <Typography>
          <b>By Email</b> at{" "}
          <Link sx={{ color: "black" }} href="mailto:sales@trendesign.com">
            sales@trendesign.com
          </Link>
        </Typography>

        <br />

        <Typography>
          Or visit our office in Haret Hreik, Amlieh street
        </Typography>
        <MapView />
        <br />
      </Box>
    </>
  );
};
