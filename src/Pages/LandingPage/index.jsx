import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import bg from "../../Assets/bg.jpg";
import deezerLogo from "../../Assets/deezer.png";
import { searchArtist } from "../../Api/search";
import Button from "@mui/material/Button";
import ArtistCard from "../../Components/ArtistCard";
import CircularProgress from "@mui/material/CircularProgress";

const useStyles = makeStyles({
  header: {
    color: "red",
  },
  landingPage: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 100,
    margin: "1rem auto",
  },
  searchBar: {
    background: "white",
    padding: 5,
    width: "75%",
    margin: "0 auto",
    borderRadius: 3,
    textAlign: "center",
  },
  searchField: {
    width: "100%",
    height: 30,
    borderRadius: 4,
    border: "none",
    background: "rgba(240, 248, 255, 0.584)",
    outline: "none",
  },
  button: {
    width: 150,
    height: 45,
    margin: "20px auto !important",
    background: "white !important",
    color: "blue !important",
  },
  body: {
    height: "100%",
    width: "90%",
    background: "white",
    margin: "0 auto",
  },
  left: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    marginTop: 105,
  },
  header: {
    height: 70,
    padding: 15,
  },
  title: {
    color: "white",
    fontSize: "2rem",
    paddingLeft: 15,
    fontWeight: "bolder",
    background: "#223843",
    borderRadius: 5,
  },
  listContainer: {
    flexWrap: "wrap",
    justifyContent: "flex-start",
    display: "flex",
    flexDirection: "row",
    overflowY: "scroll",
    maxHeight: "85%",
  },
  loading: {
    margin: "0 auto",
  },
});

const artistss = [
  {
    id: "89956372",
    name: "Em Beihold",
    link: "https://www.deezer.com/artist/89956372",
    picture: "https://api.deezer.com/artist/89956372/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/3e26a9295f2d98b9d0cc109a03b6d5bf/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/3e26a9295f2d98b9d0cc109a03b6d5bf/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/3e26a9295f2d98b9d0cc109a03b6d5bf/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/3e26a9295f2d98b9d0cc109a03b6d5bf/1000x1000-000000-80-0-0.jpg",
    nb_album: 15,
    nb_fan: 2772,
    radio: true,
    tracklist: "https://api.deezer.com/artist/89956372/top?limit=50",
    type: "artist",
  },
  {
    id: "10075978",
    name: "Hillsong Em Português",
    link: "https://www.deezer.com/artist/10075978",
    picture: "https://api.deezer.com/artist/10075978/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/7b3ac2118e955f7e2df481887c9e1a02/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/7b3ac2118e955f7e2df481887c9e1a02/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/7b3ac2118e955f7e2df481887c9e1a02/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/7b3ac2118e955f7e2df481887c9e1a02/1000x1000-000000-80-0-0.jpg",
    nb_album: 7,
    nb_fan: 22510,
    radio: true,
    tracklist: "https://api.deezer.com/artist/10075978/top?limit=50",
    type: "artist",
  },
  {
    id: "54176",
    name: "Quarteto Em Cy",
    link: "https://www.deezer.com/artist/54176",
    picture: "https://api.deezer.com/artist/54176/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/3d7b8f78f0ed0f9fbb8ab0d5dd9fcf55/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/3d7b8f78f0ed0f9fbb8ab0d5dd9fcf55/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/3d7b8f78f0ed0f9fbb8ab0d5dd9fcf55/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/3d7b8f78f0ed0f9fbb8ab0d5dd9fcf55/1000x1000-000000-80-0-0.jpg",
    nb_album: 31,
    nb_fan: 34817,
    radio: true,
    tracklist: "https://api.deezer.com/artist/54176/top?limit=50",
    type: "artist",
  },
  {
    id: "147859",
    name: "eM",
    link: "https://www.deezer.com/artist/147859",
    picture: "https://api.deezer.com/artist/147859/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/a8458a08706e9f938cf0c4fd098bead4/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/a8458a08706e9f938cf0c4fd098bead4/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/a8458a08706e9f938cf0c4fd098bead4/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/a8458a08706e9f938cf0c4fd098bead4/1000x1000-000000-80-0-0.jpg",
    nb_album: 77,
    nb_fan: 770,
    radio: true,
    tracklist: "https://api.deezer.com/artist/147859/top?limit=50",
    type: "artist",
  },
  {
    id: "240969",
    name: "Reação Em Cadeia",
    link: "https://www.deezer.com/artist/240969",
    picture: "https://api.deezer.com/artist/240969/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/d0edaede5e171d937fcc45db3e4787c1/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/d0edaede5e171d937fcc45db3e4787c1/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/d0edaede5e171d937fcc45db3e4787c1/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/d0edaede5e171d937fcc45db3e4787c1/1000x1000-000000-80-0-0.jpg",
    nb_album: 10,
    nb_fan: 72599,
    radio: true,
    tracklist: "https://api.deezer.com/artist/240969/top?limit=50",
    type: "artist",
  },
  {
    id: "352219",
    name: "Soulja Boy",
    link: "https://www.deezer.com/artist/352219",
    picture: "https://api.deezer.com/artist/352219/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/d14574ec8900da755f95765066e123d3/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/d14574ec8900da755f95765066e123d3/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/d14574ec8900da755f95765066e123d3/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/d14574ec8900da755f95765066e123d3/1000x1000-000000-80-0-0.jpg",
    nb_album: 87,
    nb_fan: 559584,
    radio: true,
    tracklist: "https://api.deezer.com/artist/352219/top?limit=50",
    type: "artist",
  },
  {
    id: "5816327",
    name: "Ay Em",
    link: "https://www.deezer.com/artist/5816327",
    picture: "https://api.deezer.com/artist/5816327/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/b2fa4928bad137b3aa3b3c8df9d417ef/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/b2fa4928bad137b3aa3b3c8df9d417ef/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/b2fa4928bad137b3aa3b3c8df9d417ef/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/b2fa4928bad137b3aa3b3c8df9d417ef/1000x1000-000000-80-0-0.jpg",
    nb_album: 33,
    nb_fan: 3822,
    radio: true,
    tracklist: "https://api.deezer.com/artist/5816327/top?limit=50",
    type: "artist",
  },
  {
    id: "100705882",
    name: "Tijana eM",
    link: "https://www.deezer.com/artist/100705882",
    picture: "https://api.deezer.com/artist/100705882/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/383ecab1e4b62dd4e265cf468956c62a/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/383ecab1e4b62dd4e265cf468956c62a/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/383ecab1e4b62dd4e265cf468956c62a/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/383ecab1e4b62dd4e265cf468956c62a/1000x1000-000000-80-0-0.jpg",
    nb_album: 8,
    nb_fan: 2655,
    radio: true,
    tracklist: "https://api.deezer.com/artist/100705882/top?limit=50",
    type: "artist",
  },
  {
    id: "152175712",
    name: "CoComelon em Português",
    link: "https://www.deezer.com/artist/152175712",
    picture: "https://api.deezer.com/artist/152175712/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/76e9e7c0266f2aaca2c8af2e6c6c2256/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/76e9e7c0266f2aaca2c8af2e6c6c2256/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/76e9e7c0266f2aaca2c8af2e6c6c2256/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/76e9e7c0266f2aaca2c8af2e6c6c2256/1000x1000-000000-80-0-0.jpg",
    nb_album: 16,
    nb_fan: 269,
    radio: true,
    tracklist: "https://api.deezer.com/artist/152175712/top?limit=50",
    type: "artist",
  },
  {
    id: "5586899",
    name: "Ministério Ardendo em Fogo",
    link: "https://www.deezer.com/artist/5586899",
    picture: "https://api.deezer.com/artist/5586899/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/2d54abe96125c635381f4d4283f3ff74/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/2d54abe96125c635381f4d4283f3ff74/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/2d54abe96125c635381f4d4283f3ff74/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/2d54abe96125c635381f4d4283f3ff74/1000x1000-000000-80-0-0.jpg",
    nb_album: 2,
    nb_fan: 11472,
    radio: true,
    tracklist: "https://api.deezer.com/artist/5586899/top?limit=50",
    type: "artist",
  },
  {
    id: "156628032",
    name: "Blippi em Português",
    link: "https://www.deezer.com/artist/156628032",
    picture: "https://api.deezer.com/artist/156628032/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/e31726080c7562ec547406d40253653f/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/e31726080c7562ec547406d40253653f/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/e31726080c7562ec547406d40253653f/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/e31726080c7562ec547406d40253653f/1000x1000-000000-80-0-0.jpg",
    nb_album: 10,
    nb_fan: 43,
    radio: true,
    tracklist: "https://api.deezer.com/artist/156628032/top?limit=50",
    type: "artist",
  },
  {
    id: "6486413",
    name: "Vi-Em",
    link: "https://www.deezer.com/artist/6486413",
    picture: "https://api.deezer.com/artist/6486413/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/fa699ee44df16d7cd6a26afd574bcdb2/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/fa699ee44df16d7cd6a26afd574bcdb2/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/fa699ee44df16d7cd6a26afd574bcdb2/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/fa699ee44df16d7cd6a26afd574bcdb2/1000x1000-000000-80-0-0.jpg",
    nb_album: 31,
    nb_fan: 14872,
    radio: true,
    tracklist: "https://api.deezer.com/artist/6486413/top?limit=50",
    type: "artist",
  },
  {
    id: "50487402",
    name: "Nós em Um ",
    link: "https://www.deezer.com/artist/50487402",
    picture: "https://api.deezer.com/artist/50487402/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/c58693ff59546ee87933497737a462a5/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/c58693ff59546ee87933497737a462a5/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/c58693ff59546ee87933497737a462a5/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/c58693ff59546ee87933497737a462a5/1000x1000-000000-80-0-0.jpg",
    nb_album: 12,
    nb_fan: 509,
    radio: true,
    tracklist: "https://api.deezer.com/artist/50487402/top?limit=50",
    type: "artist",
  },
  {
    id: "89259782",
    name: "Em Casa",
    link: "https://www.deezer.com/artist/89259782",
    picture: "https://api.deezer.com/artist/89259782/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/bf8bb597f70d348cbb6c506560acafce/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/bf8bb597f70d348cbb6c506560acafce/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/bf8bb597f70d348cbb6c506560acafce/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/bf8bb597f70d348cbb6c506560acafce/1000x1000-000000-80-0-0.jpg",
    nb_album: 4,
    nb_fan: 8,
    radio: true,
    tracklist: "https://api.deezer.com/artist/89259782/top?limit=50",
    type: "artist",
  },
  {
    id: "6843263",
    name: "Jay Em",
    link: "https://www.deezer.com/artist/6843263",
    picture: "https://api.deezer.com/artist/6843263/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/f790971dc1cdf6f2a5f49ec6acd4405f/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/f790971dc1cdf6f2a5f49ec6acd4405f/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/f790971dc1cdf6f2a5f49ec6acd4405f/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/f790971dc1cdf6f2a5f49ec6acd4405f/1000x1000-000000-80-0-0.jpg",
    nb_album: 27,
    nb_fan: 353,
    radio: true,
    tracklist: "https://api.deezer.com/artist/6843263/top?limit=50",
    type: "artist",
  },
  {
    id: "1180056",
    name: "Quinteto em branco e preto",
    link: "https://www.deezer.com/artist/1180056",
    picture: "https://api.deezer.com/artist/1180056/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/9eba684972caaaa3e1bc568f7bc7aa0a/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/9eba684972caaaa3e1bc568f7bc7aa0a/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/9eba684972caaaa3e1bc568f7bc7aa0a/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/9eba684972caaaa3e1bc568f7bc7aa0a/1000x1000-000000-80-0-0.jpg",
    nb_album: 4,
    nb_fan: 3950,
    radio: true,
    tracklist: "https://api.deezer.com/artist/1180056/top?limit=50",
    type: "artist",
  },
  {
    id: "57911232",
    name: "Música em Família",
    link: "https://www.deezer.com/artist/57911232",
    picture: "https://api.deezer.com/artist/57911232/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/73eb16c35af651140f1a478f60bd1b53/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/73eb16c35af651140f1a478f60bd1b53/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/73eb16c35af651140f1a478f60bd1b53/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/73eb16c35af651140f1a478f60bd1b53/1000x1000-000000-80-0-0.jpg",
    nb_album: 7,
    nb_fan: 220,
    radio: true,
    tracklist: "https://api.deezer.com/artist/57911232/top?limit=50",
    type: "artist",
  },
  {
    id: "11581819",
    name: "Amor em Movimento",
    link: "https://www.deezer.com/artist/11581819",
    picture: "https://api.deezer.com/artist/11581819/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/c091fb95a8bd858ffee18da312c8db69/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/c091fb95a8bd858ffee18da312c8db69/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/c091fb95a8bd858ffee18da312c8db69/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/c091fb95a8bd858ffee18da312c8db69/1000x1000-000000-80-0-0.jpg",
    nb_album: 5,
    nb_fan: 316,
    radio: true,
    tracklist: "https://api.deezer.com/artist/11581819/top?limit=50",
    type: "artist",
  },
  {
    id: "90560562",
    name: "KiiYii em Português",
    link: "https://www.deezer.com/artist/90560562",
    picture: "https://api.deezer.com/artist/90560562/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/28a84b9b2669b8d827e2f31dcbeb9abc/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/28a84b9b2669b8d827e2f31dcbeb9abc/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/28a84b9b2669b8d827e2f31dcbeb9abc/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/28a84b9b2669b8d827e2f31dcbeb9abc/1000x1000-000000-80-0-0.jpg",
    nb_album: 15,
    nb_fan: 4,
    radio: true,
    tracklist: "https://api.deezer.com/artist/90560562/top?limit=50",
    type: "artist",
  },
  {
    id: "11826679",
    name: "Flotilha em Alta-terra",
    link: "https://www.deezer.com/artist/11826679",
    picture: "https://api.deezer.com/artist/11826679/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/b42ec5901b27e61407d07456652b42f4/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/b42ec5901b27e61407d07456652b42f4/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/b42ec5901b27e61407d07456652b42f4/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/b42ec5901b27e61407d07456652b42f4/1000x1000-000000-80-0-0.jpg",
    nb_album: 4,
    nb_fan: 469,
    radio: true,
    tracklist: "https://api.deezer.com/artist/11826679/top?limit=50",
    type: "artist",
  },
  {
    id: "102461372",
    name: "Papo em off",
    link: "https://www.deezer.com/artist/102461372",
    picture: "https://api.deezer.com/artist/102461372/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/ca963fc723b6f8be8de9fb8659b52b54/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/ca963fc723b6f8be8de9fb8659b52b54/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/ca963fc723b6f8be8de9fb8659b52b54/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/ca963fc723b6f8be8de9fb8659b52b54/1000x1000-000000-80-0-0.jpg",
    nb_album: 3,
    nb_fan: 53,
    radio: true,
    tracklist: "https://api.deezer.com/artist/102461372/top?limit=50",
    type: "artist",
  },
  {
    id: "10733770",
    name: "Sertanejo em Forró",
    link: "https://www.deezer.com/artist/10733770",
    picture: "https://api.deezer.com/artist/10733770/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/a3b84c3ef594e06ea7e0d6e2d9234deb/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/a3b84c3ef594e06ea7e0d6e2d9234deb/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/a3b84c3ef594e06ea7e0d6e2d9234deb/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/a3b84c3ef594e06ea7e0d6e2d9234deb/1000x1000-000000-80-0-0.jpg",
    nb_album: 1,
    nb_fan: 2952,
    radio: true,
    tracklist: "https://api.deezer.com/artist/10733770/top?limit=50",
    type: "artist",
  },
  {
    id: "12144034",
    name: "Walfredo em Busca da Simbiose",
    link: "https://www.deezer.com/artist/12144034",
    picture: "https://api.deezer.com/artist/12144034/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/e4f33428ae0667ae9e120dd982e4747f/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/e4f33428ae0667ae9e120dd982e4747f/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/e4f33428ae0667ae9e120dd982e4747f/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/e4f33428ae0667ae9e120dd982e4747f/1000x1000-000000-80-0-0.jpg",
    nb_album: 19,
    nb_fan: 840,
    radio: true,
    tracklist: "https://api.deezer.com/artist/12144034/top?limit=50",
    type: "artist",
  },
  {
    id: "4877227",
    name: "Comunidade da Graça em Ubatuba",
    link: "https://www.deezer.com/artist/4877227",
    picture: "https://api.deezer.com/artist/4877227/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/9879ff933307537be487bb2af524fb93/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/9879ff933307537be487bb2af524fb93/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/9879ff933307537be487bb2af524fb93/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/9879ff933307537be487bb2af524fb93/1000x1000-000000-80-0-0.jpg",
    nb_album: 3,
    nb_fan: 415,
    radio: true,
    tracklist: "https://api.deezer.com/artist/4877227/top?limit=50",
    type: "artist",
  },
  {
    id: "14126679",
    name: "Ministério Em Adoração",
    link: "https://www.deezer.com/artist/14126679",
    picture: "https://api.deezer.com/artist/14126679/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/a8a3cafe60bba97a487f6d5e4b51cdea/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/a8a3cafe60bba97a487f6d5e4b51cdea/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/a8a3cafe60bba97a487f6d5e4b51cdea/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/a8a3cafe60bba97a487f6d5e4b51cdea/1000x1000-000000-80-0-0.jpg",
    nb_album: 3,
    nb_fan: 237,
    radio: true,
    tracklist: "https://api.deezer.com/artist/14126679/top?limit=50",
    type: "artist",
  },
];

const letters = "abcdefghijklmnopqrstuvwxyz";

const LandingPage = () => {
  const classes = useStyles();

  const [artists, setArtists] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [displaySuggested, setDisplaySuggested] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // searchArtist(generateRandomString()).then((list) =>
    //   setSuggested(list?.data?.data)
    // );
    setSuggested(artistss);
  }, []);

  const generateRandomString = () => {
    return letters[Math.floor(Math.random() * 10)];
  };

  const search = () => {
    setLoading(true);
    setDisplaySuggested(false);
    searchArtist(searchValue).then((list) => {
      setArtists(list?.data?.data);
      setLoading(false);
    });
  };

  return (
    <Box className={classes.landingPage}>
      <div className={classes.left}>
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <img src={deezerLogo} className={classes.logo} />
        </Box>
        <Box className={classes.searchBar}>
          <input
            className={classes.searchField}
            placeholder="Search Artist"
            inputprops={{
              type: "search",
            }}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Box>
        <Button variant="contained" className={classes.button} onClick={search}>
          Search
        </Button>
      </div>

      <Box className={classes.body}>
        <div className={classes.header}>
          <Typography className={classes.title} variant="h6">
            {displaySuggested ? "Suggested Artists:" : "Search Results"}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          {loading && <CircularProgress className={classes.loading} />}
        </div>
        <Box className={classes.listContainer}>
          {displaySuggested &&
            suggested
              .slice(0, 3)
              .map((artist) => (
                <ArtistCard
                  name={artist.name}
                  image={artist.picture_big}
                  fans={artist.nb_fan}
                  albums={artist.nb_album}
                />
              ))}
          {!displaySuggested &&
            artists.length > 0 &&
            artists.map((artist) => (
              <ArtistCard
                name={artist.name}
                image={artist.picture_big}
                fans={artist.nb_fan}
                albums={artist.nb_album}
              />
            ))}
          <Box>
            {!displaySuggested && artists.length < 0 && !loading && (
              <Typography variant="h7">No artists found</Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
