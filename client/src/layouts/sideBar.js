import React from 'react'
import helmet from '../assets/images/menu/helmet.png'
import wipe from '../assets/images/menu/wipe.png'
import gloves from '../assets/images/menu/gloves.png'
import towel from '../assets/images/menu/towel.png'
import book from '../assets/images/menu/book.png'

import './scss/_sideBar.scss'
class SideBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="side-bar">
          <ul>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#home">
                <span className="side-bar-icon">
                  <img src={helmet} alt='mu-bao-hiem' />
                </span>
                <span>Mũ Bảo Hiểm</span>
              </a>
            </li>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#news">
                <span className="side-bar-icon">
                  <img src={gloves} alt='gang-tay-xe-may' />
                </span>
                <span>Găng Tay Xe Máy</span>
              </a>
            </li>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#contact">
                <span className="side-bar-icon">
                  <img src={towel} alt='gang-tay-chong-nang' />
                </span>
                <span>Găng Tay Chống Nắng</span>
              </a>
            </li>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#about">
                <span className="side-bar-icon">
                  <img src={wipe} alt='khan-da-nang' />
                </span>
                <span>Khăn Đa Năng</span>
              </a>
            </li>
            <li className="side-bar-item">
              <a className="side-bar-item-content" href="#about">
                <span className="side-bar-icon">
                  <img src={book} alt='sach' />
                </span>
                <span>Sách Cũ</span>
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default SideBar
