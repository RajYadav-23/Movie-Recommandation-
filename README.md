Movie Recommendation App
Overview
The Movie Recommendation App is a simple, interactive web application that allows users to search for movies by title, view movie details like posters and release years, and toggle between light and dark themes. The app fetches movie data from the OMDb API and dynamically displays the results.

Features
Movie Search: Users can search for movies by title, and the app fetches data from the OMDb API.
Movie List: Displays a list of movies with movie titles, posters, and release years.
Dark Mode: Toggle between light and dark modes for a personalized experience.
Responsive Design: Mobile-friendly and works well on various screen sizes.
Technologies Used
HTML5: For structuring the app’s content.
CSS3: For styling the app with light and dark themes.
JavaScript: Implements functionality, including fetching movie data from the OMDb API, dark mode toggle, and handling user interactions.
OMDb API: An external API used to retrieve movie data based on the movie title.

How It Works
Search for Movies: The user enters a movie title into the input field and submits the form.
Fetch Movie Data: The app calls the OMDb API using the entered movie title.
Display Movie Results: If matching movies are found, they are displayed as a list with movie posters, titles, and release years.
Error Handling: If no movies are found or an error occurs, the user is shown a message indicating no results.
Dark Mode: The user can toggle between dark and light modes. The app remembers the theme choice using localStorage.

Code Breakdown
index.html
The HTML file contains the structure of the app, including the input field for searching movies, the theme toggle button, and a container to display the list of movie results.

styles.css
The CSS file styles the app, including defining the appearance of light and dark modes, form elements, and movie list items. It includes animations for smooth transitions when switching themes or hovering over movie items.

script.js
This JavaScript file:

Handles the logic for toggling between light and dark themes.
Handles the movie search functionality by fetching data from the OMDb API.
Displays the movie results dynamically and handles errors.
Saves the user’s theme preference in localStorage to persist between sessions.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.
