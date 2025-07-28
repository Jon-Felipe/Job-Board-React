import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';

// components
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

// extras
import styles from './ProfilePage.module.css';
import type { IUser } from '../../utils/types';

function ProfilePage() {
  const user = useAppSelector((state) => state.user);

  const [userDetails, setUserDetails] = useState<IUser>({
    firstName: user.firstName ?? '',
    lastName: user.lastName ?? '',
    email: user.email ?? '',
    phone: user.phone ?? '',
    age: user.age ?? '',
    address: user.address ?? undefined,
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setUserDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

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
                  value={userDetails.firstName}
                  onChange={handleOnChange}
                />
                <Input
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  value={userDetails.lastName}
                  onChange={handleOnChange}
                />
              </div>
              <Input
                type='email'
                placeholder='Email'
                name='email'
                value={userDetails.email}
                onChange={handleOnChange}
              />
              <div className={styles.flex}>
                <Input
                  type='text'
                  placeholder='Phone'
                  name='phone'
                  value={userDetails.phone}
                  onChange={handleOnChange}
                />
                <Input
                  type='number'
                  placeholder='Age'
                  name='age'
                  value={userDetails.age}
                  onChange={handleOnChange}
                />
              </div>
            </section>
            <section>
              <h4 className={styles.formTitle}>Address</h4>
              <Input
                type='text'
                placeholder='Street'
                name='street'
                value={userDetails.address?.street}
                onChange={handleOnChange}
              />
              <div className={styles.flex}>
                <Input
                  type='text'
                  placeholder='City'
                  name='city'
                  value={userDetails.address?.city}
                  onChange={handleOnChange}
                />
                <Input
                  type='text'
                  placeholder='Postal Code'
                  name='postalCode'
                  value={userDetails.address?.postalCode}
                  onChange={handleOnChange}
                />
              </div>
              <Input
                type='text'
                placeholder='Country'
                name='country'
                value={userDetails.address?.country}
                onChange={handleOnChange}
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
