import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginRequest } from "../actions/index";

import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/img/icons8-google-plus-50.png";
import twitterIcon from "../assets/img/icons8-twitter-50.png";

const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            className="input"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            type="text"
            className="input"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button type="submit" className="button">
            Iniciar sesión
          </button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="checkbox" />
              Recuérdame
            </label>
            <a href="#">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Google" />
            Inicia sesión en Google
          </div>
          <div>
            <img src={twitterIcon} alt="Twitter" />
            Inicia sesión en Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
