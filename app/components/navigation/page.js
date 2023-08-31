// import Link from "next/link";
'use client';
import { Link } from "react-scroll";
import styles from './navigation.module.css'

export default function Navigation() {

  return (
    <div className={styles.main}>
      <ul>
        <li>
          <Link activeClass="active" to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
        </li>
        <li>
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
        </li>
        <li>
          <Link activeClass="active" to="blog" spy={true} smooth={true} offset={0} duration={500}>Blog</Link>
        </li>
        <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
        </li>
        
        {/* <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="#about">
          <li>About</li>
        </Link>
        <Link href="#projects">
          <li>Projects</li>
        </Link>
        <Link href="#blog">
          <li>Blog</li>
        </Link>
        <Link href="#contact">
          <li>Contact</li>
        </Link> */}
      </ul>
    </div>
  );
}