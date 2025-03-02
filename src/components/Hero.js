"use client"; // Needed for animations in Next.js App Router

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div style={{ textAlign: "center" }}>
        {/* Animated h1 */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          GREY MATTER LABORATORIES.
        </motion.h1>

        {/* Animated p */}
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
          style={{ marginTop: "20px" }}
        >
          Just as grey matter in the human brain processes information, drives
          decision-making and controls vital functions, Grey Matter Laboratories
          plays a pivotal role in empowering industries with accurate,
          insightful, and reliable analytical services.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;