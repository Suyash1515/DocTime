import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import { DoctorContext } from "./context/DoctorContext";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";


const App = () => {
  const { aToken } = useContext(AdminContext);
  const {dToken}=useContext(DoctorContext)

  return (
    <>
      <ToastContainer />
      {aToken  || dToken ? (
        <div className="bg-[#F8F9FD]">
          <Navbar />
          <div className="flex items-start">
            <Sidebar />
            <Routes>
              {/*Admin Route*/}
              <Route path="/" element={<></>}></Route>
              <Route path="/admin-dashboard" element={<Dashboard></Dashboard>}></Route>
              <Route path="/all-appointments" element={<AllAppointments></AllAppointments>}></Route>
              <Route path="/add-doctor" element={<AddDoctor></AddDoctor>}></Route>
              <Route path="/doctor-list" element={<DoctorsList></DoctorsList>}></Route>

              {/*Doctor Route*/}
              <Route path="/doctor-appointments" element={<DoctorAppointments></DoctorAppointments>}></Route>
              <Route path="/doctor-dashboard" element={<DoctorDashboard></DoctorDashboard>}></Route>
              <Route path="/doctor-profile" element={<DoctorProfile></DoctorProfile>}></Route>
            </Routes>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
