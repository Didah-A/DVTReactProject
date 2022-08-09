import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

const useStyles = makeStyles({
  main: {
    height: 300,
    width: "50%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 350,
    height: 350,
    zIndex: 1000,
  },
  info: {
    width: "50%",
    // background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white",
  },
  fans: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});

const ArtistDetailsCard = ({ artist }) => {
  const classes = useStyles(artist);

  return (
    <div className={classes.main}>
      <div className={classes.image}>
        <img
          src={artist.picture_xl}
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>
      <div className={classes.info}>
        <Typography variant="h3" style={{ textAlign: "center" }}>
          {artist.name}
        </Typography>
        <Typography variant="h6" className={classes.fans}>
          <FavoriteIcon
            sx={{
              color: "red",
              fontSize: 15,
              margin: "auto 0",
              marginRight: 1,
            }}
          />
          {artist.nb_fan}
        </Typography>
      </div>
    </div>
  );
};

export default ArtistDetailsCard;
