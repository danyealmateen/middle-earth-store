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
      title: 'INFORMATION',
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
      <StyledHr />
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
  <div>
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
  align-items: flex-start;
  justify-items: center;
  gap: 15px;
  margin-top: 15px;

  & h2 {
    color: white;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 5px;
  }
`;

const StyledLink = styled(RouterLink)`
  display: block;
  color: orange;
  text-decoration: none;
  text-align: center;
  margin-top: 15px;

  &:hover {
    transition: color 0.3s, transform 0.3s;
    color: white;
  }
`;

const StyledHr = styled.hr`
  border: 0;
  height: 1px;
  background: orange;
`;
