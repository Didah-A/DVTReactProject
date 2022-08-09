import * as React from "react";
import { CardActionArea, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg2 from "../../Assets/bg2.jpg";
import headphones from "../../Assets/head.png";
import Header from "../../Components/Header";
import MiddleSection from "../../Components/MiddleSection";
import TopArtists from "../../Components/TopArtists";

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
  headphones: {
    backgroundImage: `url(${headphones})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const DashBoard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.DashBoard}>
      <div className={classes.headphones}>
        <Header />
        <MiddleSection />
        <TopArtists />
      </div>
    </Box>
  );
};

export default DashBoard;
