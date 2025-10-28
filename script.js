// Arrays holding movie objects for each genre.
// Each movie has a title, year, and a short description.
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A wisecracking antihero seeks revenge." },
  { title: "Step Brothers", year: 2008, description: "Two grown men become immature step siblings." },
  { title: "Anchorman", year: 2004, description: "A 1970s news anchor faces change at his station." },
  { title: "The Hangover", year: 2009, description: "Friends piece together a wild night in Vegas." }
];
const actionMovies = [
  { title: "Mad Max: Fury Road", year: 2015, description: "Survivors race across a desert wasteland." },
  { title: "John Wick", year: 2014, description: "A retired hitman seeks vengeance." },
  { title: "Die Hard", year: 1988, description: "A lone cop battles terrorists in a tower." },
  { title: "The Dark Knight", year: 2008, description: "Batman confronts the chaotic Joker." }
];
const dramaMovies = [
  { title: "The Shawshank Redemption", year: 1994, description: "Hope sustains a prisoner over decades." },
  { title: "Forrest Gump", year: 1994, description: "A kind man lives through historic moments." },
  { title: "Fight Club", year: 1999, description: "An insomniac forms a secret club." },
  { title: "The Godfather", year: 1972, description: "A mafia family faces power shifts." }
];
const sciFiMovies = [
  { title: "Inception", year: 2010, description: "A team enters minds through shared dreams." },
  { title: "The Matrix", year: 1999, description: "A hacker learns reality is a simulation." },
  { title: "Interstellar", year: 2014, description: "Explorers travel through a wormhole to save Earth." },
  { title: "Blade Runner 2049", year: 2017, description: "A detective uncovers a hidden secret." }
];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Display the list of movies (now objects) using a for loop
  let movieListHTML = "<ul>";
  // Loop through each movie object
  for (let i = 0; i < movieList.length; i++) {
    // Get the current movie object
    const movie = movieList[i];
    // Build a list item showing title, year, and description
    movieListHTML += `<li><strong>${movie.title}</strong> (${movie.year}) - ${movie.description}</li>`;
  }
  movieListHTML += "</ul>";
  // Show the list in the movieRecommendations element
  movieRecommendations.innerHTML = movieListHTML;
});