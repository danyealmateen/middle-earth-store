import { Link as RouterLink } from 'react-router-dom';
import './DropDownMenu.css';

const DropDownMenu = () => {
  const weaponLinks = [
    { weapon: 'Swords', to: '/weapons/swords' },
    { weapon: 'Axes', to: '/weapons/axes' },
    { weapon: 'Staves', to: '/weapons/staves' },
    { weapon: 'Maces', to: '/weapons/maces' },
    { weapon: 'Daggers', to: '/weapons/daggers' },
  ];

  return (
    <div className='menu'>
      {weaponLinks.map((weapon) => (
        <RouterLink className='styled-link' key={weapon.to} to={weapon.to}>
          {weapon.weapon}
        </RouterLink>
      ))}
    </div>
  );
};

export default DropDownMenu;
