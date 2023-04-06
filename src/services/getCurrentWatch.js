import { API_DATABASE } from "../lib/constants.js";

async function getCurrentWatch() {
  try {
    const response = await axios.get(`${API_DATABASE}/currentWatch`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export { getCurrentWatch };
