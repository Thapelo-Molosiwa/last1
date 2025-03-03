"use client";
import { FlaskRound as Flask, Microscope, AtomIcon } from "lucide-react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About Us</h2>
      <p>
        Grey Matter Laboratories (Pw) Ltd is a proudly South African,
        youth-owned laboratory headquartered in Pretoria, with a national
        footprint. Founded by two multidisciplinary professionals, Grey Matter
        Laboratories sets itself as an emerging key in analytical services
        across various industries, including mining, construction, and
        agriculture energy and healthcare. From supplying laboratory equipment
        and consumables to conducting advanced testing, such as water treatment
        jar tests, and supporting the setup and management of on-site
        laboratories, we provide bespoke solutions that meet the diverse and
        evolving needs of our clients.
      </p>

      {/* Vision */}
      <div className={styles.subSection}>
        <h3>Vision</h3>
        <p>
          Our vision is to be an internationally recognized analytical services
          provider, known for our excellence and commitment to quality. We aim
          to inspire trust and confidence in every client we serve across
          various industries.
        </p>
      </div>

      {/* Mission */}
      <div className={styles.subSection}>
        <h3>Mission</h3>
        <p>
          Our mission is to provide professional and accurate analytical results
          with an exceptional turnaround time. We are committed to implementing
          best practices that benefit our clients, ensuring reliable and precise
          outcomes by adhering to international testing standards and conducting
          rigorous quality checks.
        </p>
      </div>

      {/* Applications & Services */}
      <div className={styles.subSection}>
        <h3>Applications & Services</h3>
        <p>
          Grey Matter Laboratories is committed to providing exceptional
          analytical services and laboratory solutions while remaining up to
          date with the latest industrial developments. We offer guidance, from
          product analysis and laboratory setup to equipment supply and
          technical support with an exceptionally good turnaround time. With a
          focus on understanding each client’s unique needs, we ensure they have
          the right information to choose the right solution for their unique
          requirement.
        </p>
      </div>

      {/* Cards Section */}
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Flask size={40} />
          <h3>Research Excellence</h3>
          <p>
            Our commitment to research excellence drives us to explore new
            frontiers and deliver impactful solutions. We prioritize innovation
            and quality in every project.
          </p>
        </div>
        <div className={styles.card}>
          <Microscope size={40} />
          <h3>Innovation</h3>
          <p>
            Innovation is at the heart of what we do. We leverage cutting-edge
            technology and creative thinking to solve complex challenges and
            push boundaries.
          </p>
        </div>
        <div className={styles.card}>
          <AtomIcon size={40} />
          <h3>Collaboration</h3>
          <p>
            Collaboration fuels our success. By working together with partners
            and experts, we create synergies that lead to groundbreaking
            achievements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
