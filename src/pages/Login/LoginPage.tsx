import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <main className={styles.login}>
      <h3 className={styles.title}>Job Board</h3>
      <form className={styles.form}>
        <input type='email' name='email' id='email' placeholder='Email' />
      </form>
    </main>
  );
}

export default LoginPage;
