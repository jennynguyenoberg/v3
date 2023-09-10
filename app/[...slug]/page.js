import styles from './notfound.module.css';
import DarkLinkItem from '../components/link/darkLink/page';

export default function NotFoundPage() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.subtitle}>Oops...</span>
        <span className={styles.title}>404</span>
        <p>That page cannot be found.</p>
        <p>Go back to the <DarkLinkItem href="/">Homepage</DarkLinkItem></p>
      </div>
    </>
  );
}