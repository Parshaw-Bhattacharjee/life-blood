import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Donor from './pages/Donor/Donor';
import BloodBank from './pages/BloodBank/BloodBank';
import Hospital from './pages/Hospital/Hospital';
import LoginDonor from './pages/Auth/LoginDonor';
import LoginHospital from './pages/Auth/LoginHospital';
import LoginBloodBank from './pages/Auth/LoginBloodBank';
import SignupDonor from './pages/Auth/SignupDonor';
import SignupHospital from './pages/Auth/SignupHospital';
import SignupBloodBank from './pages/Auth/SignupBloodBank';
import About from './pages/About';
import Contact from './pages/Contact';
import { useAuth } from './contexts/auth-context';
import { PrivateRoute } from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user, userType } = useAuth();
  console.log(user, userType);
  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/donor'
          element={
            <PrivateRoute>
              <Donor />
            </PrivateRoute>
          }
        />
        <Route
          path='/bloodbank'
          element={
            <PrivateRoute>
              <BloodBank />
            </PrivateRoute>
          }
        />
        <Route
          path='/hospital'
          element={
            <PrivateRoute>
              <Hospital />
            </PrivateRoute>
          }
        />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
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
