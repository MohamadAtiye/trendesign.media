import { Box, Typography } from "@mui/material";
import { ShowcaseCard } from "../components/ShowcaseCard";
import { CATEGORIES } from "../utils/constants";

export const Showcase = () => {
  return (
    <Box>
      {CATEGORIES.map((cat, index) => (
        <Box
          key={cat.label}
          sx={{
            padding: 4,
            borderBottom:
              index === CATEGORIES.length - 1 ? "" : "2px dashed lightgray",
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            textAlign={"center"}
            mb={2}
            id={cat.anchorID}
          >
            {cat.label}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {cat.sub.map((subcat) => (
              <ShowcaseCard
                key={subcat.title}
                title={subcat.title}
                text={subcat.text}
                image={subcat.image}
              />
            ))}
          </Box>
        </Box>
      ))}

      {/* <ShowcaseCard
        title={"Cards & Papers"}
        text="some random text"
        image="./imgs/uv glass.jpeg"
      />
      <ShowcaseCard
        title={"Digital Printing"}
        text="some random text"
        image="./imgs/uv glass.jpeg"
      />
      <ShowcaseCard
        title={"Woodworking & CNC"}
        text="some random text"
        image="./imgs/cnc.jpeg"
      />
      <ShowcaseCard
        title={"Laser Cutting"}
        text="some random text"
        image="./imgs/laser.jpeg"
      />
      <ShowcaseCard
        title={"Light Boxes"}
        text="some random text"
        image="./imgs/lightbox.jpeg"
      /> */}
    </Box>
  );
};
