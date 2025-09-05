import { useState } from 'react';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';

// extras
import type { IDropdownOption } from '../../utils/types';
import { DropdownContainer } from './Dropdown.styles';

type DropdownProps = {
  title: string;
  dropdownOptions: IDropdownOption[];
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

function Dropdown({
  title,
  dropdownOptions,
  selectedOptions,
  setSelectedOptions,
}: DropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);

  function handleToggleOption(option: string) {
    setSelectedOptions((prevState) => {
      return prevState.includes(option)
        ? prevState.filter((item) => item !== option)
        : [...prevState, option];
    });
  }

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
            <div key={option.id} className='optionContainer'>
              <label htmlFor={option.text}>
                <input
                  type='checkbox'
                  id={option.text}
                  checked={selectedOptions.includes(option.text)}
                  onChange={() => handleToggleOption(option.text)}
                />
                {option.text}
              </label>
            </div>
          ))}
        </div>
      )}
    </DropdownContainer>
  );
}

export default Dropdown;
