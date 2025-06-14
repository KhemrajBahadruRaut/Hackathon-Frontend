import { Layout, Button } from "antd";
import { LogoutOutlined, RollbackOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import AppFooter from "./AppFooter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
const Navbar: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const navigate = useNavigate();
    const[hospitalName,setHospitalName]=useState()

    const logout=()=>{
      localStorage.removeItem("authtoken")
      navigate('/');
    };
    const  back=()=>{
      navigate('/dashboard');
    };
    useEffect(() => {
      const token = localStorage.getItem('authtoken'); // Replace with your token storage method
  
      if (token) {
        const decodedToken = jwtDecode(token) as any ;
        setHospitalName(decodedToken.name);
      }
    }, []);
  return (
    <>
      <Layout style={{ height: "100vh", background: "#f0f2f5" }}>
        <Header
          style={{
            background: "#001529",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <text style={{ color: "#fff", fontSize: "20px" }}>
            dotConnect Medical History Repository
          </text>
          <div>
            <Button
              onClick={logout}
              type="link"
              icon={<LogoutOutlined />}
              style={{ color: "#fff" }}
            >
              Logout
            </Button>
            <Button
              onClick={back}
              type="link"
              icon={<RollbackOutlined />}
              style={{ color: "#fff" }}
            >
              back
            </Button>
            <span style={{ paddingTop: "4px" }}>({hospitalName})</span>
          </div>
        </Header>
        <div>{children}</div>
        <AppFooter></AppFooter>
      </Layout>
    </>
  );
};

export default Navbar;

