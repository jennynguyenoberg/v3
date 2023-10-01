import Link from "next/link";
import data from "@/app/data/projectsdata";
import Image from "next/legacy/image";
import Line from "@/app/components/line/page";
import SpanText from "@/app/components/headings/spanText/page";
import ParagraphText from "@/app/components/headings/paragraphText/page";
import styles from "./projects.module.css";
import SmallText from "@/app/components/headings/smallText/page";
import DarkButton from "@/app/components/button/darkButton/page";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <SmallText>Selected work</SmallText>
      </div>
      <div className={styles.items}>
        {data.map((item) => {
          const firstImage = item.images.find(() => true);
          return (
            <div key={item.id} className={styles.projectItem}>
              <Link href={`/projects/${item.id}`}>
                <div className={styles.link}>
                  <Image
                    src={firstImage.url}
                    alt={firstImage.alt}
                    width={300}
                    height={200}
                    layout="responsive"
                    className={styles.projectImage}
                  />
                </div>
              </Link>
              <div className={styles.heading}>
                <Link href={`/projects/${item.id}`} className={styles.link}>
                  <SpanText>{item.client}</SpanText>
                </Link>
              </div>
              <Line />
              <div className={styles.subHeading}>
                <Link href={`/projects/${item.id}`} className={styles.link}>
                  <ParagraphText>{item.deliverables}</ParagraphText>
                </Link>
                <Link href={`/projects/${item.id}`} className={styles.link}>
                  <ParagraphText>{item.year}</ParagraphText>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link href={`/projects`} className={styles.button}>
        <DarkButton>All projects</DarkButton>
      </Link>
    </div>
  );
}
