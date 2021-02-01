import React from "react";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <main className="error__container">
    <section className="title__container">
      <h2 className="error__title animated pulse">404</h2>
      <p className="error__paragraph title__container">Pagina no encontrada</p>
    </section>
  </main>
);

export default NotFound;
