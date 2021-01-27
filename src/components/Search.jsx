import React from "react";
import "../assets/styles/components/Search.scss";

const Search = () => (
  <main className="Search">
    <h2 className="Search__title">¿Qué quieres ver hoy?</h2>
    <label htmlFor="text">
      <input type="text" placeholder="Buscar" name="text" />
    </label>
  </main>
);

export default Search;
