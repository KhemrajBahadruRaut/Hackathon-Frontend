import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./component/Login";
import Dashboard from "./component/Dashboard";
import AddPatient from "./component/Pages/AddPatient";
import HospitalRegistrationForm from "./component/Pages/RegistrationForm";
import MedicationForm from "./component/Pages/MedicationForm";
import CheckUpDetails from "./component/Pages/Checkups";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addpatient" element={<AddPatient />}></Route>
        <Route path="/register" element={<HospitalRegistrationForm/>}></Route>
        <Route path="/mdetails" element={<MedicationForm/>}></Route>
        <Route path="/cdetails" element={<CheckUpDetails/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
