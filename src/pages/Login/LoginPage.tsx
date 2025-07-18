import React, { useState } from 'react';
import styles from './LoginPage.module.css';

// components
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

interface ISignUpDetails {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [signUpDetails, setSignUpDetails] = useState<ISignUpDetails>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;

    setSignUpDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <main className={styles.login}>
      <h3 className={styles.title}>Job Board</h3>
      <form className={styles.form}>
        {isSignUp && (
          <Input
            type='text'
            name='name'
            value={signUpDetails.name}
            placeholder='Name'
            onChange={handleOnChange}
          />
        )}
        <Input
          type='email'
          name='email'
          value={signUpDetails.email}
          placeholder='Email'
          onChange={handleOnChange}
        />
        <Input
          type='password'
          name='password'
          value={signUpDetails.password}
          placeholder='Password'
          onChange={handleOnChange}
        />
        {isSignUp && (
          <Input
            type='password'
            name='confirmPassword'
            value={signUpDetails.confirmPassword}
            placeholder='Confirm Password'
            onChange={handleOnChange}
          />
        )}
        <Button variant='inverted' onClick={() => console.log('Sign In')}>
          Sign {isSignUp ? 'Up' : 'In'}
        </Button>
      </form>
      <div className={styles.signUp}>
        <p>{isSignUp ? 'Already' : "Don't"} have an account?</p>
        <Button variant='text' onClick={() => setIsSignUp(!isSignUp)}>
          Sign {isSignUp ? 'In' : 'Up'}
        </Button>
      </div>
    </main>
  );
}

export default LoginPage;
