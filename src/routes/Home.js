import React from "react";
import "./Home.css";
import axios from "axios";
import Movies from "../components/Movies";

const MOVIE_API = process.env.REACT_APP_API_KEY;

class Home extends React.Component {
  state = {
    isLoading: true,
    secure_base_url: null,
    poster_sizes: [],
    genre_list: [],
    movies: [],
  };

  getConfig = async () => {
    const configUrl = `https://api.themoviedb.org/3/configuration?api_key=${MOVIE_API}`;

    const {
      data: {
        images: { secure_base_url, poster_sizes },
      },
    } = await axios.get(configUrl);
    this.setState({ secure_base_url, poster_sizes });
    // console.log(secure_base_url, poster_sizes);
  };

  getGenreList = async () => {
    const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_API}&language=en-US`;
    const {
      data: { genres },
    } = await axios.get(genreUrl);
    this.setState({ genre_list: genres });
    // console.log(genres);
  };

  getMovieList = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${MOVIE_API}`;
    const {
      data: { results },
    } = await axios.get(url);
    this.setState({ movies: results, isLoading: false }); // console.log(results);
  };

  componentDidMount() {
    this.getConfig();
    this.getGenreList();
    this.getMovieList();
  }

  listMovies(movies) {
    const { genre_list } = this.state;
    const image_url_base = this.state.secure_base_url + "/w500";
    return (
      <div className="movie_listings">
        {movies.map((movie) => {
          const genres = genre_list
            .filter((item) => {
              if (movie.genre_ids.includes(item.id)) return item;
              return null;
            })
            .map((genre) => genre.name);
          return (
            <Movies
              key={movie.id}
              id={movie.id}
              genres={genres}
              background_poster={image_url_base + movie.backdrop_path}
              title={movie.original_title}
              description={movie.overview}
              poster_path={image_url_base + movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
            />
          );
        })}
      </div>
    );
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="movies_list">
        <h1 className="header">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="The Movie DB Logo"
          />
          <span>Weekly 20 Top Trender</span>
        </h1>
        {isLoading ? "Loading..." : this.listMovies(movies)}
      </div>
    );
  }
}

export default Home;
