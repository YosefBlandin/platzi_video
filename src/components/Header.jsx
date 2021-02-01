import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions/index";
import propTypes from "prop-types";

import "../assets/styles/components/Header.scss";
import LogoPlatzi from "../assets/img/logo-platzi-video-BW2.png";
import UserIcon from "../assets/img/user-icon.png";

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className="header">
      <Link to="/">
        <figure className="platzi_logo">
          <img src={LogoPlatzi} alt="Platzi logo" />
        </figure>
      </Link>
      <section className="header__user">
        <figure>
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={UserIcon} alt="User icon" />
          )}
        </figure>
        <div className="user__menu">
          <p className="dropbtn">Profile</p>
          <nav className="user__content">
            {hasUser ? (
              <li>
                <Link to="/">{user.name}</Link>
                <li>
                  <a href="#">Perfil</a>
                </li>
              </li>
            ) : null}
            {hasUser ? (
              <li>
                <a href="#logout" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            ) : (
              <li>
                <Link to="/login">Sign in</Link>
              </li>
            )}
          </nav>
        </div>
      </section>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};
Header.propTypes = {
  user: propTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
