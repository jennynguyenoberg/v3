import React from "react";
import Link from "next/link";
import DarkButton from "@/app/components/button/darkButton/page";
import ParagraphText from "@/app/components/headings/paragraphText/page";
import SmallText from "@/app/components/headings/smallText/page";
import SpanText from "@/app/components/headings/spanText/page";
import Line from "@/app/components/line/page";
import styles from "./projects.module.css";
import data from "@/app/utils/projectsdata";
import TitleText from "../components/headings/titleText/page";

export const metadata = {
  title: "Projects",
  description: "Projects | Jenny Nguyen Öberg",
};

export default function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TitleText>All projects</TitleText>
      </div>
      <div className={styles.contentTitle}>
        <SmallText className={styles.columnOne}>Client</SmallText>
        <SmallText className={styles.columnTwo}>Deliverables</SmallText>
        <SmallText className={styles.columnThree}>Location</SmallText>
        <SmallText className={styles.columnFour}>Year</SmallText>
      </div>
      <Line />
      {data.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <Line />}
          <div className={styles.contentProject}>
            <Link href={`/projects/${item.id}`} className={styles.link}>
              <SpanText className={styles.contentClient}>
                {item.client}
              </SpanText>
              <ParagraphText className={styles.contentDel}>
                {item.deliverables}
              </ParagraphText>
              <ParagraphText className={styles.contentLoc}>
                {item.location}
              </ParagraphText>
              <ParagraphText className={styles.contentYear}>
                {item.year}
              </ParagraphText>
            </Link>
          </div>
        </React.Fragment>
      ))}
      <Line />
      {/* Archive Button */}
      {/* <Link href={`/archive`} className={styles.button}>
        <DarkButton>Archive</DarkButton>
      </Link> */}
    </div>
  );
}
