'use client'
import { FlaskRound as Flask, Microscope, AtomIcon } from "lucide-react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About Us</h2>
      <p>
        Grey Matter Laboratories (Pty) Ltd is a proudly South African, youth-owned laboratory headquartered in Pretoria,
        with a national footprint. Founded by two multidisciplinary professionals, we provide cutting-edge analytical services
        across various industries, including mining, construction, agriculture, energy, and healthcare.
      </p>

      {/* Background */}
      <div className={styles.subSection}>
        <h3>Background</h3>
        <p>
          Established in 2023, Grey Matter Laboratories was born out of a passion for innovation and a commitment to
          excellence. Our founders, with decades of combined experience in the scientific and industrial sectors, envisioned
          a laboratory that bridges the gap between advanced research and practical, real-world applications.
        </p>
      </div>

      {/* Vision */}
      <div className={styles.subSection}>
        <h3>Vision</h3>
        <p>
          To be the leading provider of analytical and laboratory solutions in Africa, driving innovation and excellence in
          scientific research and industrial applications.
        </p>
      </div>

      {/* Mission */}
      <div className={styles.subSection}>
        <h3>Mission</h3>
        <p>
          Our mission is to deliver accurate, reliable, and innovative laboratory services that empower industries to achieve
          their goals while adhering to the highest standards of quality and sustainability.
        </p>
      </div>

      {/* Applications & Services */}
      <div className={styles.subSection}>
        <h3>Applications & Services</h3>
        <p>
          Our mission is to deliver accurate, reliable, and innovative laboratory services that empower industries to achieve
          their goals while adhering to the highest standards of quality and sustainability.
        </p>
      </div>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
  <div className={styles.card}>
    <Flask size={40} />
    <h3>Research Excellence</h3>
    <p>
      Our commitment to research excellence drives us to explore new frontiers and deliver impactful solutions. We prioritize innovation and quality in every project.
    </p>
  </div>
  <div className={styles.card}>
    <Microscope size={40} />
    <h3>Innovation</h3>
    <p>
      Innovation is at the heart of what we do. We leverage cutting-edge technology and creative thinking to solve complex challenges and push boundaries.
    </p>
  </div>
  <div className={styles.card}>
    <AtomIcon size={40} />
    <h3>Collaboration</h3>
    <p>
      Collaboration fuels our success. By working together with partners and experts, we create synergies that lead to groundbreaking achievements.
    </p>
  </div>
</div>
    </section>
  );
};

export default About;