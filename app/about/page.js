import React from "react";
import Link from "next/link";
// import DarkButton from "@/app/components/button/darkButton/page";
import ParagraphText from "@/app/components/headings/paragraphText/page";
// import SmallText from "@/app/components/headings/smallText/page";
import SpanText from "@/app/components/headings/spanText/page";
import Line from "@/app/components/line/page";
import styles from "./about.module.css";
// import data from "@/app/utils/projectsdata";
import TitleText from "../components/headings/titleText/page";
import Image from "next/legacy/image";
import DarkButton from "../components/button/darkButton/page";
import DarkLinkItem from "../components/link/darkLink/page";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <TitleText>Elevating Digital Experiences</TitleText>
      </div>
      <Line />
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <SpanText>
            {`
              Hi! Hej! Xin Chào! I'm Jenny, a frontend developer and designer. I'm all about crafting captivating, user-friendly websites. From concept to coding, I've got you covered.
          `}
          </SpanText>
          <ParagraphText>
            {`
              As your multidisciplinary creative, I offer a range of services to elevate your digital presence. From branding that tells your unique story to eye-catching graphic design that captures attention, I've got the artistic touch you need. Whether you're looking for a fresh web design that's both stylish and functional, or UI/UX design that ensures a seamless user experience, I've got the skills to make it happen. 
          `}
            <br /><br />
            {`
             And when it comes to bringing your ideas to life, my front-end development expertise ensures your website or app not only looks good but works like a charm. Plus, if you need some custom illustrations to add that extra flair, I'm here to make your vision a reality. Let's make your brand stand out!
          `}
          </ParagraphText>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            width={1504}
            height={1957}
            className={styles.projectImage}
            />
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <div>
          <div className={styles.subtitle}>
            <SpanText>Services</SpanText>
          </div>
          <ParagraphText>
            {`
            Branding, Graphic Design, Web Design, UI/UX Design, Front End Development          
          `}
          </ParagraphText>
        </div>
        <div>
          <div className={styles.subtitle}>
            <SpanText>Skills</SpanText>
          </div>
          <ParagraphText>
            {`
            HTML, CSS, Javascript, Typescript, jQuery, React, Next.js, Node
          `}
          </ParagraphText>
        </div>
        <div className={styles.resume}>
          <a
            href="/resume.pdf"
            download="Jenny_Nguyen_Öberg_resume.pdf"
            style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}
          >
            Download resume
          </a>
        </div>
      </div>
      <Link href={`/projects`} className={styles.button}>
        <DarkButton>All projects</DarkButton>
      </Link>
    </div>
  );
}
