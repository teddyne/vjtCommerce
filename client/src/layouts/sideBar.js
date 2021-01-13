import React from "react";
import './_sideBar.scss'
import helmet from '../assets/images/menu/helmet.png'
import wipe from '../assets/images/menu/wipe.png'
import gloves from '../assets/images/menu/gloves.png'
import towel from '../assets/images/menu/towel.png'

class SideBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="side-bar">
          <ul>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#home">
                <span className="side-bar-icon"><img src={helmet} /></span>
                <span>Mũ Bảo Hiểm</span>
              </a>
            </li>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#news">
                <span className="side-bar-icon"><img src={gloves} /></span>
                <span>Găng Tay Xe Máy</span>
              </a>
            </li>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#contact">
                <span className="side-bar-icon"><img src={towel} /></span>
                <span>Găng Tay Chống Nắng</span>
              </a>
            </li>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#about">
                <span className="side-bar-icon"><img src={wipe} /></span>
                <span>Khăn Đa Năng</span>
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
