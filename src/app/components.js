function movieCardComponent(movie) {
  return `
      <a class="card-${movie.id}" href="../movie/index.html?id=${movie.id}">
        <img src="${movie.image}" alt="Cover movie ${movie.title}">
      </a>
    `;
}

function movieWithRatingCardComponent(movie) {
  return `
      <a class="card-${movie.id}" href="../movie/index.html?id=${movie.id}">
        <img src="${movie.image}" alt="Cover movie ${movie.title}">
      </a>
      <div>
        <p>Rating ${movie.rating}
      </div>
    `;
}

function movieDetailComponent(movie) {
  return `
  <div>
    <div><h2>${movie.title}</h2></div>
      <div>
        <div><img src="${movie.image}" alt="Cover movie ${movie.title}"></div>
        <div>
          <div>${movie.genre.join(",")}</div>
          <div><p>${movie.synopsis}</p></div>
          <div>IMDB Rating ${movie.rating}/10</div>
        </div>
      </div>
    </div>
    <div><button>Add to Watchlist</button>
    <div>Embed youtube</div>
  `;
}

export {
  movieCardComponent,
  movieWithRatingCardComponent,
  movieDetailComponent,
};
