import Navigation from './components/navigation'
import About from './about/page'
import Projects from './projects/page'
import Blog from './blog/page'
import Contact from './contact/page'
import Footer from './components/footer'
import Hero from './hero/page'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}