import styles from "./hero.module.css";
import SubHeadingRotate from "@/app/components/headings/subHeadingRotate/page";
import TitleScroll from "@/app/components/headings/titleScroll/page";
import SpanText from "@/app/components/headings/spanText/page";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.rowWrapper}>
        <div className={styles.calloutText}>
          ↳ Looking for an internship starting in
        </div>
        <SubHeadingRotate>
          <span>January</span>
          <br />
          <span>2024</span>
        </SubHeadingRotate>
      </div>
      <TitleScroll />
      <div className={styles.spanContainer}>
        <SpanText>Designer & Developer</SpanText>
      </div>
    </div>
  );
}
