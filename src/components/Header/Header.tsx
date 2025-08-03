import { Link } from 'react-router';
import { FaBars, FaRegUserCircle } from 'react-icons/fa';

// components
import LinkButton from '../ui/LinkButton/LinkButton';

// extras
import styles from './Header.module.css';
import { useAppSelector } from '../../hooks';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const user = useAppSelector((state) => state.user);

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
        </nav>
        {user.firstName ? (
          <Link to='/profile' className={styles.profileLink}>
            <FaRegUserCircle />
          </Link>
        ) : (
          <LinkButton path='/login' variant='primary' size='small'>
            Login / Sign Up
          </LinkButton>
        )}
        <FaBars className={styles.menuIcon} />
      </div>
    </header>
  );
}

export default Header;
