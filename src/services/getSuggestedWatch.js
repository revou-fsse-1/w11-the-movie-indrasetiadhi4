import { API_DATABASE } from "../lib/constants.js";

async function getSuggestedWatch() {
  try {
    const response = await axios.get(`${API_DATABASE}/isSuggested`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { getSuggestedWatch };
