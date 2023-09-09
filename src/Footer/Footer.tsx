import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.css';

interface SectionsProps {
  title: string;
  links: string[];
}

const Footer = () => {
  const sections = [
    {
      title: 'INFORMATION',
      links: ['About', 'Contact', 'Creator'],
    },
  ];


  return (
    <>
      <br />
      <hr className='footer-hr' />
      <div className='footer-container'>
        {sections.map((section) => (
          <Section
            key={section.title}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>
    </>
  );
};

const Section: React.FC<SectionsProps> = ({ title, links }) => (
  <div>
    <h2>{title}</h2>
    {links.map((link) => (
      <RouterLink className='footer-link' key={link} to='/'>
        {link}
      </RouterLink>
    ))}
  </div>
);

export default Footer;
