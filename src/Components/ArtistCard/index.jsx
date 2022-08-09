import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    color: "red",
  },
  card: {
    width: 300,
    margin: "10px 25px",
    background: "#223843",
  },
});

const ArtistCard = ({ image, name, fans, albums }) => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="artist-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {fans}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArtistCard;
