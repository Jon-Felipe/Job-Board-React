import styles from './LoginPage.module.css';

// components
import Button from '../../components/ui/Button/Button';
import Input from '../../components/ui/Input/Input';

function LoginPage() {
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
        <Button variant='inverted'>Sign In</Button>
      </form>
    </main>
  );
}

export default LoginPage;
