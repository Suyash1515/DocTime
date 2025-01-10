import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/doctors" element={<Doctors></Doctors>} />
        <Route path="/doctors/:speciality" element={<Doctors></Doctors>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/my-profile" element={<MyProfile></MyProfile>} />
        <Route
          path="/my-appointments"
          element={<MyAppointments></MyAppointments>}
        />
        <Route
          path="/appointment/:docId"
          element={<Appointment></Appointment>}
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
