import React from 'react'
import { useHistory } from 'react-router-dom'

import './scss/_footer.scss'
const Footer = () => {
    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }
    
    return (
        <footer className="footer mt-auto">
            <div className="copyright">
                <p>Since 2021 - <span onClick={goToHomePage}>Solo Travel Shop</span></p>
            </div>
        </footer>
    )
}

export default Footer;