import React from 'react'
import { useHistory } from 'react-router-dom'
import './scss/_user.scss'

const User = () => {
    const history = useHistory()
    const handleRedirect = (path) => {
        history.push(`/${path}`)
    }

    return (
        <div className="login-account">
            <span className="text" onClick={() => handleRedirect('sign-in')}>Đăng Nhập</span>
            <span className="text" onClick={() => handleRedirect('sign-up')}>Đăng Ký</span>
      </div>
    )
}
export default User