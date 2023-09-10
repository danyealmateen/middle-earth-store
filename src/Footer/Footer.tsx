import { Link as RouterLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <br />
      <hr className='footer-hr' />
      <div className='footer-container'>
        <h1>INFORMATION</h1>
        <RouterLink className='footer-link' to={'/'}>
          About
        </RouterLink>
        <RouterLink className='footer-link' to={'/'}>
          Contact
        </RouterLink>
        <RouterLink className='footer-link' to={'/'}>
          Creater
        </RouterLink>
      </div>
    </>
  );
};

export default Footer;
