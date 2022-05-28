import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BloodBank from './pages/BloodBank/BloodBank';
import Donor from './pages/Donor/Donor';
import Hospital from './pages/Hospital/Hospital';
import LandingPage from './pages/LandingPage';
import LoginDonor from './pages/Auth/LoginDonor';
import Login

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/donor' element={<Donor />} />
        <Route path='/bloodbank' element={<BloodBank />} />
        <Route path='/hospital' element={<Hospital />} />

        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='/login/donor' element={<LoginDonor user={'donor'} />} />
        <Route
          path='/login/bloodbank'
          element={<LoginBloodBank user={'bloodbank'} />}
        />
        <Route
          path='/login/hospital'
          element={<LoginHospital user={'donor'} />}
        />
        <Route path='/signup/donor' element={<SignupDonor user={'donor'} />} />
        <Route
          path='/signup/bloodbank'
          element={<SignupBloodBank user={'bloodbank'} />}
        />
        <Route
          path='/signup/hospital'
          element={<SignupHospital user={'hospital'} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
