'use client'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from '../../public/4.png'; // Make sure 4.png is inside the public folder

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        {/* Logo (Now an Image) */}
        <a href="#" className={styles.logo}>
          <Image src={logo} alt="Grey Matter Logo" width={250} height={90} priority />
        </a>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#research" className={styles.navLink}>Research</a>
          <a href="#technology" className={styles.navLink}>Technology</a>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#research" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Research</a>
          <a href="#technology" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Technology</a>
        </div>
      )}
    </nav>
  );
}
