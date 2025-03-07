import React from 'react';
import styles from "../styles/Products.module.css";
import { FlaskConical, Filter, Beaker, Pipette, ChevronRight } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Laboratory Products</h1>
          <p className={styles.subtitle}>Premium Quality for Scientific Excellence</p>
        </div>
        
        <div className={styles.intro}>
          <p>
            Grey Matter Laboratories offers a comprehensive range of high-quality laboratory products 
            designed to meet the exacting standards of modern scientific research and analysis. 
            From precision chemicals to specialized equipment, we provide the tools you need for 
            breakthrough discoveries and reliable results.
          </p>
        </div>
        
        <div className={styles.productCategories}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <div className={styles.iconContainer}>
                <Beaker size={32} />
              </div>
              <h3 className={styles.categoryTitle}>Chemical Reagents</h3>
            </div>
            <div className={styles.categoryDescription}>
              <p>Ultra-pure analytical grade chemicals manufactured to the highest industry standards.</p>
              <ul className={styles.itemsList}>
                <li>Analytical Grade Acids: Nitric, Hydrochloric, Sulfuric, etc. </li>
                <li>High-Purity Solvents: Acetone, Ethanol, Methanol, etc.</li>
                <li>Precision Buffer Solutions & Calibration Standards, etc.</li>
                <li>Custom Formulations for Specialized Applications, etc.</li>
              </ul>
             
            </div>
          </div>
          
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <div className={styles.iconContainer}>
                <Filter size={32} />
              </div>
              <h3 className={styles.categoryTitle}>Laboratory Consumables</h3>
            </div>
            <div className={styles.categoryDescription}>
              <p>Essential high-quality consumables for daily laboratory operations and research.</p>
              <ul className={styles.itemsList}>
                <li>Premium Filtration: Whatman Filter Papers, Membrane Filters, etc.</li>
                <li>Precision Plasticware: Pipette Tips, Microplates, Centrifuge Tubes, etc.</li>
                <li>Safety Equipment: Nitrile Gloves, Masks, Hair Nets, Lab Coats, etc.</li>
                <li>Sterilization and Containment Solutions, etc.</li>
              </ul>
              
            </div>
          </div>
          
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <div className={styles.iconContainer}>
                <FlaskConical size={32} />
              </div>
              <h3 className={styles.categoryTitle}>Precision Glassware</h3>
            </div>
            <div className={styles.categoryDescription}>
              <p>Laboratory-grade glassware engineered for accuracy, durability, and reliability.</p>
              <ul className={styles.itemsList}>
                <li>Volumetric Equipment: Beakers, Erlenmeyer Flasks, Graduated Cylinders, etc.</li>
                <li>Analytical Tools: Test Tubes, Burettes, Pipettes, etc.</li>
                <li>Specialized Containers: Petri Dishes, Watch Glasses, Desiccators, etc.</li>
                <li>Custom Glassware for Unique Research Applications, etc.</li>
              </ul>
            
            </div>
          </div>
          
          <div className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <div className={styles.iconContainer}>
                <Pipette size={32} />
              </div>
              <h3 className={styles.categoryTitle}>Custom Solutions</h3>
            </div>
            <div className={styles.categoryDescription}>
              <p>Tailored products and services designed to meet your specific research requirements.</p>
              <ul className={styles.itemsList}>
                <li>Custom Chemical Formulations and Reagent Preparation, etc.</li>
                <li>Specialized Equipment and Instrumentation, etc.</li>
                <li>Bespoke Laboratory Setup and Configuration, etc.</li>
                <li>Bulk Ordering and Supply Chain Management, etc.</li>
              </ul>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;