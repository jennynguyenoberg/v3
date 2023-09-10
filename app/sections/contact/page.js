'use client';
import styles from "./contact.module.css";
import Footer from "../../components/footer/page";

export default function Contact() {
  const openEmailWindow = () => {
    const email = "hello@jennynguyenoberg.com"; // Replace with your email address
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <p>{`Let's connect!`}</p>
        </div>
        <div>
          <button onClick={openEmailWindow}>Send an email</button>
        </div>
      </div>
      <Footer />
    </>
  );
}