import React from "react";
import classNames from "classnames";
import "../assets/styles/components/Search.scss";

const Search = ({ isHome }) => {
  const inputStyle = classNames("input", {
    isHome,
  });
  return (
    <main className="Search">
      <h2 className="Search__title">¿Qué quieres ver hoy?</h2>
      <label htmlFor="text">
        <input
          className={inputStyle}
          type="text"
          placeholder="Buscar"
          name="text"
        />
      </label>
    </main>
  );
};

export default Search;
