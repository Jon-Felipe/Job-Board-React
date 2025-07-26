import { useAppSelector } from '../../hooks';

// components
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

// extras
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const user = useAppSelector((state) => state.user);

  return (
    <main className={styles.profilePage}>
      <h1 className={styles.title}>My Profile</h1>
      <section className={styles.detailsSection}>
        <h3 className={styles.detailsTitle}>Update Your Details</h3>
        <form>
          <div className={styles.userDetailsForm}>
            <section>
              <h4 className={styles.formTitle}>Personal Information</h4>
              <div className={styles.flex}>
                <Input
                  type='text'
                  placeholder='First Name'
                  name='firstName'
                  value={user.firstName}
                  onChange={() => console.log('firstName')}
                />
                <Input
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  value={user.lastName}
                  onChange={() => console.log('lastName')}
                />
              </div>
              <Input
                type='email'
                placeholder='Email'
                name='email'
                value={user.email}
                onChange={() => console.log('email')}
              />
              <div className={styles.flex}>
                <Input
                  type='text'
                  placeholder='Phone'
                  name='phone'
                  value=''
                  onChange={() => console.log('phone')}
                />
                <Input
                  type='number'
                  placeholder='Age'
                  name='age'
                  value=''
                  onChange={() => console.log('age')}
                />
              </div>
            </section>
            <section>
              <h4 className={styles.formTitle}>Address</h4>
              <Input
                type='text'
                placeholder='Street'
                name='street'
                value=''
                onChange={() => console.log('street')}
              />
              <div className={styles.flex}>
                <Input
                  type='text'
                  placeholder='City'
                  name='city'
                  value=''
                  onChange={() => console.log('city')}
                />
                <Input
                  type='text'
                  placeholder='Postal Code'
                  name='postalCode'
                  value=''
                  onChange={() => console.log('postalCode')}
                />
              </div>
              <Input
                type='text'
                placeholder='Country'
                name='country'
                value=''
                onChange={() => console.log('country')}
              />
            </section>
          </div>
          <div className={styles.submitButton}>
            <Button type='submit' variant='inverted'>
              Submit
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ProfilePage;
