'use client'
import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
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
          <Image src={logo} alt="Grey Matter Logo" width={220} height={70} priority />
        </a>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#products" className={styles.navLink}>Products</a>
          <a href="#contacts" className={styles.navLink}>For More Info</a>
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
          <a href="#services" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#products" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Products</a>
          <a href="#contacts" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>For More Info</a>
        
        </div>
      )}
    </nav>
  );
}
