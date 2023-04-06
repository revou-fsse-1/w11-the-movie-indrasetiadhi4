import { API_DATABASE } from "../lib/constants.js";

async function getPreviousWatch() {
  try {
    const response = await axios.get(`${API_DATABASE}/isPrevious`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { getPreviousWatch };
