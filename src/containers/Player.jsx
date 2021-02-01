import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions/index";
import NotFound from "../containers/NotFound";

import "../assets/styles/components/Player.scss";

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <main className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <section className="Player__back">
        <button onClick={() => props.history.goBack()} type="button">
          Regresar
        </button>
      </section>
    </main>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
