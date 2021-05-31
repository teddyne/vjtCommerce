import React from 'react'
import _ from 'lodash'

import './scss/_sideBar.scss'

const SideBar = ({ items }) => {
  return (
    <div className='side-bar'>
      <ul>
        {
          _.map(items, (item) => {
            return (
              <li className='side-bar-item'>
                <a className='side-bar-item-content' onClick={_.isFunction(item.onClick) && item.onClick}>
                  <span className='side-bar-icon'>
                    <img src={item.icon} alt={item.iconLabel} />
                  </span>
                  <span>{item.name}</span>
                </a>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default SideBar
