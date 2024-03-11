import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface ShowcaseCardProps {
  title: string;
  text: string;
  image: string;
}
export const ShowcaseCard = ({ title, text, image }: ShowcaseCardProps) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt={title}
        height="300"
        image={image}
        loading="lazy"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}{" "}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};
