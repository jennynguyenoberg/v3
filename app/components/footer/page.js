import styles from './footer.module.css';
import LightLinkItem from '../link/lightLink/page';
import footerData from '../../config/footerData';

export default function Footer() {
  const { links, copyrightText, additionalInfo } = footerData;

  return (
    <footer className={styles.mainContainer}>
      <div className={styles.subContainer}>
        <div>
          <ul className={styles.footerLinksLeft}>
            {links.map((link, index) => (
              <LightLinkItem key={index} href={link.url} target="_blank">
                {link.text}
              </LightLinkItem>
            ))}
          </ul>
        </div>
        <div>
          <ul className={styles.copyrightText}>
            <li>{copyrightText}</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomScroll}>
          <div className={styles.title}>{additionalInfo}</div>
        </div>
      </div>
    </footer>
  );
}