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
    background: "rgba(0, 63, 119, 0.744)",
    borderRadius: 5,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const AlbumCard = ({ album }) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src={album?.cover_small || deezerLogo}
          style={{ borderRadius: 0, width: 30, height: 30, margin: "auto 0" }}
        />
        <Typography color="white" style={{ margin: "auto 0", paddingLeft: 20 }}>
          {album?.title}
        </Typography>
      </div>

      <Typography color="white" style={{ margin: "auto 0", paddingRight: 40 }}>
        {album?.release_date}
      </Typography>
    </div>
  );
};

export default AlbumCard;
