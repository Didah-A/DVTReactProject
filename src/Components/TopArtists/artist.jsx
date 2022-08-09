import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import headphones from "../../Assets/back.png";
import { searchArtist } from "../../Api/search";
import { Button, Typography } from "@mui/material";
import { artistsList } from "../../Api/utils/artists";

const useStyles = makeStyles({
  card: {
    width: "100%",
    height: 100,
    marginTop: 30,
    width: 100,
    margin: 10,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  text: {
    textAlign: "center !important",
    width: "100%",
    fontSize: 12,
    paddingTop: 10,
  },
});

const TopArtistsCard = ({ name, image }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={image} className={classes.image} />
      <Typography variant="body" color={"white"} className={classes.text}>
        {name}
      </Typography>
    </div>
  );
};

export default TopArtistsCard;
