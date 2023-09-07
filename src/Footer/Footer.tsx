import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

interface SectionsProps {
  title: string;
  links: string[];
}

const Footer = () => {
  const sections = [
    {
      title: 'E-COMMERCE',
      links: ['Shop online', 'Grocery bag', 'Catering', 'Pharmacy'],
    },
    {
      title: 'MIDDLE-EARTH ONLINE GENERAL STORE',
      links: ['Apps', 'Opening hours', 'Suppliers', 'Job openings'],
    },
    {
      title: 'CUSTOMER SERVICE',
      links: ['Become a regular', 'Recalls', 'Block card', 'Ratings'],
    },
  ];
  return (
    <Fragment>
      <br />
      <hr />
      <Router>
        <GridContainer>
          {sections.map((section) => (
            <Section
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </GridContainer>
      </Router>
    </Fragment>
  );
};

const Section: React.FC<SectionsProps> = ({ title, links }) => (
  <div className='sectionDiv'>
    <h2>{title}</h2>
    {links.map((link) => (
      <StyledLink key={link} to='/'>
        {link}
      </StyledLink>
    ))}
  </div>
);

export default Footer;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
  align-items: flex-start; // Centrerar innehåll vertikalt i varje gridcell
  justify-items: center; // Centrerar innehåll horisontellt i varje gridcell
  gap: 15px; // Lägger till lite utrymme mellan gridcellerna
  margin-top: 15px;
`;

const StyledLink = styled(RouterLink)`
  display: block;
  color: orange;
  text-decoration: none;
  text-align: center;
  margin-top: 15px;

  &:hover {
    color: white;
  }
`;
