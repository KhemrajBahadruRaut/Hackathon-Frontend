import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Login";
import Dashboard from "./component/Dashboard";
import AddPatient from "./component/Pages/AddPatient";
import HospitalRegistrationForm from "./component/Pages/RegistrationForm";
import CheckUpDetails from "./component/Pages/Checkups";
import DiagnosisForm from "./component/Pages/DiagnosisForm";
import MedicineForm from "./component/Pages/MedicationForm";
import AboutUs from "./component/Pages/AboutUs";
import Home from "./component/Pages/Home";
import SelfInformation from "./component/SelfInformation";
// import MedicationForm from "./component/Pages/MedicationDemo";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>


        {/*  FOR DEMO OF MEDICATION TO ADD MULTIPLE MEDICATION
        
        <Route path="/mdetails" element={<MedicationForm/>}></Route>

        */}

        <Route path="/agency-login" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addpatient" element={<AddPatient />}></Route>
        <Route path="/register" element={<HospitalRegistrationForm/>}></Route>
        <Route path="/cdetails/:patientId" element={<CheckUpDetails/>}></Route>
        <Route path="/mdetails/:patientId" element={<MedicineForm/>}></Route>
        <Route path="/diagnosis/:patientId" element={<DiagnosisForm/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/self-information" element={<SelfInformation/>}></Route>


      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
