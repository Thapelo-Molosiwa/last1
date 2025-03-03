import Image from 'next/image';
import logo from '../../public/4.png';
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer id='contacts' className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <Image src={logo} alt="Grey Matter Logo" width={150} height={60} priority />
          </div>
          <p className={styles.tagline}>Premium Quality for Scientific Excellence</p>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>GREY MATTER LABORATORIES</h3>
            <p className={styles.contactDetail}>Physical Address: 1386 Block F Soshanguve, Pretoria, 0152</p>
            <p className={styles.contactDetail}>Telephone: +27 079 783 0760</p>
            <p className={styles.contactDetail}>Email: lebogangm@gmatterlabs.com</p>
            <p className={styles.contactDetail}>Website: www.gmatterlabs.co.za</p>
            <p className={styles.contactDetail}>Contact Person: Lebogang Mogaladi</p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>GREY MATTER LABORATORIES</h3>
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
      </div>

      <div className={styles.copyrightSection}>
        <small className={styles.copyrightText}>© 2024 Grey Matter Labs. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;