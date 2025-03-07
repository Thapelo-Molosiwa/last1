"use client";

import Image from 'next/image';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactSection}>
          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>GREY MATTER LABORATORIES (Johannesburg)</h3>
            <p>Physical Address: 1386 Block F Soshanguve, Pretoria, 0152</p>
            <p>Telephone: (+27)79 783 0760</p>
            <p>Email: lebogangm@gmatterlabs.com</p>
            <p>Website: www.gmatterlabs.co.za</p>
            <p>Contact Person: Lebogang Mogaladi</p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>GREY MATTER LABORATORIES (Mayerton)</h3>
            <p>Physical Address: 172 Kroonarend, Daleside, Meyerton, 1960</p>
            <p>Email: nkululekom@gmatterlabs.com</p>
            <p>Contact Person: Nkululeko Mbonane</p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>Working Hours</h3>
            <p>Monday to Friday: 08:00 AM - 05:00 PM</p>
            <p>Weekend and Public Holidays: Closed</p>
          </div>
        </div>

        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <Image src="/4.png" alt="Grey Matter Logo" width={150} height={60} priority />
          </div>
          <p className={styles.tagline}>Premium Quality for Scientific Excellence</p>
        </div>

        <div className={styles.socialMedia}>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} />
          </a>
          <a href="https://www.linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
        </div>

        <div className={styles.copyrightSection}>
          <small>© 2024 Grey Matter Labs. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;