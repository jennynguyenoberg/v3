"use client";
import ParagraphText from "@/app/components/headings/paragraphText/page";
import styles from "./contact.module.css";
import LightButton from "@/app/components/button/lightButton/page";
import TitleText from "@/app/components/headings/titleText/page";

export default function Contact() {
  const openEmailWindow = () => {
    const email = "hello@jennynguyenoberg.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <TitleText>{`Let's connect!`}</TitleText>
          <ParagraphText className={styles.greetingSub}>
            {`
            Available for internship starting January 2024 or for freelance work. 
            Let's grab a ☕️ and talk about your upcoming web or design project!
          `}
          </ParagraphText>
        </div>
        <div className={styles.contactButton}>
          <LightButton onClick={openEmailWindow}>
            hello@jennynguyenoberg.com
          </LightButton>
        </div>
      </div>
    </>
  );
}
