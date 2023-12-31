"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import classNames from "classnames";
import Image from "next/legacy/image";
import DarkLinkItem from "@/app/components/link/darkLink/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShouldCloseMenu(false); // Set shouldCloseMenu to false when opening the menu
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
          </Link>
        </div>
        <div className={styles.menuContainer}>
          <div
            className={`${styles["menu-icon"]} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className={styles.navItemContainer}>
            {isOpen && (
              <ul
                className={`${styles["navbar-items"]} ${
                  isOpen ? styles.open : ""
                }`}
              >
                <DarkLinkItem
                  href="/about"
                  className={classNames(styles.linkItem)}
                >
                  <span className={styles.linkName}>About</span>
                </DarkLinkItem>
                <DarkLinkItem
                  href="/projects"
                  className={classNames(styles.linkItem)}
                >
                  <span className={styles.linkName}>Projects</span>
                </DarkLinkItem>
                <DarkLinkItem
                  href="https://assignment2-blog.vercel.app/"
                  className={classNames(styles.linkItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.linkName}>Blog</span>
                </DarkLinkItem>
                <DarkLinkItem
                  href="#contact"
                  className={classNames(styles.linkItem)}
                  onClick={(e) => {
                    e.preventDefault();
                    // Scroll to the bottom of the page
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                    setShouldCloseMenu(true); // Close the menu when a link is clicked
                  }}
                >
                  <span className={styles.linkName}>Contact</span>
                </DarkLinkItem>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
