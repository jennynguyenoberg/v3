import styles from './hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <h5>Site is under maintenance</h5>

        <div className={styles.header}>
          <h1 className={styles.title}>Jenny Nguyen Öberg</h1>
        </div>

        <div className={styles.columnContainer}>
          <div className={styles.column1}>
            <p className={styles.descriptionText}>
              Designer & Web Developer student based in beautiful Stockholm,
              Sweden. Creative at heart with a passion for the details.
            </p>
          </div>

          <div className={styles.column2}>
            <div className={styles.category}>
              <Link href="/">Design</Link>
            </div>
          </div>
          
          <div className={styles.column3}>
            <div className={styles.category}>
              <Link href="/">&#60;&#47;Code&#62;</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}