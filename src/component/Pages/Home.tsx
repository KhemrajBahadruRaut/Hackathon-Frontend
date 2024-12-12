import { SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Layout, Row, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

const HomePage = () => {
    const navigate = useNavigate();
    const openLoginPage = () => {
         window.open(
          "/nid-login.html",
          "National Identification Login Page",
          "width=600,height=800"
        );
    
        // Listen for a message from the popup window
        window.addEventListener("message", (event) => {
          if (event.origin !== window.location.origin) {
            // Make sure the message comes from the same origin
            return;
          }
          if (event.data.value) {
           localStorage.setItem( "NID", event.data.value);
  navigate ("/self-information");
          }
        });
      };
  return (
    <Layout>
      <Header style={{ padding: '0 50px' }}>
        <div className="logo" />
        <Space direction="horizontal" size="large">
    
        </Space>
      </Header>
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Welcome to dotConnection" bordered={false}>
                <Paragraph>
                  Your Centralized Medical Information Repository
                </Paragraph>
                <Space direction="vertical">
                  <Button type="primary" onClick={openLoginPage}>
                    Patient Login <UserOutlined />
                  </Button>
                  <Button type="primary" href="/agency-login">
                    Agency Login <SafetyCertificateOutlined />
                  </Button>
                </Space>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Why Choose dotConnection?" bordered={false}>
                <Paragraph>
                  <Text strong>Security:</Text> Your data is our priority.
                </Paragraph>
                <Paragraph>
                  <Text strong>Accessibility:</Text> Access your records anytime, anywhere.
                </Paragraph>
                <Paragraph>
                  <Text strong>Efficiency:</Text> Streamlined processes for faster access.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>dotConnect ©2024</Footer>
    </Layout>
  );
};

export default HomePage;