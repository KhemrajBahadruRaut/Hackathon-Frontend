import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Login";
import Dashboard from "./component/Dashboard";
import AddPatient from "./component/Pages/AddPatient";
import HospitalRegistrationForm from "./component/Pages/RegistrationForm";
import CheckUpDetails from "./component/Pages/Checkups";
import Medication from "./component/Pages/MedicationForm";
import DiagnosisForm from "./component/Pages/DiagnosisForm";
import Navbar from "./component/Navbar";
import AboutUs from "./component/Pages/AboutUs";
// import MedicationForm from "./component/Pages/MedicationDemo";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>


        {/*  FOR DEMO OF MEDICATION TO ADD MULTIPLE MEDICATION
        
        <Route path="/mdetails" element={<MedicationForm/>}></Route>

        */}

        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addpatient" element={<AddPatient />}></Route>
        <Route path="/register" element={<HospitalRegistrationForm/>}></Route>
        <Route path="/cdetails" element={<CheckUpDetails/>}></Route>
        <Route path="/mdetails" element={<Medication/>}></Route>
        <Route path="/diagnosis" element={<DiagnosisForm/>}></Route>



      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
