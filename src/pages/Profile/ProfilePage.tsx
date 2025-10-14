import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateUser } from '../../features/user/userSlice';

// components
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

// extras
import { ProfilePageContainer } from './ProfilePage.styles';
import type { IAddress, IUser } from '../../utils/types';

function ProfilePage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const [userDetails, setUserDetails] = useState<IUser>({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    phone: user.phone || '',
    age: user.age || '',
    address: user.address || {
      street: '',
      city: '',
      postalCode: '',
      country: '',
    },
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setUserDetails((prevState) => {
      if (name.startsWith('address.')) {
        const addressField = name.split('.')[1] as keyof IAddress;
        return {
          ...prevState,
          address: {
            ...(prevState.address ?? {
              street: '',
              city: '',
              postalCode: '',
              country: '',
            }),
            [addressField]: value,
          },
        };
      }

      return { ...prevState, [name]: value };
    });
  }

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(updateUser(userDetails));
  }

  return (
    <ProfilePageContainer>
      <h3 className='heading'>Update Your Details</h3>
      <form onSubmit={handleOnSubmit}>
        <section>
          <h4>Personal Information</h4>
          <div className='personal-info'>
            <div className='row'>
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
            <div className='row'>
              <Input
                type='email'
                placeholder='Email'
                name='email'
                value={userDetails.email}
                onChange={handleOnChange}
              />
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
          </div>
        </section>
        <section>
          <h4>Address</h4>
          <div className='address'>
            <Input
              type='text'
              placeholder='Street'
              name='address.street'
              value={userDetails.address?.street}
              onChange={handleOnChange}
            />
            <div className='row'>
              <Input
                type='text'
                placeholder='City'
                name='address.city'
                value={userDetails.address?.city}
                onChange={handleOnChange}
              />
              <Input
                type='text'
                placeholder='Postal Code'
                name='address.postalCode'
                value={userDetails.address?.postalCode}
                onChange={handleOnChange}
              />

              <Input
                type='text'
                placeholder='Country'
                name='address.country'
                value={userDetails.address?.country}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </section>
        <div className='save-btn'>
          <Button type='submit' variant='primary'>
            Save Changes
          </Button>
        </div>
      </form>
    </ProfilePageContainer>
  );
}

export default ProfilePage;
