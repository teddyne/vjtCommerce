import React from 'react'

import './_box.scss'

const Box = (props) => {

  const renderTitle = () => {
    return props.title ?
      (<div className='box-title'>
        <span>{props.title}</span>
      </div>) : null
  }
  return (
    <div className='box'>
      {renderTitle()}
      {props.children}
    </div>
  )
}
export default Box
