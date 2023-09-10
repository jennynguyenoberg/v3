import Hero from "./sections/hero/page";
import About from "./sections/about/page";
import Projects from "./sections/projects/page";
// import Blog from './blog/page'
import Contact from "./sections/contact/page";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Hero />
        <About />
        <Projects />
        {/* <Blog /> */}
        <Contact />
      </div>
    </>
  );
}
