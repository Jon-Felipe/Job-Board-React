import { Link } from 'react-router';
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
      <Link to='/'>
        <h1 className={styles.title}>{title}</h1>
      </Link>

      <div className={styles.actionsContainer}>
        <nav className={styles.navLinks}>
          <Link to='/' className={styles.navLink}>
            Home
          </Link>
          <Link to='/jobs' className={styles.navLink}>
            Jobs
          </Link>
          <Link to='/' className={styles.navLink}>
            Categories
          </Link>
          <Link to='/' className={styles.navLink}>
            Location
          </Link>
        </nav>
        <LinkButton path='/login'>Login / Sign Up</LinkButton>
        <FaBars className={styles.menuIcon} />
      </div>
    </header>
  );
}

export default Header;
