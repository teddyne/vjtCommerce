import React from 'react'
import { useHistory } from 'react-router-dom'
import Emoji from '../components/common/emoji'

import './scss/_footer.scss'
const Footer = () => {
    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }
    
    return (
        <footer className="footer mt-auto">
            <div className="copyright">
                <p>Made with  <Emoji symbol="❤️" label="heart" /> by <span onClick={goToHomePage}>Solo Travel Shop</span></p>
            </div>
        </footer>
    )
}

export default Footer;