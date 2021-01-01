import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";

const Movies = (props) => {
  console.log(props);
  const {
    id,
    genres,
    background_poster,
    title,
    description,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = props;
  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina" src={poster_path} alt={title} />
          <h1>{title}</h1>
          <h4>{release_date}</h4>
          <span className="minutes">Rating: {vote_average}</span>
          <span className="minutes">Vote Count: {vote_count}</span>
          <p className="type">{genres.join(", ")}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{description.slice(0, 160) + "..."}</p>
        </div>
        <div className="read_more">
          <a href={`https://www.themoviedb.org/movie/${id}/`}>Complete Info</a>
        </div>
      </div>
      <div
        className="blur_back"
        style={{
          background: `url(${background_poster}`,
        }}
      ></div>
    </div>
  );
};

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  background_poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  vote_count: PropTypes.number.isRequired,
};

export default Movies;
