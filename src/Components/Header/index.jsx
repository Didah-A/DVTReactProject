import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import deezerLogo from "../../Assets/deezer.png";
import { searchArtist } from "../../Api/search";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  header: {
    background: "rgba(13, 3, 33, 0.5)",
    height: 100,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 45,
  },
  logo: {
    width: 100,
    height: 100,
  },
  searchField: {
    width: "70%",
    height: 20,
    margin: "auto 0",
    borderRadius: 10,
    border: "none",
    outline: "none",
    padding: 10,
    background: "rgba(255, 255, 255, 0.21)",
    color: "white",
  },
  searchArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "40%",
  },
  Button: {
    background: "rgba(255, 255, 255, 0.41) !important",
    height: 30,
    margin: "auto 1rem !important",
  },
});

const Header = () => {
  const classes = useStyles();
  const [artists, setArtists] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const search = () => {
    setLoading(true);
    searchArtist(searchValue).then((list) => {
      setArtists(list?.data?.data);
      setLoading(false);
    });
  };
  return (
    <div className={classes.header}>
      <img src={deezerLogo} className={classes.logo} />
      <div className={classes.searchArea}>
        <input
          className={classes.searchField}
          placeholder="Search Artist..."
          inputprops={{
            type: "search",
          }}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button className={classes.Button} variant="contained">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Header;
