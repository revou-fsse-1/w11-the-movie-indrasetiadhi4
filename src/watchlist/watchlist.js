import { getAllWatchlist } from "../services/getAllWatchlist.js";
import { movieWithRatingCardComponent } from "../app/components.js";

async function renderMoviesList() {
  let movies = await getAllWatchlist();
  let componentList = movies.map((movie) =>
    movieWithRatingCardComponent(movie)
  );
  let cardListWrapper = document.getElementById("movie-list");
  cardListWrapper.innerHTML = componentList.join("");
}

addEventListener("DOMContentLoaded", function () {
  renderMoviesList();
});
