import { Link as RouterLink } from 'react-router-dom';
import { styled } from 'styled-components';

const WeaponsPage = () => {
  const weapons = [
    { title: 'Swords', to: '/weapons/swords' },
    { title: 'Axes', to: '/weapons/axes' },
    { title: 'Staves', to: '/weapons/staves' },
    { title: 'Maces', to: '/weapons/maces' },
    { title: 'Daggers', to: '/weapons/daggers' },
    { title: 'Bows', to: '/weapons/bows' },
  ];

  return (
    <>
      <Title>Legendary Weapons</Title>
      <ContentContainer>
        {weapons.map((weapon) => (
          <StyledLink to={weapon.to} key={weapon.title}>
            {weapon.title}
          </StyledLink>
        ))}
      </ContentContainer>
    </>
  );
};
export default WeaponsPage;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, auto);
  align-items: flex-start;
  justify-items: center;
  gap: 15px;
  margin-top: 15px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledLink = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1f1e1c;
  height: 300px;
  width: 250px;
  border: 2px solid gray;
`;
