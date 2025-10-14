import { Outlet } from 'react-router';

// components
import LinkButton from '../../components/ui/LinkButton/LinkButton';

// extras
import { ProfileLayoutContainer } from './ProfileLayout.styles';

function ProfileLayout() {
  return (
    <ProfileLayoutContainer>
      <h1 className='title'>My Profile</h1>
      <div className='container'>
        <section className='link-buttons'>
          <LinkButton path=''>Profile</LinkButton>
          <LinkButton path='applications'>Applications</LinkButton>
          <LinkButton path='/'>Logout</LinkButton>
        </section>
        <section>
          <Outlet />
        </section>
      </div>
    </ProfileLayoutContainer>
  );
}

export default ProfileLayout;
