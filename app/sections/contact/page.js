'use client';
import styles from "./contact.module.css";
import Button from "@/app/components/button/page";

export default function Contact() {
  const openEmailWindow = () => {
    const email = "hello@jennynguyenoberg.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <p className={styles.greetingHead}>{`Let's connect!`}</p>
          <p className={styles.greetingSub}>{`
            Available for internship starting January 2024 or for freelance work. 
            Let's grab a ☕️ and talk about your upcoming web or design project!
          `}
          </p>
        </div>
        <div className={styles.contactButton}>
          <Button onClick={openEmailWindow}>hello@jennynguyenoberg.com</Button>
        </div>
      </div>
    </>
  );
}