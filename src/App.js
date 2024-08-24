import './App.css';
import Dashboard from './Pages/Dashboard';
import PatientForm from "./Pages/PatientForm";
import PatientPortal from './Pages/PatientPortal';
import PatientList from './Pages/PatientList';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<NavBar/>}>
       <Route path="/" element={<Dashboard/>} />
       <Route path="/form" element={<PatientForm/>} />
       <Route path='/patients' element={<PatientList/>}/>
       <Route path="/patient/:patient" element={<PatientPortal />} />
      </Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

