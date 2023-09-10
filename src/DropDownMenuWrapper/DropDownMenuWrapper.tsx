import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import './DropDownMenuWrapper.css';

interface LinkType {
  label: string;
  to: string;
}

interface DropDownMenuWrapperProps {
  label: string;
  links: LinkType[];
  linkPath: string;
}

const DropDownMenuWrapper: React.FC<DropDownMenuWrapperProps> = ({
  label,
  links,
  linkPath,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <>
      <div className='header-link-wrapper'>
        <div
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          <Link to={linkPath}>{label}</Link>
          {showDropDown && <DropDownMenu links={links} />}
        </div>
      </div>
    </>
  );
};

export default DropDownMenuWrapper;
