import Link from "next/link";
import data from "@/app/utils/projectsdata";
import Line from "../components/line/page";
import SpanText from "../components/headings/spanText/page";
import ParagraphText from "../components/headings/paragraphText/page";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.line}><Line /></div>
      <div className={styles.items}>
        {data.map((item) => (
          <div key={item.id} className={styles.projectItem}>
            <div className={styles.heading}>
              <Link href={`/projects/${item.id}`} className={styles.link}>
                <SpanText>{item.heading}</SpanText>
              </Link>
            </div>
            <Link href={`/projects/${item.id}`} className={styles.link}>
              <ParagraphText>{item.subheading}</ParagraphText>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}