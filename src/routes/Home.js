import React from "react";
import "./Home.css";
import axios from "axios";
import Movies from "../components/Movies";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  async componentDidMount() {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies });
    console.log(movies);
  }

  render() {
    return (
      <div className="movies_list">
        <h1 className="header">Top 20 Movie List</h1>
        {this.state.movies.map((movie) => (
          <Movies
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description_full}
            imdbCode={movie.imdb_code}
            backgroundImage={movie.background_image_original}
            genres={movie.genres}
            rating={movie.rating}
            runtime={movie.runtime}
            year={movie.year}
            coverImage={movie.medium_cover_image}
            language={movie.language}
          />
        ))}
      </div>
    );
  }
}

export default Home;
