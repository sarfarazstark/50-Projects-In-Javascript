const moviesContainer = document.querySelector(".movies");
const search = document.getElementById("search");
const tmdb_api_key = "ecb8cf86332887dcabc4269cbac53f42";

const render = (data) => {
	moviesContainer.innerHTML = "";
	const html = data.map((movie) => {
		return `<div class="movie">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
        <div class="movie-info">
          <h3>${movie.original_title}</h3>
          <span class="movie-rating">${movie.vote_average.toFixed(1)}</span>
        </div>
        <div class="movie-overview">
          <h3>Overview</h3>
          <p>${movie.overview}</p>
        </div>
      </div>`;
	});
	moviesContainer.insertAdjacentHTML("beforeend", html.join(""));
};

const movie = async () => {
	// const movie = document.getElementById("movie").value;
	const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdb_api_key}`;
	const res = await fetch(url);
	const data = await res.json();
	render(data.results);
};

movie();

const searchData = async (query) => {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=${tmdb_api_key}&query=${query}`;
	const res = await fetch(url);
	const data = await res.json();
	render(data.results);
};

search.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		const query = search.value;
		if (query) {
			searchData(query);
		}
	}
});
