import React from "react";
import Link from "next/link";
import DarkButton from "@/app/components/button/darkButton/page";
import ParagraphText from "@/app/components/headings/paragraphText/page";
import SmallText from "@/app/components/headings/smallText/page";
import Line from "@/app/components/line/page";
import styles from "../projectId.module.css";
import data from "@/app/utils/projectsdata";
import DarkLinkItem from "@/app/components/link/darkLink/page";
import Image from "next/legacy/image";
import TitleText from "@/app/components/headings/titleText/page";

export const metadata = {
  title: "Project 3",
  description: "Project 3 | Jenny Nguyen Öberg",
};

export default function ProjectThree() {
  const projectIdToShow = "project-three";
  const project = data.find((item) => item.id === projectIdToShow);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <TitleText>{project.client}</TitleText>
        </div>
        <div className={styles.contentTitle}>
          <SmallText className={styles.columnOne}>Year</SmallText>
          <SmallText className={styles.columnTwo}>Specifications</SmallText>
          <SmallText className={styles.columnThree}>GitHub Repo</SmallText>
          <SmallText className={styles.columnFour}>Live site</SmallText>
        </div>
        <Line />

        <div className={styles.contentProject}>
          <div className={styles.contentYear}>
            <ParagraphText>{project.year}</ParagraphText>
          </div>
          <div className={styles.contentDel}>
            <ParagraphText>{project.specs}</ParagraphText>
          </div>
          <div className={styles.contentLoc}>
            <DarkLinkItem
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ParagraphText>To repo &#8600;</ParagraphText>
            </DarkLinkItem>
          </div>
          <div className={styles.contentSite}>
            <DarkLinkItem
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ParagraphText>Visit live site &#8600;</ParagraphText>
            </DarkLinkItem>
          </div>
        </div>

        <div className={styles.brief}>
          <SmallText className={styles.columnFive}>Brief</SmallText>
          <ParagraphText className={styles.contentBrief}>
            {project.brief}
          </ParagraphText>
        </div>
      </div>
      <div className={styles.images}>
        {project.images.map((image, index) => (
          <div key={index} className={styles.projectImage}>
            <Image
              src={image.url}
              alt={image.alt}
              width={718}
              height={378}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <Link href={`/projects/project-four`} className={styles.button}>
        <DarkButton>Next project</DarkButton>
      </Link>
    </>
  );
}
