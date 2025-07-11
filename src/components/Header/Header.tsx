import { FaBars } from 'react-icons/fa';

// components
import LinkButton from '../ui/LinkButton/LinkButton';

// extras
import styles from './Header.module.css';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.actionsContainer}>
        <nav className={styles.navLinks}>
          <a href='#' className={styles.navLink}>
            Home
          </a>
          <a href='#' className={styles.navLink}>
            Jobs
          </a>
          <a href='#' className={styles.navLink}>
            Categories
          </a>
          <a href='#' className={styles.navLink}>
            Location
          </a>
        </nav>
        <LinkButton path='/login'>Login / Sign Up</LinkButton>
        <FaBars className={styles.menuIcon} />
      </div>
    </header>
  );
}

export default Header;
