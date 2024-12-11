import React from "react";
import { Form, Input, DatePicker, Button, Typography, message } from "antd";
import { CheckUpInformationControllerService, CheckUpInformationDto } from "../../services/openapi";
import { useParams } from "react-router-dom";

const { Title } = Typography;

const Checkups: React.FC = () => {
  const [form] = Form.useForm();
  let { patientId } = useParams();

  const handleSubmit = async (values: CheckUpInformationDto) => {
    console.log("checkUp Data:", values);
    try{
      values.patientId=patientId!;
      await CheckUpInformationControllerService.save3(values);
      message.success("CheckUp data saved successfully");
        form.resetFields();
      
    }
    catch{
      message.error("error while saving checkup information")
    }
  };

  return (
    <div style={styles.container}>
      <Title level={3} style={styles.title}>
        Check-Up Details
      </Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={styles.form}
      >
        {/* Date Visited Field */}
        <Form.Item
          label="Date Visited"
          name="dateVisited"
          rules={[{ required: true, message: "Please select the visit date!" }]}
        >
          <DatePicker style={styles.input} />
        </Form.Item>

        {/* Reason of Visit Field */}
        <Form.Item
          label="Reason of Visit"
          name="reasonOfVisit"
          rules={[
            {
              required: true,
              message: "Please enter the reason for the visit!",
            },
          ]}
        >
          <Input
            placeholder="Enter the REASON fo visit "
            style={styles.input}
          />
        </Form.Item>

        {/* Next Follow-up Date Field */}
        <Form.Item
          label="Next Follow-up Date"
          name="nextFollowUpDate"
          rules={[
            { required: true, message: "Please select the follow-up date!" },
          ]}
        >
          <DatePicker style={styles.input} />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.saveButton}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
// Styles
const styles = {
  container: {
    // maxWidth: "500px",
    width: "50%",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
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
  textarea: {
    width: "100%",
    borderRadius: "8px",
  },

  saveButton: {
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default CheckUpDetails;
