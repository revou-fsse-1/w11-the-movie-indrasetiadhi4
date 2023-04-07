import { API_DATABASE } from "../lib/constants.js";

async function deleteWatchlist(id) {
  try {
    const response = await axios.delete(`${API_DATABASE}/watchlist/${id}`);
  } catch (err) {
    console.log(err);
  }
}

export { deleteWatchlist };
