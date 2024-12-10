


import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Typography, message } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title } = Typography;

const MedicationForm: React.FC = () => {
  const [medications, setMedications] = useState([
    { medicine: "", frequency: "" },
  ]);

  const handleAddMedication = () => {
    setMedications([...medications, { medicine: "", frequency: "" }]);
  };

  const handleInputChange = (
    index: number,
    field: "medicine" | "frequency",
    value: string
  ) => {
    const updatedMedications = [...medications];
    updatedMedications[index][field] = value;
    setMedications(updatedMedications);
  };



  const handleRemoveMedication = (index: number) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to remove all medicine details?")) {
      setMedications([]);
    }
  };

  const handleSave = () => {
    if (medications.some((med) => !med.medicine || !med.frequency)) {
      message.error("Please fill in all fields before saving.");
      return;
    }
    console.log("Medications:", medications);
    message.success("Medications saved successfully!");
  };


  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>
        Medication Details
      </Title>
      <Form layout="vertical">
        <Form.Item label="Prescribed By" required>
          <Input placeholder="Prescribed By" style={styles.input} />
        </Form.Item>

        <div style={{ display:"flex", justifyContent:"space-between", marginBottom: "20px" }}>
          <Button type="primary" onClick={handleAddMedication} icon={<PlusOutlined />}>
            Add Medication
          </Button>
          {medications.length > 0 && (
            <Button
              type="default"
              onClick={handleClearAll}
              style={{ marginLeft: "10px", backgroundColor: "grey", color: "white" }}
            >
              Clear All
            </Button>
          )}
        </div>


        {medications.map((medication, index) => (
          <Row key={index} gutter={16} style={{ marginBottom: "10px" }}>
            <Col span={10}>
              <Input
                placeholder="Medicine Name"
                value={medication.medicine}
                onChange={(e) =>
                  handleInputChange(index, "medicine", e.target.value)
                }
              />
            </Col>
            <Col span={10}>
              <Input
                placeholder="Frequency"
                value={medication.frequency}
                onChange={(e) =>
                  handleInputChange(index, "frequency", e.target.value)
                }
              />
            </Col>
            <Col span={4}>
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveMedication(index)}
              />
            </Col>
          </Row>
        ))}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};



// Inline Styles
const styles = {
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
  input: {
    width: "100%",
  },
};

export default MedicationForm;

