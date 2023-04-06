import { API_DATABASE } from "../lib/constants.js";

async function getAllMovies() {
  try {
    const response = await axios.get(`${API_DATABASE}/movies/`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { getAllMovies };
