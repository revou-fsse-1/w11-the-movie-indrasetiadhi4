import { getMovieById } from "../services/getMovieById.js";
import { getAllWatchlist } from "../services/getAllWatchlist.js";
import { addWatchlist } from "../services/addWatchlist.js";
import { deleteWatchlist } from "../services/deleteWatchlist.js";
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

  await watchlistFunctionality(movie);
}

async function watchlistFunctionality(movie) {
  let watchlist = await getAllWatchlist();
  let isWatchlist = watchlist.some((movieDB) => movieDB.id === movie.id);
  console.log("found", isWatchlist);
  if (isWatchlist) {
    let watchlistButton = document.getElementById("add-watchlist-button");
    watchlistButton.innerHTML = `<button type="button" class="px-2 py-2 mb-2 bg-gray-300 rounded-2xl text-center font-medium"><i class="fa-solid fa-bookmark" style="color: #00cc03;"></i> Added to watchlist</button>`;
    //watchlistButton.style.color = "green";

    watchlistButton.addEventListener("click", async function (e) {
      e.preventDefault();
      //watchlistButton.innerHTML = `<button type="button">add to watchlist</button>`;

      await deleteWatchlist(movie.id);

      renderMovieDetail();
    });
  } else {
    let watchlistButton = document.getElementById("add-watchlist-button");
    watchlistButton.innerHTML = `<button type="button" class="px-2 py-2 mb-2 item bg-gray-300 rounded-2xl text-center font-medium">Add to watchlist</button>`;
    //watchlistButton.style.color = "black";

    watchlistButton.addEventListener("click", async function (e) {
      //watchlistButton.innerHTML = `<button type="button">added to watchlist</button>`;
      console.log(movie);
      await addWatchlist(movie);

      alert("Movie successfully added to your watchlist!");

      renderMovieDetail();
    });
  }
}

addEventListener("DOMContentLoaded", function () {
  renderMovieDetail();
});
