import SpanText from "@/app/components/headings/spanText/page";
import styles from "./intro.module.css";
import ParagraphText from "@/app/components/headings/paragraphText/page";

export default function Intro() {
  return (
    <>
      <div id="intro" className={styles.container}>
        <div className={styles.rowWrapper}>
          <div>
            <SpanText>
              {`
              Experienced designer & developer student based in 
              beautiful Stockholm, Sweden. Creative at 
              heart with a passion for the details.
              `}
            </SpanText>
          </div>
          <div className={styles.paraText}>
            <ParagraphText>
              Combining a creative flair and a knack for visual communication
              with some technical wizardry.
            </ParagraphText>
          </div>
        </div>
      </div>
    </>
  );
}
