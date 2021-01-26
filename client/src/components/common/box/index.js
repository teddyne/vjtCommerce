import React from 'react'

import './_box.scss'

const Box = (props) => {
  return (
    <div className="product-box">
      <div className="box-title">
        <span>{props.title}</span>
      </div>
      {props.children}
    </div>
  )
}
export default Box
