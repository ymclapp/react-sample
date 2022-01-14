import { Navbar } from 'react-bootstrap';
import '../partials/Footer';

import logoFake from '../stockPhotos/logoFake.jpg';


function Footer() {
  return (
    <>
        {/* <hr className="bottom-stripe"/> */}

      <Navbar className='footer'>
          <Navbar.Brand href="/">
          <img
            alt='Logo'
            src={logoFake}
            width="50"
            height="50"
          />
            {' '}
            &copy;React Template {new Date().getFullYear()}
          </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Footer;