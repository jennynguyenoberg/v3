'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navigation.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import LinkItem from '@/app/components/link/page'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);

  const navItems = {
    '/': {
      img: '/favicon.ico',
    },
    '#about': {
      name: 'About',
    },
    '#projects': {
      name: 'Projects',
    },
    '/blog': {
      name: 'Blog',
    },
    '#contact': {
      name: 'Contact',
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShouldCloseMenu(!isOpen);
  };

  useEffect(() => {
    // Initialize isOpen to false when the component mounts
    setIsOpen(false);

    

    const handleScroll = () => {
      if (shouldCloseMenu) {
        setIsOpen(false);
        setShouldCloseMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldCloseMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };
    handleResize();
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src={navItems['/'].img} alt="Logo" width={32} height={32} />
          </Link>
        </div>
        <div className={styles.menuContainer}>
          <div
            className={`${styles['menu-icon']} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className={styles.navItemContainer}>
            {isOpen && (
              <ul
                className={`${styles['navbar-items']} ${
                  isOpen ? styles.open : ''
                }`}
              >
                {Object.entries(navItems).map(([path, { name }]) => (
                  <LinkItem
                    key={path}
                    href={path}
                    className={classNames(styles.linkItem)}
                    onClick={(e) => {
                      e.preventDefault();
                      // Smooth scroll to the section
                      const sectionId = path.substring(1);
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }
                    }}
                  >
                    <span className={styles.linkName}>{name}</span>
                  </LinkItem>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
