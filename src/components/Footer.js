import Image from "next/image";
import logo from "../../public/4.png";
import styles from "../styles/Footer.module.css";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Contact Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>
              GREY MATTER LABORATORIES
              <span className={styles.smallText}>(Johannesburg)</span>
            </h3>
            <p className={styles.contactDetail}>
              Physical Address: 10002 EXT 35 Windmilpark, Boksburg.
            </p>
            <p className={styles.contactDetail}>Telephone: (+27)78 938 6750</p>
            <p className={styles.contactDetail}>Email: info@gmatterlabs.com</p>
            <p className={styles.contactDetail}>
              Website: www.gmatterlabs.co.za
            </p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>
              GREY MATTER LABORATORIES
              <span className={styles.smallText}>(Meyerton)</span>
            </h3>
            <p className={styles.contactDetail}>
              Physical Address: 172 Kroonarend, Daleside, Meyerton, 1960
            </p>
            <p className={styles.contactDetail}>Telephone: (+27)74 189 1357</p>
            <p className={styles.contactDetail}>Email: info@gmatterlabs.com</p>
            <p className={styles.contactDetail}>
              Website: www.gmatterlabs.co.za
            </p>
          </div>

          <div className={styles.contactBlock}>
            <h3 className={styles.contactTitle}>Working Hours</h3>
            <p className={styles.contactDetail}>
              Monday to Friday: 08:00 AM - 05:00 PM
            </p>
            <p className={styles.contactDetail}>
              Weekend and Public Holidays: Closed
            </p>
          </div>
        </div>

        {/* Logo and Social Media Section */}
        <div className={styles.logoAndSocial}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <Image
                src={logo}
                alt="Grey Matter Logo"
                width={150}
                height={60}
                priority
              />
            </div>
            <p className={styles.tagline}>
              Premium Quality for Scientific Excellence
            </p>
          </div>

          {/* Social Media Icons */}
          <div className={styles.socialMedia}>
            <a
              href="https://www.facebook.com/urpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className={styles.socialIcon} />
            </a>
            <a
              href="https://www.linkedin.com/company/page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className={styles.socialIcon} />
            </a>
            <a
              href="https://www.instagram.com/yage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className={styles.socialIcon} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyrightSection}>
        <small className={styles.copyrightText}>
          © 2024 Grey Matter Labs. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
