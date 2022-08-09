import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TopArtistsCard from "./artist";
import { searchArtist } from "../../Api/search";

const useStyles = makeStyles({
  topArtists: {
    maxWidth: "100%",
    background: "rgba(13, 3, 33, 0.9)",
    height: 200,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: "auto",
    marginBottom: 0,
  },
  text: {
    color: "white",
    paddingLeft: 50,
  },
});

const letters = "abcdefghijklmnopqrstuvwxyz";

const TopArtists = () => {
  const classes = useStyles();

  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    searchArtist(generateRandomString()).then((list) =>
      setSuggested([...list?.data?.data])
    );
  }, []);

  const generateRandomString = () => {
    return letters[Math.floor(Math.random() * 10)];
  };

  return (
    <div className={classes.main}>
      <Typography variant="h6" className={classes.text}>
        Suggested Artists:
      </Typography>
      <div className={classes.topArtists}>
        {suggested?.slice(0, 9)?.map((artist) => (
          <TopArtistsCard
            name={artist.name}
            image={artist.picture_medium}
            id={artist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
