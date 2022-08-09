import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { Container, Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import DashBoard from "./Pages/LandingPage/landingPage";
import Search from "./Pages/Search";

const useStyles = makeStyles({
  container: {
    height: "100%",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Box className={classes.container}>
        <Routes>
          <Route path="/" component={<DashBoard />}>
            <Route index element={<DashBoard />} />
            <Route path="search/:string" element={<Search />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
