import React from "react";
import { Form, Input, DatePicker, Button, Typography, message } from "antd";

const { Title } = Typography;

const DiagnosisForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Diagnosis Data:", values);
    message.success("Diagnosis details saved successfully!");
  };

  const handleFailedSubmit = (errorInfo: any) => {
    console.error("Validation Failed:", errorInfo);
    message.error("Please fill in all required fields!");
  };

  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>
        Diagnosis Form
      </Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        onFinishFailed={handleFailedSubmit}
        style={styles.form}
      >
        {/* Date Field */}
        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select the date!" }]}
        >
          <DatePicker style={styles.input} />
        </Form.Item>

        {/* Diagnosis Name Field */}
        <Form.Item
          label="Diagnosis Name"
          name="diagnosisName"
          rules={[{ required: true, message: "Please enter the diagnosis name!" }]}
        >
          <Input placeholder="Enter Diagnosis Name" style={styles.input} />
        </Form.Item>

        {/* Result Field */}
        <Form.Item
          label="Result"
          name="result"
          rules={[{ required: true, message: "Please enter the result!" }]}
        >
        <Input placeholder="Enter Diagnosis Result" style={styles.input} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.submitButton}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    // maxWidth: "500px",
    width: "50%",
    padding: "20px",
    borderRadius: "12px",
    margin: "50px auto",

    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center" as const,
    color: "#9c3af9",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
  },
};

export default DiagnosisForm;
