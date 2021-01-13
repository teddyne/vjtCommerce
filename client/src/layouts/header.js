import React from "react";
import "./_header.scss";
import "../assets/images/logo192.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="hamberger-menu">
          <FontAwesomeIcon icon={faBars} size="2x" color="white" />
        </div>
        <div className="site-logo">
          Header title
        </div>
      </header>
    );
  }
}

export default Header;
