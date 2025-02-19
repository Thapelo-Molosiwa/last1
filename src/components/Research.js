import React from 'react';
import styles from '@/styles/Home.module.css';

const servicesData = [
  {
    title: 'Mineral Analysis',
    description: 'We conduct qualitative and quantitative analyses on Chromite and Manganese Ores.',
    table: {
      headers: ['Process', 'Details'],
      rows: [
        ['Sample Preparation', 'Drying, Crushing, Milling, Screening, Splitting'],
        ['Chemical Analysis', 'X-Ray Fluorescence (XR-F), Wet Chemistry (Manual Titrations)'],
        ['Physical Properties', 'Sieve Analysis, Particle Size Distribution, Inherent Moisture, Bulk Density, Specific Gravity'],
      ],
    },
  },
  {
    title: 'Liquid Fuel Analysis',
    description: 'Ensuring compliance with SANS standards, we test diesel, petrol, and industrial oil.',
    table: {
      headers: ['Test', 'Diesel', 'Petrol'],
      rows: [
        ['Distillation', '✅', '✅'],
        ['Density at 20°C', '✅', '✅'],
        ['Viscosity at 40°C', '✅', '❌'],
        ['Flashpoint', '✅', '❌'],
        ['Total Contamination', '✅', '❌'],
        ['Water Content', '✅', '❌'],
        ['Sulphur Content', '✅', '❌'],
        ['Cetane Number', '✅', '❌'],
        ['Lead Content', '❌', '✅'],
      ],
    },
  },
  {
    title: 'Solid Fuel Analysis',
    description: 'We conduct extensive physio-chemical and mineralogical analyses of coal and coke.',
    table: {
      headers: ['Test', 'Details'],
      rows: [
        ['Total Moisture', 'Determines water content in coal'],
        ['Inherent Moisture', 'Measures moisture retained within coal structure'],
        ['Ash Content', 'Determines non-combustible residue'],
        ['Volatile Matter', 'Measures gaseous emissions from combustion'],
        ['Gross & Net Calorific Value', 'Measures energy output'],
      ],
    },
  },
  {
    title: 'Water Quality Analysis',
    description: 'We conduct compliance testing for drinking water, wastewater, and process water.',
    table: {
      headers: ['Parameter', 'Drinking Water', 'Wastewater'],
      rows: [
        ['pH Level', '✅', '✅'],
        ['Conductivity', '✅', '✅'],
        ['Sodium & Potassium', '✅', '✅'],
        ['Nitrate & Fluoride', '✅', '✅'],
        ['E. Coli Presence', '✅', '✅'],
      ],
    },
  },
];

const Services = () => {
  return (
    <section className={styles.section} id="services">
      <h2>Our Services</h2>
      <p>Grey Matter Laboratories is dedicated to delivering exceptional analytical services and laboratory solutions.</p>
      {servicesData.map((service, index) => (
        <div key={index} className={styles.serviceSection}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <table className={styles.table}>
            <thead>
              <tr>
                {service.table.headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {service.table.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <h2>Why Choose Us?</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}><h3>Cutting-Edge Technology</h3><p>We utilize the latest analytical instruments and methodologies.</p></div>
        <div className={styles.card}><h3>Regulatory Compliance</h3><p>Adherence to SANS, ASTM, ISO, and BSI standards.</p></div>
        <div className={styles.card}><h3>Quick Turnaround</h3><p>We provide accurate results in the shortest possible time.</p></div>
        <div className={styles.card}><h3>Industry Expertise</h3><p>Serving multiple industries, including mining, construction, agriculture, energy, and healthcare.</p></div>
      </div>
    </section>
  );
};

export default Services;
