import styles from './LoginPage.module.css';

// components
import Button from '../../components/ui/Button/Button';

function LoginPage() {
  return (
    <main className={styles.login}>
      <h3 className={styles.title}>Job Board</h3>
      <form className={styles.form}>
        <input type='email' name='email' id='email' placeholder='Email' />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <Button variant='inverted'>Sign In</Button>
      </form>
    </main>
  );
}

export default LoginPage;
