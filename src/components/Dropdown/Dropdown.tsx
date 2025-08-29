import { useState } from 'react';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';

// extras
import type { IDropdownOption } from '../../utils/types';
import { DropdownContainer } from './Dropdown.styles';

type DropdownProps = {
  title: string;
  dropdownOptions: IDropdownOption[];
};

function Dropdown({ title, dropdownOptions }: DropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);

  return (
    <DropdownContainer>
      <div
        className='toggle'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <h3 className='title'>{title}</h3>
        {isDropdownOpen ? (
          <FaCaretDown className='icon' />
        ) : (
          <FaCaretRight className='icon' />
        )}
      </div>
      {isDropdownOpen && (
        <div className='options'>
          {dropdownOptions.map((option) => (
            <button key={option.id} className='option'>
              {option.text}
            </button>
          ))}
        </div>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
