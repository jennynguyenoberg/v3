import Navigation from './components/navigation/page'
import Hero from './hero/page'
import About from './about/page'
import Projects from './projects/page'
// import Blog from './blog/page'
import Contact from './contact/page'
import Footer from './components/footer/page'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}