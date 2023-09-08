'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navigation.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldCloseMenu, setShouldCloseMenu] = useState(false);
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  const navItems = {
    '/': {
      img: '/favicon.ico',
    },
    '/about': {
      name: 'About',
    },
    '/projects': {
      name: 'Projects',
    },
    'http://blog.jennynguyenoberg.com': {
      name: 'Blog',
    },
    '/contact': {
      name: 'Contact',
    }
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setShouldCloseMenu(false);
    } else {
      setIsOpen(true);
      setShouldCloseMenu(true);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      const menu = document.querySelector(`.${styles['menu-icon']}`);
      if (menu && !menu.contains(e.target)) {
        setIsOpen(false);
        setShouldCloseMenu(false);
      }
    };

    const handleScroll = () => {
      if (shouldCloseMenu) {
        setIsOpen(false);
        setShouldCloseMenu(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldCloseMenu]);

  return (
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
              {Object.entries(navItems).map(
                ([path, { name }]) => {

                  return (
                    <Link
                      key={path}
                      href={path}
                      className={classNames(styles.navigationItem)}
                    >
                      <span className={styles.linkName}>{name}</span>
                    </Link>
                  );
                },
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}