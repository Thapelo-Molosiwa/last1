import { Brain } from "lucide-react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Brain size={30} />
      <h2>Grey Matter Laboratories</h2>
      <p>Advancing neuroscience through innovation</p>
      <small>© 2025 Grey Matter Labs. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
