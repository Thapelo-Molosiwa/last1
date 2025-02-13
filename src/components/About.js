import { FlaskRound as Flask, Microscope, AtomIcon } from "lucide-react";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>Our Mission</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Flask size={40} />
          <h3>Research Excellence</h3>
          <p>Pioneering breakthrough discoveries in neuroscience.</p>
        </div>
        <div className={styles.card}>
          <Microscope size={40} />
          <h3>Innovation</h3>
          <p>Developing cutting-edge brain research technologies.</p>
        </div>
        <div className={styles.card}>
          <AtomIcon size={40} />
          <h3>Collaboration</h3>
          <p>Building partnerships to accelerate discoveries.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
