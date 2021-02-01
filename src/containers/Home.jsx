import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";

const Home = ({ myList, trends, originals }) => {
  return (
    <React.Fragment>
      <Search isHome/>
      <Categories title="My List">
        <Carousel>
          {myList.map((item) => (
            <CarouselItem key={item.id} {...item} isList />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Trending">
        <Carousel>
          {trends.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
      <Categories title="Originals">
        <Carousel>
          {originals.map((item) => {
            return <CarouselItem key={item.id} {...item} />;
          })}
        </Carousel>
      </Categories>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
