import styles from './notfound.module.css';
import LinkItem from '../components/link/page';

export default function NotFoundPage() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subtitle}>Oops...</h2>
        <h1 className={styles.title}>404</h1>
        <p>That page cannot be found.</p>
        <div className={styles.link}>
          <p className={styles.para}>
            Go back to the <LinkItem href="/">Homepage</LinkItem>
          </p>
        </div>
      </div>
    </>
  );
}
