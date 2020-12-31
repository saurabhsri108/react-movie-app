import React from "react";
import "./Movies.css";

class Movies extends React.Component {
  render() {
    const {
      id,
      title,
      description,
      imdbCode,
      backgroundImage,
      genres,
      rating,
      runtime,
      year,
      coverImage,
      language,
    } = this.props;
    return (
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={coverImage} alt={title} />
            <h1>{title}</h1>
            <h4>{year}</h4>
            <span className="minutes">{rating} / 10</span>
            <p className="type">{genres.map((genre) => genre + ", ")}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{description.slice(0, 160) + "..."}</p>
          </div>
          <div className="read_more">
            <a href={`https://www.imdb.com/title/${imdbCode}/`}>IMDb Detail</a>
          </div>
        </div>
        <div
          className="blur_back"
          style={{ background: `url(${backgroundImage}` }}
        ></div>
      </div>
    );
  }
}

export default Movies;
