import React from "react";
import styles from "../styles/Services.module.css";
import {
  FlaskRound as Flask,
  Droplet,
  Flame,
  HeaterIcon as WaterIcon,
  Droplets,
  Beaker,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Flame className={styles.icon} />,
      title: "Solid Fuel Analysis",
      description: "including coal, coke, Biomass",
    },
    {
      icon: <WaterIcon className={styles.icon} />,
      title: "Water Quality analysis",
      description:
        "including drinking water, wastewater, industrial effluents, and groundwater.",
    },
    {
      icon: <Droplet className={styles.icon} />,
      title: "Liquid Fuel Analysis",
      description: "including diesel, petrol, motor and industrial oil.",
    },
    {
      icon: <Flask className={styles.icon} />,
      title: "Mineral analysis",
      description: "including chrome and manganese.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Cutting-Edge Technology",
      description: "We utilize the latest analytical instruments and methodologies.",
    },
    {
      title: "Quick Turnaround",
      description: "We provide accurate results in the shortest possible time.",
    },
    {
      title: "Industry Expertise",
      description:
        "Serving multiple industries, including mining, construction, agriculture, energy, and healthcare.",
    },
  ];

  return (
    <section className={styles.section} id="services">
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <img
          src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Laboratory equipment"
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.description}>
            Our comprehensive range of services and products are designed to meet
            your unique needs and help you reach the optimum potential of your
            operations through data-driven insights.
          </p>
          <a
            href="Grey Matter Brochure (split pages)2.pdf"
            download
            className={styles.downloadLink}
          >
            Download Brochure
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Analytical Services</h2>
          <p className={styles.sectionDescription}>
            We offer a wide range of analytical services to meet your industry
            needs. Our expertise ensures accurate and reliable results for your
            operations.
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <div className={styles.iconContainer}>{service.icon}</div>
                <div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Card Layout */}
      <div className={styles.newCardContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Specialized Services</h2>
          <p className={styles.sectionDescription}>
            Our specialized services are designed to provide tailored solutions
            for your unique requirements. From laboratory setups to on-site
            sampling, we’ve got you covered.
          </p>
        </div>
        <div className={styles.newCardGrid}>
          {/* Laboratory Services Card */}
          <div className={styles.newCard}>
            <img
              src="/WhatsApp Image 2025-03-03 at 01.15.43.jpeg"
              alt="Laboratory equipment including beakers and test tubes"
              className={styles.newCardImage}
            />
            <div className={styles.newCardContent}>
              <div className={styles.newCardHeader}>
                <Flask className={styles.newCardIcon} />
                <h2 className={styles.newCardTitle}>Laboratory Services</h2>
              </div>
              <p className={styles.newCardDescription}>
                Our range of analytical services includes products such as:
                Mineral analysis including chrome and manganese Liquid Fuel
                Analysis including diesel, petrol, motor and industrial oils
                Solid Fuel Analysis including coal, coke, biomass
                pellets/woodchips, and charcoal. Water Quality analysis
                including drinking water, wastewater, industrial effluents, and
                groundwater.
              </p>
            </div>
          </div>

          {/* Sampling Card */}
          <div className={styles.newCard}>
            <img
              src="/WhatsApp Image 2025-02-21 at 09.14.14.jpeg"
              alt="Scientist collecting water samples from a river"
              className={styles.newCardImage}
            />
            <div className={styles.newCardContent}>
              <div className={styles.newCardHeader}>
                <Droplets className={styles.newCardIcon} />
                <h2 className={styles.newCardTitle}>Sampling</h2>
              </div>
              <p className={styles.newCardDescription}>
                Our On-site Sampling involves collection of representative water
                and coal samples at sites, processing plants, and stockpiles,
                following best practices to ensure unbiased samples and accurate
                analysis. We also perform water sampling including surface and
                ground water, along with coal sampling.
              </p>
            </div>
          </div>

          {/* On-site Laboratory Card */}
          <div className={styles.newCard}>
            <img
              src="/WhatsApp Image 2025-02-21 at 09.14.14 (1).jpeg"
              alt="Modern laboratory equipment in a clean facility"
              className={styles.newCardImage}
            />
            <div className={styles.newCardContent}>
              <div className={styles.newCardHeader}>
                <Beaker className={styles.newCardIcon} />
                <h2 className={styles.newCardTitle}>On-site Laboratory</h2>
              </div>
              <p className={styles.newCardDescription}>
                We collaborate with various industries that require real-time
                analysis to establish on-site laboratory services unique to their
                operational needs. Our Services Include: Customized Lab Design
                Lab Setup and Equipment Installation Analytical Protocol setup
                for sample testing and analysis. Training and Continuous Support
                Manage the operations of the lab.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className={styles.whyChooseUs}>
        <h2 className={styles.title}>Why Choose Us?</h2>
        <div className={styles.whyChooseUsContent}>
          {whyChooseUs.map((item, index) => (
            <div key={index} className={styles.whyChooseUsItem}>
              <h3 className={styles.whyChooseUsTitle}>{item.title}</h3>
              <p className={styles.whyChooseUsDescription}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;