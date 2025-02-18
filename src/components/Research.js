import styles from "../styles/Home.module.css";

const servicesData = [
  {
    title: "Mineral Analysis",
    description: "Comprehensive analysis of Chromite and Manganese Ores, including sample preparation and chemical testing.",
    details: [
      "Sample Preparation - Drying, Crushing, Milling, Screening, Splitting",
      "Chemical Analysis - X-Ray Fluorescence (XR-F), Wet Chemistry",
      "Physical Properties - Sieve Analysis, Particle Size Distribution",
    ],
  },
  {
    title: "Liquid Fuel Analysis",
    description: "Testing for compliance with SANS standards for diesel, petrol, and industrial oils.",
    details: [
      "Diesel & Petrol - Meets SANS 342:2016 and SANS 1598:2006",
      "Industrial Oil - Monitoring oil condition & machinery health",
    ],
  },
  {
    title: "Solid Fuel Analysis",
    description: "Comprehensive analysis of coal and coke under ASTM, ISO, and BSI standards.",
    details: [
      "Physio-chemical and mineralogical testing",
      "Customized packages based on client needs",
    ],
  },
  {
    title: "Water Analysis",
    description: "Ensuring compliance for drinking water, wastewater, and process water.",
    details: [
      "Drinking Water - SANAS 241-1:2015 compliance",
      "Wastewater - Industrial effluent water testing",
      "Process Water - Boiler and cooling tower compliance",
    ],
  },
];

const Research = () => {
  return (
    <section id="research" className={styles.section}>
      <h2>Our Services</h2>
      <p>
        Our comprehensive range of services and products are designed to meet your unique needs and
        help you reach the optimum potential of your operations through data-driven insights.
      </p>

      <div className={styles.cardContainer}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
