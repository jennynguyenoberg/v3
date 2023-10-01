import styles from "./footer.module.css";
import LightLinkItem from "../link/lightLink/page";
import footerData from "../../data/footerData";
import TitleScroll from "../headings/titleScroll/page";

export default function Footer() {
  const { links, copyrightText } = footerData;

  return (
    <footer className={styles.container}>
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
      <TitleScroll className={styles.titleScroll} />
    </footer>
  );
}
