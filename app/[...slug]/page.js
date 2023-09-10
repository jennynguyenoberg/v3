import styles from './notfound.module.css';
import LinkItem from '../components/link/page';

export default function NotFoundPage() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.subtitle}>Oops...</span>
        <span className={styles.title}>404</span>
        <p>That page cannot be found.</p>
        <p>Go back to the <LinkItem href="/">Homepage</LinkItem></p>
      </div>
    </>
  );
}