import React from "react";
import { makeStyles } from "@mui/styles";
import deezerLogo from "../../Assets/deezer.png";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  main: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: 5,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
  },
});

const TrackCard = ({ track }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <img
        src={track?.album?.cover_small || deezerLogo}
        style={{ borderRadius: 50, width: 30, height: 30, margin: "auto 0" }}
        alt="deezer"
      />
      <Typography color="white" style={{ margin: "auto 0", paddingLeft: 20 }}>
        {track?.title_short}
      </Typography>
    </div>
  );
};

export default TrackCard;
