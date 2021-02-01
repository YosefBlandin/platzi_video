import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setFavorite, deleteFavorite } from "../actions/index";
import PropTypes from "prop-types";

import "../assets/styles/components/CarouselItem.scss";
import PlayIcon from "../assets/img/icons8-play-64.png";
import PlusIcon from "../assets/img/icons8-plus-64.png";
import removeIcon from "../assets/img/remove-icon.png";

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img
        src={cover}
        alt="Teen with a camera"
        className="carousel-item__img"
      />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img src={PlayIcon} alt="Play" />
          </Link>

          {isList ? (
            <img
              src={removeIcon}
              alt="Plus"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img src={PlusIcon} alt="Plus" onClick={handleSetFavorite} />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--title">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
