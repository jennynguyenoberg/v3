import React from 'react';
import Link from 'next/link';
import DarkButton from "../components/button/darkButton/page";
import ParagraphText from "../components/headings/paragraphText/page";
import SmallText from "../components/headings/smallText/page";
import SpanText from "../components/headings/spanText/page";
import Line from "../components/line/page";
import styles from "./projects.module.css";
import data from "@/app/utils/projectsdata";

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.subTitle}>All projects</div>
      <span className={styles.contentTitle}>
        <SmallText className={styles.columnOne}>Client</SmallText>
        <SmallText className={styles.columnTwo}>Deliverables</SmallText>
        <SmallText className={styles.columnThree}>Location</SmallText>
        <SmallText className={styles.columnFour}>Year</SmallText>
        <div className={styles.contentDesc}></div>
      </span>
      <Line />
      {data.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <Line />}
          <div className={styles.contentProject}>
            {item.link ? (
              <Link href={item.link} className={styles.link}>
                <SpanText className={styles.contentClient}>{item.client}</SpanText>
              </Link>
            ) : (
              <SpanText className={styles.contentClient}>{item.client}</SpanText>
            )}
            <ParagraphText className={styles.contentDel}>{item.deliverables}</ParagraphText>
            <ParagraphText className={styles.contentLoc}>{item.location}</ParagraphText>
            <ParagraphText className={styles.contentYear}>{item.year}</ParagraphText>
          </div>
        </React.Fragment>
      ))}
      <Line />
      {/* Archive Button */}
      <Link href={`/archive`} className={styles.button}>
        <DarkButton>Archive</DarkButton>
      </Link>
    </div>
  );
}
