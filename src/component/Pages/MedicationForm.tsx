import React, { useState } from "react";
import { Form, Input, Button, Typography, message } from "antd";
import Navbar from "../Navbar";

const { Title } = Typography;

const Medication: React.FC = () => {
  const [medication, setMedication] = useState({ medicine: "", frequency: "" });

  const handleInputChange = (
    field: "medicine" | "frequency",
    value: string
  ) => {
    setMedication({ ...medication, [field]: value });
  };

  const handleSave = () => {
    if (!medication.medicine || !medication.frequency) {
      message.error("Please fill in all fields before saving.");
      return;
    }
    console.log("Medication:", medication);
    message.success("Medication saved successfully!");
  };

  return (
    <Navbar>
      <div style={styles.container}>
        <Title level={3} style={styles.title}>
          Medication Details
        </Title>
        <Form layout="vertical">
          <Form.Item label="Prescribed By">
            <Input placeholder="Doctor's Name" style={styles.input} />
          </Form.Item>

          <Title level={4} style={styles.subTitle}>
            Medicines
          </Title>
          <Form.Item label="Medicine Name" required>
            <Input
              placeholder="Enter Medicine Name"
              value={medication.medicine}
              onChange={(e) => handleInputChange("medicine", e.target.value)}
              style={styles.input}
            />
          </Form.Item>

          <Form.Item label="Frequency" required>
            <Input
              placeholder="Enter Frequency"
              value={medication.frequency}
              onChange={(e) => handleInputChange("frequency", e.target.value)}
              style={styles.input}
            />
          </Form.Item>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              style={styles.submitButton}
              type="primary"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </Navbar>
  );
};

// Inline Styles
const styles = {
  submitButton: {
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
  },

  container: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "50%",
    margin: "50px auto",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    textAlign: "center" as const,
    color: "#9c3af9",
    marginBottom: "20px",
  },
  subTitle: {
    marginTop: "20px",
    marginBottom: "10px",
    color: "#333",
  },
  input: {
    width: "100%",
  },
};

export default Medication;
