import React from 'react'
import { useHistory } from 'react-router-dom'
import climbing from '../assets/images/menu/climbing.png'
import camping from '../assets/images/menu/camping.png'
import biker from '../assets/images/menu/biker.png'
import trekking from '../assets/images/menu/trekking.png'
import other from '../assets/images/menu/other.png'
import { CategoryConstant } from '../constants'

import './scss/_sideBar.scss'

const SideBar = () => {
  const history = useHistory()

  const handleClickMenu = (path) => {
    history.push(`/${path}.html`)
  }

  return (
    <div className="side-bar">
      <ul>
        <li className="side-bar-item">
          <a className="side-bar-item-content" onClick={() => handleClickMenu(CategoryConstant.Climbing)}>
            <span className="side-bar-icon">
              <img src={climbing} alt='Leo núi' />
            </span>
            <span>Leo Núi</span>
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-item-content" onClick={() => handleClickMenu(CategoryConstant.Camping)}>
            <span className="side-bar-icon">
              <img src={camping} alt='Cắm trại - dã ngoại' />
            </span>
            <span>Cắm Trại - Dã Ngoại</span>
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-item-content" onClick={() => handleClickMenu(CategoryConstant.Traveling)}>
            <span className="side-bar-icon">
              <img src={biker} alt='Du lịch bụi' />
            </span>
            <span>Du Lịch Bụi</span>
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-item-content" onClick={() => handleClickMenu(CategoryConstant.Trekking)}>
            <span className="side-bar-icon">
              <img src={trekking} alt='Trekking - Chạy bộ' />
            </span>
            <span>Trekking - Chạy Bộ</span>
          </a>
        </li>
        <li className="side-bar-item">
          <a className="side-bar-item-content" onClick={() => handleClickMenu(CategoryConstant.OtherThings)}>
            <span className="side-bar-icon">
              <img src={other} alt='Other things' />
            </span>
            <span>Vài Thứ Khác</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default SideBar
