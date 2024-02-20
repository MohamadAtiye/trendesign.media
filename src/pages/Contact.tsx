import { Box, Typography } from "@mui/material";
import Hero from "../components/Hero";
import MapView from "../fragments/MapView";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { ReactNode } from "react";
import LinkWithIcon from "../components/LinkWithIcon";

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}
const Section = ({ title, icon, children }: SectionProps) => {
  return (
    <Box my={2}>
      <Box sx={{ display: "flex", gap: 2 }}>
        {icon}
        <Typography variant="h5" component={"h3"} gutterBottom>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingLeft: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          gap: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

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
        {/* REACH US */}
        <Section title="Reach Us" icon={<ShareIcon fontSize="large" />}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Typography>
              <b>On Social Media</b>
            </Typography>

            <LinkWithIcon
              text=""
              icon={<Facebook />}
              href="https://www.facebook.com/trendesign.lb/"
              ariaLabel="Facebook page"
            />
            <LinkWithIcon
              text=""
              icon={<Instagram />}
              href="https://www.instagram.com/trendesign.lb/"
              ariaLabel="Instagram page"
            />
            <LinkWithIcon
              text=""
              icon={<WhatsApp />}
              href="https://wa.me/+96170888660"
              ariaLabel="WhatsApp page"
            />
          </Box>

          <LinkWithIcon
            text="Landline: +961 1 555-360"
            icon={<CallIcon />}
            href="tel:+9611555360"
            ariaLabel="Call Landline"
          />
          <LinkWithIcon
            text="Mobile: +961 70 888 660"
            icon={<CallIcon />}
            href="tel:+96170888660"
            ariaLabel="Call Mobile"
          />
          <LinkWithIcon
            text="Email: sales@trendesign.com"
            icon={<EmailIcon />}
            href="mailto:sales@trendesign.com"
            ariaLabel="Send Email"
          />
        </Section>

        {/* OFFICE HOURS SECTION */}
        <Section
          title="Office Hours"
          icon={<AccessTimeIcon fontSize="large" />}
        >
          <Typography>
            <b>Monday - Friday</b>: 9 a.m. to 5 p.m.
          </Typography>
          <Typography>
            <b>Saturday</b>: 9 a.m. to 1 p.m.
          </Typography>
        </Section>

        {/* LOCATION SECTION */}
        <Section title="Location" icon={<LocationOnIcon fontSize="large" />}>
          <Typography>
            Visit our office in Haret Hreik, Amlieh street <br /> Beirut,
            Lebanon
          </Typography>
        </Section>

        <MapView />
        <br />
      </Box>
    </>
  );
};
