import { FaBars, FaRegUserCircle } from 'react-icons/fa';

// components
import LinkButton from '../ui/LinkButton/LinkButton';

// extras
import { HeaderContainer, NavLinksContainer } from './Header.styles';
import { useAppSelector } from '../../hooks';
import { Link } from 'react-router';

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const user = useAppSelector((state) => state.user);

  return (
    <HeaderContainer>
      <LinkButton path='/' variant='text' size='medium'>
        <h1 className='header-title'>{title}</h1>
      </LinkButton>

      <NavLinksContainer>
        <div className='links-tablet'>
          <LinkButton path='/' variant='text'>
            Home
          </LinkButton>
          <LinkButton path='/jobs' variant='text'>
            Jobs
          </LinkButton>
          <LinkButton path='/' variant='text'>
            Categories
          </LinkButton>
        </div>
        {user.firstName ? (
          <Link to='/profile' className='profile-buttonLink'>
            <FaRegUserCircle />
          </Link>
        ) : (
          <LinkButton path='/login' variant='primary' size='small'>
            Login / Sign Up
          </LinkButton>
        )}
        <div className='menu-toggle'>
          <FaBars />
        </div>
      </NavLinksContainer>
    </HeaderContainer>
  );
}

export default Header;
