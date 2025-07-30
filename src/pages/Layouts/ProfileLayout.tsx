import { Outlet } from 'react-router';
import styles from './ProfileLayout.module.css';

// components
import LinkButton from '../../components/ui/LinkButton/LinkButton';

function ProfileLayout() {
  return (
    <main className={styles.profileLayout}>
      <h1 className={styles.title}>My Profile</h1>
      <div className={styles.container}>
        <section className={styles.linkButtons}>
          <LinkButton path=''>Profile</LinkButton>
          <LinkButton path='applications'>Applications</LinkButton>
          <LinkButton path='/'>Logout</LinkButton>
        </section>
        <section>
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default ProfileLayout;
