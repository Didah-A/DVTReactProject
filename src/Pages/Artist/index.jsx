import React, { useState, useEffect } from "react";
import { CardActionArea, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg2 from "../../Assets/bg2.jpg";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import {
  getArtist,
  getArtistAlbums,
  getArtistTracks,
  loadMoreAlbums,
} from "../../Api/search";
import { artistsList } from "../../Api/utils/artists";
import CircularProgress from "@mui/material/CircularProgress";
import ArtistCard from "../../Components/ArtistCard";
import ArtistDetailsCard from "../../Components/ArtistDetails";
import TrackCard from "../../Components/Track";
import AlbumCard from "../../Components/Album";

const useStyles = makeStyles({
  DashBoard: {
    backgroundImage: `url(${bg2})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // overflowY: "scroll",
  },
  loading: {
    margin: "auto auto",
    height: 100,
    width: 100,
  },
  songs: {
    minHeight: 100,
    background: "rgba(13, 3, 33, 0.9)",
    width: "75%",
    margin: "0 auto",
    borderRadius: 10,
    paddingBottom: 20,
  },
  albums: {
    minHeight: 300,
    background: "rgba(13, 3, 33, 0.9)",
    width: "75%",
    margin: "0 auto",
    borderRadius: 10,
    paddingBottom: 20,
    marginTop: 30,
  },
});

const ArtistDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(null);

  useEffect(() => {
    getArtist(id).then((artist) => {
      setArtist(artist?.data);
    });
    getArtistTracks(id).then((track) => {
      setTracks([...track?.data?.data]);
    });
    getArtistAlbums(id).then((album) => {
      setAlbums([...album?.data?.data]);
      setNext(album?.data?.next);
      setLoading(false);
    });
  }, []);

  const LoadMoreAlbums = () => {
    setNext(null);
    loadMoreAlbums(next).then((album) => {
      setAlbums([...albums, ...album?.data?.data]);
      setNext(album?.data?.next || null);
    });
  };

  return (
    <Box className={classes.DashBoard}>
      <Header />
      {loading && (
        <div style={{ display: "flex", justifyContent: "center", height: 500 }}>
          <CircularProgress className={classes.loading} size="" />
        </div>
      )}
      {!loading && artist && (
        <>
          <ArtistDetailsCard artist={artist} />
          <Box className={classes.songs}>
            <Typography variant="h6" color="white" style={{ padding: 20 }}>
              Top 5 tracks
            </Typography>
            {tracks?.slice(0, 5)?.map((track) => (
              <TrackCard track={track} />
            ))}
          </Box>
          <Box className={classes.albums}>
            <Typography variant="h6" color="white" style={{ padding: 20 }}>
              Albums
            </Typography>
            {albums.map((album) => (
              <AlbumCard album={album} />
            ))}
            {next && (
              <Button
                style={{ marginBottom: 10, width: "100%" }}
                onClick={LoadMoreAlbums}
              >
                Load more
              </Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default ArtistDetails;
