import styles from "./hero.module.css";
import stylesSub from "../components/hero-header/subheading.module.css";
import stylesHead from "../components/hero-header/header.module.css";
// import { BiSolidCircle } from "react-icons/bi";

export default function Hero() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <div className={styles.rowWrapper}>
          <div href="/">↳ Currently looking for an internship starting in</div>
          <div className={stylesSub.subheading}>
            <span>
              January
              {/* <BiSolidCircle
                  className={styles.dot} 
                  size={10}
                  style={{
                    color: 'red'
                  }}
                /> */}
            </span>
            <br />
            <span>
              2024
              {/* <BiSolidCircle
                      className={styles.dot} 
                      size={10}
                      style={{
                        color: 'red'
                      }}
                    /> */}
            </span>
          </div>
        </div>
      </div>
      <div className={stylesHead.header}>
        <div className={stylesHead.headerScroll}>
          <div className={stylesHead.title}>
            Jenny Nguyen Öberg — Jenny Nguyen Öberg — Jenny Nguyen Öberg — Jenny
            Nguyen Öberg — Jenny Nguyen Öberg — Jenny Nguyen Öberg —
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <span href="/">Designer & Developer</span>
      </div>
    </div>
  );
}
