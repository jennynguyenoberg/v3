import Link from "next/link";
import data from "@/app/utils/projectsdata";
import Line from "../components/line/page";
import SpanText from "../components/headings/spanText/page";
import ParagraphText from "../components/headings/paragraphText/page";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <Line />
      </div>
      <div className={styles.items}>
        {data.map((item) => (
          <div key={item.id} className={styles.projectItem}>
            <Link href={`/projects/${item.id}`} className={styles.link}>
              <div className={styles.heading}>
                <SpanText>{item.heading}</SpanText>
              </div>
            </Link>
            <Link href={`/projects/${item.id}`} className={styles.link}>
              <div className={styles.projectInfo}>
                <div className={styles.columnDeliverables}>
                  <ParagraphText>{item.deliverables}</ParagraphText>
                </div>
                <div className={styles.columnClient}>
                  <ParagraphText>{item.client}</ParagraphText>
                </div>
                <div className={styles.columnYear}>
                  <ParagraphText>{item.year}</ParagraphText>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
