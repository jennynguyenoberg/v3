import styles from "./hero.module.css";
// import { BiSolidCircle } from "react-icons/bi";

export default function Hero() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textContainer}>
        <div className={styles.rowWrapper}>
          <div className={styles.rowOne}>
            <div href="/">↳ Currently looking for an internship starting</div>
          </div>
          <div className={styles.rowTwo}>
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
          {/* <div className={styles.rowTwo}>
            <span href="/">Designer & Developer</span>
          </div> */}
        </div>
      </div>
        <div className={styles.header}>
          <div className={styles.headerScroll}>
            <div className={styles.title}>Jenny Nguyen Öberg — Jenny Nguyen Öberg — Jenny Nguyen Öberg — Jenny Nguyen Öberg — Jenny Nguyen Öberg — Jenny Nguyen Öberg —</div>
          </div>
        </div>
    </div>
  );
}
