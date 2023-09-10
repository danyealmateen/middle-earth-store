import { Link as RouterLink } from 'react-router-dom';
import './DropDownMenu.css';

export const characterLinks = [
  { label: 'Sauron', to: '/character/sauron' },
  { label: 'Saruman', to: '/character/saruman' },
  { label: 'Gandalf', to: '/character/gandalf' },
  { label: 'Aragon', to: '/character/aragon' },
  { label: 'Elrond', to: '/character/elrond' },
];

export const weaponLinks = [
  { label: 'Swords', to: '/weapons/swords' },
  { label: 'Axes', to: '/weapons/axes' },
  { label: 'Staves', to: '/weapons/staves' },
  { label: 'Maces', to: '/weapons/maces' },
  { label: 'Daggers', to: '/weapons/daggers' },
];

interface LinkType {
  label: string;
  to: string;
}

interface DropDownMenuProps {
  links: LinkType[];
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ links }) => {
  return (
    <div className='dropdown-menu'>
      {links.map((link) => (
        <RouterLink className='dropdown-weapon-link' key={link.to} to={link.to}>
          {link.label}
        </RouterLink>
      ))}
    </div>
  );
};

export default DropDownMenu;
