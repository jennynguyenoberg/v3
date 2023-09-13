import Link from "next/link";
import data from "@/app/config/projectsdata";
import Image from "next/legacy/image";
import Line from "../components/line/page";
import SpanText from "../components/headings/spanText/page";
import ParagraphText from "../components/headings/paragraphText/page";
import styles from "@/app/sections/projects/projects.module.css";

export default function Projects() {
  return (
    <div className={styles.items}>
      {data.map((item) => (
        <div key={item.id} className={styles.projectItem}>
          <Link href={`/projects/${item.id}`}>
            <div className={styles.link}>
              <Image
                src={item.image}
                alt={item.heading}
                width={300}
                height={200}
                layout="responsive"
                className={styles.projectImage}
              />
            </div>
          </Link>
          <div className={styles.heading}>
            <Link href={`/projects/${item.id}`} className={styles.link}>
              <SpanText>{item.heading}</SpanText>
            </Link>
          </div>
          <Line />
          <Link href={`/projects/${item.id}`} className={styles.link}>
            <ParagraphText>{item.subheading}</ParagraphText>
          </Link>
        </div>
      ))}
    </div>
  );
}