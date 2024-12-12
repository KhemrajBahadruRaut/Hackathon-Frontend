import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>About Us</h2>
      <p style={styles.description}>
        At <strong>Centralized Hospital Repository</strong>, we are committed to improving healthcare services through technology. Our platform is designed to provide government hospitals with a unified, secure, and efficient way to store and access patient records.
      </p>
      <p style={styles.description}>
        By centralizing medical data, we ensure that healthcare providers can deliver accurate, timely, and effective treatment. Our solution also streamlines hospital management processes, including <strong>doctor appointments</strong> and <strong>time scheduling</strong>, improving the overall patient experience.
      </p>
      <div style={styles.featuresSection}>
        <h3 style={styles.subTitle}>Why Choose Us?</h3>
        <ul style={styles.featureList}>
          <li style={styles.feature}>
            🏥&nbsp;  <strong>Centralized Data:</strong>&nbsp;  One repository for all patient records across government hospitals.
          </li>
          <li style={styles.feature}>
            🔒&nbsp;  <strong>Secure and Confidential : </strong>&nbsp;  Patient data is encrypted and accessible only to authorized personnel.
          </li>
          <li style={styles.feature}>
            📅&nbsp;  <strong>Streamlined Appointments : </strong>&nbsp;  Simplified scheduling for patients and doctors.
          </li>
          <li style={styles.feature}>
            🌐&nbsp;  <strong>Inter-Hospital Connectivity : </strong>&nbsp;  Share patient records across hospitals using unique identifiers like email or phone numbers.
          </li>
          <li style={styles.feature}>
            💡&nbsp;  <strong>Efficiency and Accessibility : </strong>&nbsp;  Reduce wait times and ensure seamless healthcare services.
          </li>
        </ul>
      </div>
      <p style={styles.description}>
        Our mission is to empower healthcare providers with the tools they need to focus on what matters most: saving lives and improving patient outcomes. Together, we aim to create a healthier, more connected future for everyone.
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f9f9f9",
    padding: "40px",
    margin: "50px auto",
    width: "75%",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    fontWeight: "700",
    fontSize: "40px",
    textAlign: "center" as const,
    color: "#000000",
    
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.8",
    color: "#333",
    marginBottom: "20px",
  },
  featuresSection: {
    marginTop: "30px",
  },
  subTitle: {
    fontSize: "24px",
    color: "#007bff",
    marginBottom: "15px",
  },
  featureList: {
    listStyleType: "none" as const,
    padding: 0,
  },
  feature: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
};

export default AboutUs;