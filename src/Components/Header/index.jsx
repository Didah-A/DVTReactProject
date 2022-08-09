import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import deezerLogo from "../../Assets/deezer.png";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

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

const Header = ({ value, onSearch }) => {
  const classes = useStyles();
  const [artists, setArtists] = useState([]);
  const [searchValue, setSearchValue] = useState(value || "");
  const [loading, setLoading] = useState(false);
  const { string } = useParams();
  const navigate = useNavigate();

  const search = () => {
    if (searchValue.length > 0) {
      if (!string) {
        navigate(`/search/${searchValue}`);
      } else {
        onSearch(searchValue);
      }
    }
  };

  const nav = () => {
    navigate("/");
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className={classes.header}>
      <img src={deezerLogo} className={classes.logo} onClick={nav} />
      <div className={classes.searchArea}>
        <input
          className={classes.searchField}
          placeholder="Search Artist..."
          value={searchValue}
          inputprops={{
            type: "search",
          }}
          onKeyDown={handleKeypress}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button className={classes.Button} variant="contained" onClick={search}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default Header;
