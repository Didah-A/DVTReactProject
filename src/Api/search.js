import axios from "axios";

const baseURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";
const base = "https://cors-anywhere.herokuapp.com/";

export const searchArtist = (string) => {
  return axios.get(`${baseURL}/search/artist?q=${string}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};

export const LoadMore = (next) => {
  return axios.get(`${base}${next}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};

export const getArtist = (id) => {
  return axios.get(`${baseURL}/artist/${id}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};

export const getArtistTracks = (id) => {
  return axios.get(`${baseURL}/artist/${id}/top`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};

export const getArtistAlbums = (id) => {
  return axios.get(`${baseURL}/artist/${id}/albums`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};

export const loadMoreAlbums = (next) => {
  return axios.get(`${base}${next}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};
