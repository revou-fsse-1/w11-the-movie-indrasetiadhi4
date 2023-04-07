import { API_DATABASE } from "../lib/constants.js";

async function addWatchlist(movie) {
  try {
    const response = await axios.post(`${API_DATABASE}/watchlist`, movie);
  } catch (err) {
    console.log(err);
  }
}

export { addWatchlist };
