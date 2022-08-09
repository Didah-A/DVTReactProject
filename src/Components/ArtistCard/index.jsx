import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Icon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AlbumIcon from "@mui/icons-material/Album";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  header: {
    color: "red",
  },
  card: {
    width: 200,
    background: "none",
    margin: 15,
    background: "rgba(13, 3, 33, 0.5)",
    boxShadow: "-1px 5px 5px -3px rgba(110,110,110,0.53)",
    cursor: "pointer",
  },
  image: {
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  fans: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 59,
  },
});

const ArtistCard = ({ image, name, fans, albums }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="artist-image"
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="body" component="div" color={"white"}>
          {name}
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2" color={"white"} className={classes.fans}>
            <FavoriteIcon
              sx={{
                color: "red",
                fontSize: 15,
                margin: "auto 0",
                marginRight: 1,
              }}
            />
            {fans}
          </Typography>
          <Typography variant="body2" color={"white"} className={classes.fans}>
            <AlbumIcon
              sx={{
                color: "white",
                fontSize: 15,
                margin: "auto 0",
                marginRight: 1,
              }}
            />
            {albums}
          </Typography>
        </Box>
      </CardContent>
    </div>
  );
};

export default ArtistCard;
