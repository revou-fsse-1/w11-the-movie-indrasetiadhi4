function movieCardComponent(movie) {
  return `
      <a class="card-${movie.id}" href="../movie/index.html?id=${movie.id}">
        <img class="w-44 h-64 rounded-2xl" src="${movie.image}" alt="Cover movie ${movie.title}">
      </a>
    `;
}

function movieWithRatingCardComponent(movie) {
  return `
  <div class="relative">
      <a class="card-${movie.id}" href="../movie/index.html?id=${movie.id}">
        <img class="w-44 h-64 rounded-2xl" src="${movie.image}" alt="Cover movie ${movie.title}">
      </a>
      <div class="absolute py-2 px-2 top-0 left-0 text-white font-semibold">
        <p>⭐${movie.rating}
      </div>
      </div>
    `;
}

function movieDetailComponent(movie) {
  return `
  <div>
    <div><h2 class="mb-8 text-4xl leading-normal font-bold">${
      movie.title
    }</h2></div>
    <div class="flex">
      <div>
        <img class="w-48 h-72 rounded-2xl max-[390px]:hidden" src="${
          movie.image
        }" alt="Cover movie ${movie.title}" />
      </div>
      <div>
        <div class="mx-4 mb-2 py-2 text-base font-medium">${movie.genre.join(
          " "
        )}</div>
        <div class="w-96 mx-4 mb-6 text-base font-medium max-[390px]:w-80"><p>${
          movie.synopsis
        }</p></div>
        <div class="mx-4 text-base font-normal">IMDB Rating ⭐${
          movie.rating
        }/10</div>
      </div>
    </div>
  </div>
  <div>
    <div id="add-watchlist-button" class="mb-8 text-right max-[390px]:hidden"></div>
    <div>
      <iframe
        class="h-72 rounded-2xl mb-4 max-[390px]:w-80"
        width="450"
        src="${movie.trailer}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
  `;
}

export {
  movieCardComponent,
  movieWithRatingCardComponent,
  movieDetailComponent,
};
