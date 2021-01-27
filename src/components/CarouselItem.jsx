import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/components/CarouselItem.scss";
import PlayIcon from "../assets/img/icons8-play-64.png";
import PlusIcon from "../assets/img/icons8-plus-64.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className="carousel-item">
    <img src={cover} alt="Teen with a camera" className="carousel-item__img" />
    <div className="carousel-item__details">
      <div>
        <img src={PlayIcon} alt="Play" />
        <img src={PlusIcon} alt="Plus" />
      </div>
      <p className="carousel-item__details--title">{title}</p>
      <p className="carousel-item__details--title">
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
