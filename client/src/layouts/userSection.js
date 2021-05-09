import React from 'react'
import { useHistory } from 'react-router-dom'
import './scss/_userSection.scss'

const UserSection = ({ currentUser }) => {
    const history = useHistory()
    const handleRedirect = (path) => {
        history.push(`/${path}`)
    }

    const renderSection = () => {
        return currentUser ? null
            : (
                <React.Fragment>
                    <span className="text" onClick={() => handleRedirect('sign-in')}>Đăng Nhập</span>
                    <span className="text" onClick={() => handleRedirect('sign-up')}>Đăng Ký</span>
                </React.Fragment>
            )
    }

    return (
        <div className="login-account">
            {renderSection()}
        </div>
    )
}
export default UserSection