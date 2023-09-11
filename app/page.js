import Hero from "./sections/hero/page";
import Intro from "./sections/intro/page";
import Projects from "./sections/projects/page";
// import Blog from './blog/page'
import Contact from "./sections/contact/page";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Hero />
        <Intro />
        <Projects />
        {/* <Blog /> */}
        <Contact />
      </div>
    </>
  );
}
