import { FaCaretRight } from 'react-icons/fa';

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
  return (
    <div>
      <div className={styles.toggle}>
        <h3 className={styles.toggleTitle}>{title}</h3>
        <FaCaretRight className={styles.toggleIcon} />
      </div>
      <div className={styles.dropdownOptions}>
        {dropdownOptions.map((option) => (
          <p key={option.id} className={styles.option}>
            {option.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
