import Hero from "./sections/hero/page";
import Intro from "./sections/intro/page";
import Projects from "./sections/projects/page";
// import Blog from './blog/page'
// import Contact from "./sections/contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Projects />
      {/* <Blog />
      <Contact /> */}
    </>
  );
}
