import Image from 'next/image';
import logo from '../../public/4.png';
import styles from '../styles/Footer.module.css';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>GREY MATTER LABORATORIES (Johannesburg)</h3>
            <p className={styles.contactDetail}>Physical Address: 1386 Block F Soshanguve, Pretoria, 0152</p>
            <p className={styles.contactDetail}>Telephone: (+27)79 783 0760</p>
            <p className={styles.contactDetail}>Email: lebogangm@gmatterlabs.com</p>
            <p className={styles.contactDetail}>Website: www.gmatterlabs.co.za</p>
            <p className={styles.contactDetail}>Contact Person: Lebogang Mogaladi</p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>GREY MATTER LABORATORIES (Mayerton)</h3>
            <p className={styles.contactDetail}>Physical Address: 172 Kroonarend, Daleside, Meyerton, 1960</p>
            <p className={styles.contactDetail}>Email: nkululekom@gmatterlabs.com</p>
            <p className={styles.contactDetail}>Contact Person: Nkululeko Mbonane</p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>Working Hours</h3>
            <p className={styles.contactDetail}>Monday to Friday: 08:00 AM - 05:00 PM</p>
            <p className={styles.contactDetail}>Weekend and Public Holidays: Closed</p>
          </div>
        </div>

        {/* Logo and Social Media Section */}
        <div className={styles.logoAndSocial}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <Image src={logo} alt="Grey Matter Logo" width={150} height={60} priority />
            </div>
            <p className={styles.tagline}>Premium Quality for Scientific Excellence</p>
          </div>

          {/* Social Media Icons */}
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/urpage" target="_blank" rel="noopener noreferrer">
              <Facebook className={styles.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/company/page" target="_blank" rel="noopener noreferrer">
              <Linkedin className={styles.socialIcon} />
            </a>
            <a href="https://www.instagram.com/yage" target="_blank" rel="noopener noreferrer">
              <Instagram className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <small className={styles.copyrightText}>© 2024 Grey Matter Labs. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;