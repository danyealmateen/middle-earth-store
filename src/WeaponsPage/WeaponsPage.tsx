import { Link as RouterLink } from 'react-router-dom';
import './WeaponsPage.css';

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
      <h1 className='title'>Legendary Weapons</h1>
      <div className='content-container'>
        {weapons.map((weapon) => (
          <RouterLink
            to={weapon.to}
            key={weapon.title}
            className='weapons-link'
          >
            {weapon.title}
          </RouterLink>
        ))}
      </div>
    </>
  );
};

export default WeaponsPage;
