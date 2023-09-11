import SpanText from "@/app/components/headings/spanText/page";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <>
      <div id="intro" className={styles.container}>
        <SpanText>{`
          Designer & Developer student based in 
          beautiful Stockholm, Sweden. Creative at 
          heart with a passion for the details.
          `}
        </SpanText>
        <p>The combination of my passion for design,
          code & interaction positions me in a unique
          place in the web design world.
        </p>
      </div>
    </>
  );
}
