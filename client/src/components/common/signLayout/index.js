import React from 'react'

import './_signLayout.scss'

const SignLayout = ({ text, children }) => {
  return (
      <div className='sign-wrapper'>
        <div className='form-title'>
          <span>{text}</span>
        </div>
        <div className='sign'>
          <div className='sign-form'>
            {children}
          </div>
        </div>
      </div>
    )
}
export default SignLayout