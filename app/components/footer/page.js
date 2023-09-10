import LightLinkItem from '../link/lightLink/page';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul className={styles.footerLinksLeft}>
          <li><LightLinkItem href="/">Github</LightLinkItem></li>
          <li><LightLinkItem href="/about">LinkedIn</LightLinkItem></li>
          <li><LightLinkItem href="/contact">Instagram</LightLinkItem></li>
        </ul>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.footerContent}>
          <ul className={styles.footerLinksRight}>
            <li>2023 &copy; Built and designed by Jenny Nguyen Öberg</li>
          </ul>
      </div>
      </div>
    </footer>
  );
}