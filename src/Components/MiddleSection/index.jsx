import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import headphones from "../../Assets/back.png";
import { searchArtist } from "../../Api/search";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles({
  section: {
    height: 180,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    background: "rgba(13, 3, 33, 0.8)",
  },
  logo: {
    height: 300,
    width: 500,
    marginLeft: 100,
  },
  quote: {
    color: "white",
    width: 500,
    paddingTop: 50,
    fontSize: 20,
  },
});

const MiddleSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Typography variant="body" className={classes.quote}>
        {`Music expresses that which cannot be said and on which it is impossible
        to be silent.`}
      </Typography>
      <img src={headphones} className={classes.logo} />
    </div>
  );
};

export default MiddleSection;
