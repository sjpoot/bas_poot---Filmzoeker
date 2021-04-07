//Elementen ophalen uit de DOM
const movieListContainer = document.getElementById("movie-list-container");
const movieFilter = document.getElementsByName("movie-filter");

//Functie om de films in de DOM te laden. (Eerst wordt de DOM leeggehaald)
function addMoviesToDom(movies) {
    while (movieListContainer.hasChildNodes()) {
        movieListContainer.removeChild(movieListContainer.firstChild);
    }

    movies.map(function (movie) {
        const newItem = document.createElement("li");
        const newATag = document.createElement("a");
        const newImage = document.createElement("img");

        movieListContainer.appendChild(newItem);
        newItem.id = movie.imdbID;
        newItem.appendChild(newATag);
        newATag.target = "_blank";
        newATag.href = " https://www.imdb.com/title/" + movie.imdbID;
        newATag.appendChild(newImage);
        newImage.src = movie.Poster;
        newImage.alt = movie.Title;
    });
}

//Zet alle films in de DOM
addMoviesToDom(movies);

//Filter de films op naam
function filterMovies(titlename) {
    const filteredMovies = movies.filter(word => word.Title.includes(titlename));
    addMoviesToDom(filteredMovies);
}

//Filter de films op jaar
function filterYear() {
    const filteredMovies = movies.filter(year => year.Year >= 2014);
    addMoviesToDom(filteredMovies);
}

//De Filter knoppen in een array stoppen
const movieFilterArray = [].slice.call(movieFilter);

//Wanneer een filter is aangeklikt de gefilterde films tonen.
movieFilterArray.forEach(all => all.addEventListener("change", function (event) {
    let target = event.target;
    switch (target.id) {
        case "movie-latest":
            filterYear();
            break;
        case "movie-avengers":
            filterMovies("Avengers");
            break;
        case "movie-x-men":
            filterMovies("X-Men");
            break;
        case "movie-princess":
            filterMovies("Princess");
            break;
        case "movie-batman":
            filterMovies("Batman");
            break;
        case "movie-open":
            const searchMovieOpen = document.getElementById("movie-open").value;
            filterMovies(searchMovieOpen);
            break;
        default:
            addMoviesToDom(movies);
            break;
    };
}));
