import { getMovieById } from "../services/getMovieById.js";
import { movieDetailComponent } from "../app/components.js";

async function renderMovieDetail() {
  //   const path = window.location.href;
  //   console.log("path", path);

  const params = new URLSearchParams(window.location.search);
  const movieId = params.get("id");
  console.log("movieid", movieId);

  let movie = await getMovieById(movieId);
  let movieComponent = movieDetailComponent(movie);
  let movieWrapper = document.getElementById("movie-detail-id");
  movieWrapper.innerHTML = movieComponent;
}

addEventListener("DOMContentLoaded", function () {
  renderMovieDetail();
});
