import React from 'react';
import './scss/_footer.scss'

class Footer extends React.Component {
    render() {
        return (
           <footer className="footer mt-auto">
               <div className="copyright">
                   <p>Since 2021 - <span>Solo Travel Shop</span></p>
               </div>
           </footer>
        )
    }
}

export default Footer;