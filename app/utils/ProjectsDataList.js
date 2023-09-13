import data from '@/app/config/projectsdata';
import Image from "next/legacy/image";
import Line from '../components/line/page';
import SpanText from '../components/headings/spanText/page';
import ParagraphText from '../components/headings/paragraphText/page';
import styles from '@/app/sections/projects/projects.module.css'

export default function ProjectsDataList() {
  return (
    <div className={styles.items}>
      {data.map((item) => (
        <div key={item.id} className={styles.projectItem}>
          <Image
            src={item.image}
            alt={item.heading}
            width={300}
            height={200}
            layout="responsive"
            className={styles.projectImage}
          />
          <div className={styles.heading}>
            <SpanText>{item.heading}</SpanText>
          </div>
          <Line />
          <ParagraphText>{item.subheading}</ParagraphText>
        </div>
      ))}
    </div>
  );
};