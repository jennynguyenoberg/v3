import styles from "./notfound.module.css";
import DarkLinkItem from "../components/link/darkLink/page";
import SpanText from "../components/headings/spanText/page";
import ParagraphText from "../components/headings/paragraphText/page";

export default function NotFoundPage() {
  return (
    <>
      <div className={styles.container}>
        <SpanText className={styles.subtitle}>Oops...</SpanText>
        <p className={styles.title}>404</p>
        <SpanText>That page cannot be found.</SpanText>
        <ParagraphText className={styles.subtitle}>
          Go back to the <DarkLinkItem href="/">Homepage</DarkLinkItem>
        </ParagraphText>
      </div>
    </>
  );
}
