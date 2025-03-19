**Cinescope – Your Ultimate Entertainment Guide**

Discover the latest trending movies, TV series, and more with **Cinescope**— the all-in-one entertainment app designed to help you find your next binge-worthy show or movie. Whether you're a movie buff or a TV series enthusiast, Cinescope brings the world of entertainment to your fingertips.

**Key Features:**

- **Trending Movies & TV Series:** Stay up to date with the hottest movies and TV series. Cinescope curates a list of trending content so you never miss out on what everyone is watching.

- **Search & Discover:** Easily search for any movie or TV series by name, genre, or actor. Whether you're looking for old classics or the latest releases, Cinescope has it all.

- **IMDB Ratings:** Get instant access to IMDb ratings for movies and TV series to help you make informed decisions on what to watch.

- **Watch Trailers:** Watch movie and TV trailers directly within the app to get a sneak peek before you dive into a new show or film.

- **Where to Watch:** No more endless searching for streaming platforms. Cinescope shows you where to watch the movie or TV series across multiple streaming platforms, so you can find the best way to enjoy your content.

Cinescope is your personal entertainment assistant, simplifying your search for movies, TV series, and streaming options. Whether you’re planning a movie night or simply looking for something new, Cinescope makes it easy to find what you want to watch next.

**Download Cinescope now and never be out of the loop with your favorite films and shows!**

**Setup Project**
Follow these steps to set up and run the this project locally.

1. Download the project:- Clone or download the repository to your local machine.
2. Install Dependencies:- Open a terminal in the project directory and run the following command to install all necessary dependencies:
```
npm install
```
4. Create an Account on TMDB:- Sign up for an account on TMDB's Developer Site - https://developer.themoviedb.org/docs/getting-started to obtain your API keys. These keys are required to access movie data from TMDB.
5. Update API Keys in the Project:- Navigate to the src/utils/constants.js file and update the following variables with your TMDB and IPInfo API keys:
```
tmdbToken: 'your-tmdb-api-key',
ipInfoToken: 'your-ipinfo-api-key'
```
Replace 'your-tmdb-api-key' and 'your-ipinfo-api-key' with the actual keys you received after registering on TMDB and IPInfo.

6. Run the Project Locally:- After updating the necessary API keys, start the development server by running:
```
npm run dev
```
This will run the project in development mode, and you can view it by navigating to http://localhost:5173 in your browser.

