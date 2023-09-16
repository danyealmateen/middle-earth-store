import { Link as RouterLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <br />
      {/* <hr className='footer-hr' /> */}
      <div className='footer-container'>
        <h1 className='footer-title'>INFORMATION</h1>
        <RouterLink className='footer-link' to={'/'}>
          About
        </RouterLink>
        <RouterLink className='footer-link' to={'/'}>
          Contact
        </RouterLink>
        <RouterLink className='footer-link' to={'/'}>
          Creator
        </RouterLink>
      </div>
    </>
  );
};

export default Footer;
