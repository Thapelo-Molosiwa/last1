import { FlaskRound as Flask, Microscope, AtomIcon } from "lucide-react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About Us</h2>
      <p>
        Grey Matter Laboratories (Pty) Ltd is a proudly South African, youth-owned laboratory headquartered in Pretoria,
        with a national footprint. Founded by two multidisciplinary professionals, we provide cutting-edge analytical services
        across various industries, including mining, construction, agriculture, energy, and healthcare.
      </p>
      <p>
        We specialize in laboratory equipment supply, consumables, advanced testing, and on-site laboratory setup and
        management. Our solutions are tailored to meet the diverse and evolving needs of our clients, ensuring they have
        access to reliable and precise analytical services that align with international testing standards.
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Flask size={40} />
          <h3>Research Excellence</h3>
        </div>
        <div className={styles.card}>
          <Microscope size={40} />
          <h3>Innovation</h3>
        </div>
        <div className={styles.card}>
          <AtomIcon size={40} />
          <h3>Collaboration</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
