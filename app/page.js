import Navigation from './components/navigation/page'
import Hero from './hero/page'
import About from './about/page'
import Projects from './projects/page'
// import Blog from './blog/page'
import Contact from './contact/page'
import Footer from './components/footer/page'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}><Navigation />
        <Hero />
        <About />
        <Projects />
        {/* <Blog /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}