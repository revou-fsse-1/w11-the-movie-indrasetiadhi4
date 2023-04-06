import { API_DATABASE } from "../lib/constants.js";

async function getMovieById(id) {
  try {
    const response = await axios.get(`${API_DATABASE}/movies/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { getMovieById };
