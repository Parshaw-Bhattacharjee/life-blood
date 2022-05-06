import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Donor from "./pages/Donor";
import BloodBank from "./pages/BloodBank";
import Hospital from "./pages/Hospital";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/blood_bank" element={<BloodBank />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login">
          <Route path="donor" element={<Login user={"donor"} />} />
          <Route path="hospital" element={<Login user={"donor"} />} />
          <Route path="blood_bank" element={<Login user={"blood_bank"} />} />
        </Route>
        <Route path="/signup">
          <Route path="donor" element={<Signup user={"donor"} />} />
          <Route path="hospital" element={<Signup user={"donor"} />} />
          <Route path="blood_bank" element={<Signup user={"blood_bank"} />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
