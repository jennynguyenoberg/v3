import styles from './hero.module.css';
import Link from 'next/link';
import LinkItem from '@/app/components/link/page'

export default function Hero() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <div className={styles.row}>
        </div>
        <div className={styles.rowWrapper}>
          <span href="/">Designer & Developer</span>
          <span>&#60;Site is under maintenance &#47;&#62;</span>
        </div>
        <div className={styles.header}>
          <h1 className={styles.title}>Jenny Nguyen Öberg —</h1>
        </div>
      </div>
    </div>
  );
}