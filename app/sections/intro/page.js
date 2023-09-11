import DescText from "@/app/components/headings/descText/page";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <>
      <div id="intro" className={styles.container}>
        <DescText>Intro section</DescText>
        <p></p>
        <p></p>
      </div>
    </>
  );
}
