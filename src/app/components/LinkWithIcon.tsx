import { Box, Link, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface LinkWithIconProps {
  text: string;
  href: string;
  icon: ReactNode;
  ariaLabel: string;
}
const LinkWithIcon = ({ text, href, icon, ariaLabel }: LinkWithIconProps) => {
  return (
    <Box
      component={Link}
      href={href}
      target="_blank"
      sx={{
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 2,
        width: "fit-content",
      }}
      aria-label={ariaLabel}
    >
      <Typography>
        <b>{text}</b>
      </Typography>
      {icon}
    </Box>
  );
};
export default LinkWithIcon;
