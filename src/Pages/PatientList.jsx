import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    try {
      const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      const patientNames = storedAppointments.map(appointment => appointment.patientName);
      setPatients([...new Set(patientNames)]); 
    } catch (error) {
      console.error('Error fetching appointments from local storage:', error);
    }
  }, []);

  if (patients.length === 0) {
    return <div className="font-bold text-center mb-[20rem] mt-8">No Patients Yet</div>;
  }


  return (
    <div className="p-4 bg-white rounded-lg shadow-lg mb-[20rem]">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Patient List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index} className="mb-2">
            <Link to={`/patient/${patient}`} className="text-blue-500 hover:underline">{patient}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
