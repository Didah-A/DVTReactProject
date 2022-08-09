import axios from "axios";

const baseURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";

export const searchArtist = (string) => {
  return axios.get(`${baseURL}/search/artist?q=${string}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};
