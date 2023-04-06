import { getCurrentWatch } from "../services/getCurrentWatch.js";
import { getSuggestedWatch } from "../services/getSuggestedWatch.js";
import { getPreviousWatch } from "../services/getPreviousWatch.js";

import {
  movieCardComponent,
  movieWithRatingCardComponent,
} from "../app/components.js";

async function renderCurrentWatch() {
  let movies = await getCurrentWatch();
  let componentList = movies.map((movie) => movieCardComponent(movie));
  let cardListWrapper = document.getElementById("current-watch-list");
  cardListWrapper.innerHTML = componentList.join("");
}

async function renderSuggestedWatch() {
  let movies = await getSuggestedWatch();
  let componentList = movies.map((movie) =>
    movieWithRatingCardComponent(movie)
  );
  let cardListWrapper = document.getElementById("suggested-watch-list");
  cardListWrapper.innerHTML = componentList.join("");
}

async function renderPreviousWatch() {
  let movies = await getPreviousWatch();
  let componentList = movies.map((movie) => movieCardComponent(movie));
  let cardListWrapper = document.getElementById("previous-watch-list");
  cardListWrapper.innerHTML = componentList.join("");
}

addEventListener("DOMContentLoaded", function () {
  renderCurrentWatch();
  renderSuggestedWatch();
  renderPreviousWatch();
});
