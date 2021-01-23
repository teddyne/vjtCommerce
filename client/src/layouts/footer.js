import React from 'react';
import './_footer.scss'

class Footer extends React.Component {
    render() {
        return (
           <footer className="footer">
               <div className="copyright">
                   <p>© 2021 - Bản quyền của Solo Travel Shop</p>
               </div>
           </footer>
        )
    }
}

export default Footer;