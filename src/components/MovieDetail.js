import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Fab from "@material-ui/core/Fab";
import className from "classnames";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    position: "relative",
    right: "115px",
    backgroundColor: "orange",
    color: "white",
    width: "36px",
    height: "36px",
    cursor: "pointer"
  }
});
const MovieDetail = ({
  movie: {
    id,
    originalTitle: name,
    year,
    genres,
    duration,
    imdbRating,
    posterUrl,
    storyline,
    directors,
    actors,
    writers
  }
}) => {
  const [active, setActive] = useState(true);
  const [add, setAdd] = useState(true);
  const imageClass = classNames("hero-image", {
    "hero-image_afterButton": active === false
  });

  const outerWrapper = className("outer-wrapper", {
    "outer-wrapper_afterButton": active === false
  });

  const score = className("score", { score_afterButton: active === false });
  const movieName = className("movie-name", {
    "movie-name_afterButton": active === false
  });
  const header = className("header", {
    header_afterButton: active === false
  });
  const classes = useStyles();
  return (
    <div>
      <div className="front-page">
        <div className={outerWrapper}>
          <img className={imageClass} src={posterUrl} alt="poster" />
          {active ? null : (
            <Fab
              onClick={() => setAdd(!add)}
              size="small"
              className={classes.btn}
            >
              {add ? <AddIcon /> : <RemoveIcon />}
            </Fab>
          )}
          <div className={header}>
            <h1 className={movieName}>{name}</h1>

            <div className="score-bar">
              <div className={score}>
                <strong>{imdbRating.toFixed(1)}</strong>
                {active && <span>/10</span>}
              </div>
              {active && (
                <h5 className="movie-years">
                  {year} - {genres.join("/")} -
                  {parseInt(duration.slice(2, 5) / 60, 10)}h{" "}
                  {duration.slice(2, 5) % 60}min
                </h5>
              )}

              <div className="progressBar_afterButton">
                <progress
                  id={!active && "second"}
                  value={imdbRating * 10}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <div className="details">
            {!active && (
              <div className="movie-content">
                <h5 className="movie-years">
                  {year} - {genres.join("/")} -
                  {parseInt(duration.slice(2, 5) / 60, 10)}h{" "}
                  {duration.slice(2, 5) % 60}min
                </h5>
                <p>{storyline}</p>
                <hr />
                <p>
                  <span className="director-title">Director: </span>
                  {directors.join(", ")}
                </p>
                <p>
                  <span className="director-title">Writers: </span>
                  {writers.join(", ")}
                </p>
                <p>
                  <span className="director-title">Actors: </span>
                  {actors.join(", ")}
                </p>
                <div className="break">
                  <button
                    onClick={() => setAdd(!add)}
                    className="action-button"
                  >
                    {add ? " + ADD TO WATCHLİST" : " - REMOVE TO WATCHLİST"}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="break">
            <button
              onClick={() => setActive(!active)}
              className="action-button"
            >
              MOVIE DETAILS
            </button>
          </div>
        </div>
      </div>

      {/* <div className="front-page">
        <div className="outer-wrapper_afterButton">
          <img
            className="hero-image_afterButton"
            src={posterUrl}
            alt="poster"
          />
          <button className="plus">+</button>
        </div>
        <div className="main-block">
          <div className="xx">
            <h1 className="name">{name}</h1>
          </div>
          <div className="rating">
            <strong className="score_afterButton">{imdbRating}</strong>
          </div>
          <div className="bar">
            <progress id="second" value={imdbRating * 10} max="100"></progress>
          </div>
        </div>
        <div className="movie-content">
           <h5 className="movie-years">
                {year} - {genres.join("/")} -
                {parseInt(duration.slice(2, 5) / 60, 10)}h{" "}
                {duration.slice(2, 5) % 60}min
              </h5>
          <p>{storyline}</p>
          <hr />
        </div>
        <div className="movie-contentt-top">
          <p>
            <span>Director: </span>
            {directors}
         </p>
          <p>
            <span>Writers: </span>
            {writers}
          </p>
          <p>
            <span>Actors: </span>
            {actors}
          </p>
        </div>
        <div className="break">
          <button className="action-button">+ ADD TO WATCHLİST</button>
        </div>
      </div> */}
    </div>
  );
};

export default MovieDetail;
