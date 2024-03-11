import React, { ReactNode } from "react";
import { Box, Container, Typography } from "@mui/material";

interface HeroTextProps {
  text: string | string[];
  subtext: ReactNode;
}
const HeroText = ({ text, subtext }: HeroTextProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          paddingTop: "20%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Array.isArray(text) ? (
          text.map((text, i) => (
            <Typography
              key={text}
              mx={2}
              variant="h4"
              component="h3"
              sx={{
                color: "white",
                textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {text}
            </Typography>
          ))
        ) : (
          <Typography
            mx={2}
            variant="h2"
            component="h3"
            sx={{
              color: "white",
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {text}
          </Typography>
        )}
      </Box>
      <Typography
        variant="body1"
        maxWidth={"sm"}
        textAlign={"center"}
        sx={{
          color: "white",
          textShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {subtext}
      </Typography>
    </Box>
  );
};

interface HeroProps {
  image: string;
  text: string | string[];
  subtext: ReactNode;
}
export default function Hero({ image, text, subtext }: HeroProps) {
  return (
    <Container maxWidth="lg" sx={{ height: "60vh" }}>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "inherit",
          width: "100%",
          display: "flex",
          zIndex: -1,
          opacity: 0.8,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            background: "rgba(0,0,0,0.3)",
          }}
        ></Box>
      </Box>
      <HeroText text={text} subtext={subtext} />
    </Container>
  );
}
