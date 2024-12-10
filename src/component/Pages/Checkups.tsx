import { Form, Input, DatePicker, Button, Typography, Space } from "antd";

const { Title } = Typography;

const CheckUpDetails: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Data Submitted:", values);
  };

  return (
    <div style={containerStyle}>
      <Title level={3} style={headerStyle}>
        Check-Up Details
      </Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={formStyle}
      >
        <Form.Item
          label="Date Visited"
          name="dateVisited"
          rules={[{ required: true, message: "Please select the visit date!" }]}
        >
          <DatePicker style={inputStyle} />
        </Form.Item>
        <Form.Item
          label="Reason of Visit"
          name="reasonOfVisit"
          rules={[{ required: true, message: "Please enter the reason for the visit!" }]}
        >
          <Input.TextArea rows={4} style={textareaStyle} />
        </Form.Item>
        <Form.Item
          label="Next Follow-up Date"
          name="nextFollowUpDate"
          rules={[{ required: true, message: "Please select the follow-up date!" }]}
        >
          <DatePicker style={inputStyle} />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#f3f7fa",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "20px",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
};

export default CheckUpDetails;
