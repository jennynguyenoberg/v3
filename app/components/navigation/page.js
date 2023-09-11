"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import classNames from "classnames";
import Image from "next/image";
import DarkLinkItem from "@/app/components/link/darkLink/page";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);

  const navItems = {
    "/": {
      img: "/favicon.ico",
    },
    "#intro": {
      name: "About",
    },
    "#projects": {
      name: "Projects",
    },
    "https://assignment2-blog.vercel.app/": {
      name: "Blog",
    },
    "#contact": {
      name: "Contact",
    },
  };

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
            <Image src={navItems["/"].img} alt="Logo" width={32} height={32} />
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
              {Object.entries(navItems).map(([path, { name }]) => (
                <DarkLinkItem
                  key={path}
                  href={path}
                  className={classNames(styles.linkItem)}
                  onClick={(e) => {
                    e.preventDefault();
                    // Check if the link is the contact link
                    if (path === "#contact") {
                      // Scroll to the bottom of the page
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: "smooth",
                      });
                    } else {
                      // Smooth scroll to the section
                      const sectionId = path.substring(1);
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }
                    setShouldCloseMenu(true); // Close the menu when a link is clicked

                    // Open the blog link in a new window/tab
                    if (path === "https://assignment2-blog.vercel.app/") {
                      window.open(path, "_blank");
                    }
                  }}
                >
                  <span className={styles.linkName}>{name}</span>
                </DarkLinkItem>
))}

              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
