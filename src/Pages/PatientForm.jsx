import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AppointmentForm from './AppointmentForm';

const validationSchema = Yup.object({
  patientName: Yup.string().required('Required'),
  age: Yup.number().required('Required').min(0, 'Age must be a positive number'),
  medicalHistory: Yup.string().required('Required'),
  billingInfo: Yup.string().required('Required'),
  appointmentHistory: Yup.string().required('Required'),
});

const PatientForm = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const newPatients = [...patients, values];
    setPatients(newPatients);
    localStorage.setItem('patients', JSON.stringify(newPatients));
    resetForm();
  };

  return (
    <div className="flex flex-col lg:flex-row mt-4 mx-11">

      <Formik
        initialValues={{ patientName: '', age: '', medicalHistory: '', billingInfo: '', appointmentHistory: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="p-4 max-w-lg mx-auto rounded-lg shadow-lg mb-8 lg:w-[24rem] md:w-[20rem] bg-gray-50">
          <div className="mb-4">
            <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
            <Field name="patientName" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
            <ErrorMessage name="patientName" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <Field name="age" type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
            <ErrorMessage name="age" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700">Medical History</label>
            <Field name="medicalHistory" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
            <ErrorMessage name="medicalHistory" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="appointmentHistory" className="block text-sm font-medium text-gray-700">Appointment History</label>
            <Field name="appointmentHistory" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
            <ErrorMessage name="appointmentHistory" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="billingInfo" className="block text-sm font-medium text-gray-700">Billing Information</label>
            <Field name="billingInfo" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
            <ErrorMessage name="billingInfo" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          <button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
        </Form>
      </Formik>
      <AppointmentForm />
    </div>
  );
};

export default PatientForm;
