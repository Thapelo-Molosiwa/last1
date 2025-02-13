import Image from 'next/image';
import logo from '../../public/4.png';
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.logo}>
          <Image src={logo} alt="Grey Matter Logo" width={250} height={90} priority />
        </div>
      <p></p>
      <small>© 2025 Grey Matter Labs. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
