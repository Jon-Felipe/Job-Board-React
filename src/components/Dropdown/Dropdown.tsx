import { useState } from 'react';
import { FaCaretRight, FaCaretDown } from 'react-icons/fa';

// extras
import styles from './Dropdown.module.css';

interface IDropdownOptions {
  id: number;
  text: string;
}

type DropdownProps = {
  title: string;
  dropdownOptions: IDropdownOptions[];
};

function Dropdown({ title, dropdownOptions }: DropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className={styles.toggle}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <h3 className={styles.toggleTitle}>{title}</h3>
        {isDropdownOpen ? (
          <FaCaretDown className={styles.toggleIcon} />
        ) : (
          <FaCaretRight className={styles.toggleIcon} />
        )}
      </div>
      {isDropdownOpen && (
        <div className={styles.dropdownOptions}>
          {dropdownOptions.map((option) => (
            <p key={option.id} className={styles.option}>
              {option.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
