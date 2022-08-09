import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg2 from "../../Assets/bg2.jpg";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import { LoadMore, searchArtist } from "../../Api/search";
import { artistsList } from "../../Api/utils/artists";
import CircularProgress from "@mui/material/CircularProgress";
import ArtistCard from "../../Components/ArtistCard";

const useStyles = makeStyles({
  DashBoard: {
    backgroundImage: `url(${bg2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  loading: {
    margin: "auto auto",
    height: 100,
    width: 100,
  },
  listContainer: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
    overflowY: "scroll",
    maxHeight: "85%",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    WebkitScrollSnapType: "none",
    scrollbarColor: "inherit",
  },
});

const Search = () => {
  const classes = useStyles();
  const { string } = useParams();
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(null);

  useEffect(() => {
    searchArtist(string).then((list) => {
      setLoading(false);
      setArtists(list?.data?.data);
      setNext(list?.data?.next);
    });
  }, []);

  const LoadMoreArtists = () => {
    setNext(null);
    LoadMore(next).then((list) => {
      setArtists([...artists, ...list?.data?.data]);
      setNext(list?.data?.next || null);
    });
  };

  const search = (string) => {
    setLoading(true);
    setNext(null);
    searchArtist(string).then((list) => {
      setArtists(list?.data?.data);
      setNext(list?.data?.next || null);
      setLoading(false);
    });
  };

  return (
    <Box className={classes.DashBoard}>
      <Header value={string} onSearch={search} />
      {loading && (
        <div style={{ display: "flex", justifyContent: "center", height: 500 }}>
          <CircularProgress className={classes.loading} size="" />
        </div>
      )}
      <Box className={classes.listContainer}>
        {artists.length > 0 &&
          !loading &&
          artists.map((artist) => (
            <ArtistCard
              name={artist.name}
              image={artist.picture_big}
              fans={artist.nb_fan}
              albums={artist.nb_album}
              id={artist.id}
            />
          ))}
      </Box>
      {next && (
        <Button style={{ marginBottom: 10 }} onClick={LoadMoreArtists}>
          Load more
        </Button>
      )}
    </Box>
  );
};

export default Search;
