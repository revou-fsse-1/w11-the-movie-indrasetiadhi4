import { API_DATABASE } from "../lib/constants.js";

async function getAllWatchlist() {
  try {
    const response = await axios.get(`${API_DATABASE}/watchlist`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { getAllWatchlist };
