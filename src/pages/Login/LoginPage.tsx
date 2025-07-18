import { useState } from 'react';
import styles from './LoginPage.module.css';

// components
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  return (
    <main className={styles.login}>
      <h3 className={styles.title}>Job Board</h3>
      <form className={styles.form}>
        <Input
          type='email'
          name='email'
          value=''
          placeholder='Email'
          onChange={() => console.log('email')}
        />
        <Input
          type='password'
          name='password'
          value=''
          placeholder='Password'
          onChange={() => console.log('password')}
        />
        <Button variant='inverted' onClick={() => console.log('Sign In')}>
          Sign {isSignUp ? 'In' : 'Up'}
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
