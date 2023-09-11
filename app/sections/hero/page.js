import styles from "./hero.module.css";
import SubHeadingScroll from "@/app/components/headings/subHeadingScroll/page";
import TitleScroll from "@/app/components/headings/titleScroll/page";
import DescText from "@/app/components/headings/descText/page";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.rowWrapper}>
        <div>↳ Looking for an internship starting in</div>
        <SubHeadingScroll>
          <span>January</span><br />
          <span>2024</span>
        </SubHeadingScroll>
      </div>
      <TitleScroll />
      <DescText>Designer & Developer</DescText>
    </div>
  );
}
