import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PatientPortal = () => {
  const { patient } = useParams();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    console.log('Stored Patients:', storedPatients);
    console.log('Stored Appointments:', storedAppointments);
    console.log('Patient Name:', patient);
    
    const patientInfo = storedPatients.find(p => p.patientName === patient);
    const patientAppointments = storedAppointments.filter(appointment => appointment.patientName === patient);

    if (patientInfo) {
      setPatientData({
        ...patientInfo,
        appointments: patientAppointments,
      });
    }
  }, [patient]);

  if (!patientData) {

    return <div className="font-bold text-center mb-[20rem] mt-8">No Patients Yet</div>;
  }

  return (
    <div className="flex justify-center items-center my-8 w-full">
      <div className="p-1 bg-gradient-to-r from-blue-700 to-[#f70070] rounded-lg">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Patient Portal</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Name</h3>
            <p>{patientData.patientName}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Age</h3>
            <p>{patientData.age}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Medical History</h3>
            <p>{patientData.medicalHistory}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Appointment History</h3>
            <p>{patientData.appointmentHistory}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Upcoming Appointments</h3>
            <ul>
              {patientData.appointments
                .filter(appointment => new Date(appointment.date) > new Date())
                .map((appointment, index) => (
                  <li key={index}>{appointment.date} at {appointment.time}</li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Billing Information</h3>
            <p>{patientData.billingInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default PatientPortal;
