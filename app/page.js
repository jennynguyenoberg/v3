import Hero from "./sections/hero/page";
import Intro from "./sections/intro/page";
import Projects from "./sections/projects/page";
// import Blog from './blog/page'
// import Contact from "./sections/contact/page";

export const metadata = {
  title: "Jenny Nguyen Öberg — Designer & Developer",
  description: "Portfolio of Jenny Nguyen Öberg",
};

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
