import React from 'react';
import './scss/_footer.scss'

class Footer extends React.Component {
    render() {
        return (
           <footer className="footer mt-auto">
               <div className="copyright">
                   <p>© 2021 - Bản quyền của Solo Travel Shop</p>
               </div>
           </footer>
        )
    }
}

export default Footer;