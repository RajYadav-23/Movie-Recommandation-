// API Key
const API_KEY = '9564455d'; // Replace with your actual OMDb API key

// Check for saved theme and apply it
window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    document.querySelector('#themeToggle').textContent = savedTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
};

// Theme toggle functionality
document.getElementById('themeToggle').addEventListener('click', function () {
  const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Toggle theme classes
  document.body.classList.remove(currentTheme);
  document.body.classList.add(newTheme);

  // Update button text
  document.querySelector('#themeToggle').textContent = newTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  // Save the theme preference to localStorage
  localStorage.setItem('theme', newTheme);
});

// Event listener for form submission
document.getElementById('genreForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const movieTitle = document.getElementById('movieTitle').value;

  const movieList = document.getElementById('movieList');
  movieList.innerHTML = ''; // Clear previous results

  if (!movieTitle) {
    alert('Please enter a movie title.');
    return;
  }

  // Fetch movie data from OMDb API
  fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.Response === 'True') {
        const movies = data.Search;
        movies.forEach(movie => {
          const li = document.createElement('li');
          li.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}" />
            <div>
              <strong>${movie.Title}</strong> (${movie.Year})
            </div>
          `;
          movieList.appendChild(li);
        });
      } else {
        movieList.innerHTML = '<li class="no-results">No movies found. Please try another title.</li>';
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Error fetching movie data. Please try again later.');
    });
});
