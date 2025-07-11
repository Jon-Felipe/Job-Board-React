import { Link } from 'react-router';
import { FaBars } from 'react-icons/fa';

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
        <Link to='/login'>Login / Sign Up</Link>
        <FaBars className={styles.menuIcon} />
      </div>
    </header>
  );
}

export default Header;
