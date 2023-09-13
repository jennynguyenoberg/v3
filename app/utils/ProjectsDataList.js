import data from '@/app/config/projectsdata';
import Image from 'next/image';
import Line from '../components/line/page';
import SpanText from '../components/headings/spanText/page';
import ParagraphText from '../components/headings/paragraphText/page';
import styles from '@/app/sections/projects/projects.module.css'

export default function ProjectsDataList() {
  return (
    <div className={styles.items}>
      {data.map((item) => (
        <div key={item.id}>
          <Image
            src={item.image}
            alt={item.heading}
            width={300}
            height={200}
            layout="responsive"
          />
          <SpanText>{item.heading}</SpanText>
          <Line />
          <ParagraphText>{item.subheading}</ParagraphText>
        </div>
      ))}
    </div>
  );
};