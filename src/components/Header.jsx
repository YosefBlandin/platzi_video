import React from "react";
import "../assets/styles/components/Header.scss";
import LogoPlatzi from "../assets/img/logo-platzi-video-BW2.png";
import UserIcon from "../assets/img/user-icon.png";

const Header = () => {
  return (
    <header className="header">
      <figure className="platzi_logo">
        <img src={LogoPlatzi} alt="Platzi logo" />
      </figure>
      <section className="header__user">
        <figure>
          <img src={UserIcon} alt="User icon" />
        </figure>
        <div className="user__menu">
          <p className="dropbtn">Yosef Blandin</p>
          <nav className="user__content">
            <li>
              <a href="#">Perfil</a>
            </li>
            <li>
              <a href="#">Cuenta</a>
            </li>
            <li>
              <a href="#">Configuración</a>
            </li>
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
