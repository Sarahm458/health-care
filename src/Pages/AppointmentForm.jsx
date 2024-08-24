import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  patientName: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  time: Yup.string().required('Required'),
});

const AppointmentForm = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleSubmit = (values, { resetForm }) => {
    const newAppointments = [...appointments, values];
    setAppointments(newAppointments);
    localStorage.setItem('appointments', JSON.stringify(newAppointments));
    resetForm();
  };

  return (
    <Formik
    initialValues={{ patientName: '', date: '', time: '' }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  >
    <Form className="p-4  max-w-lg mx-auto rounded-lg shadow-lg mb-8 lg:w-[24rem] md:w-[20rem] bg-gray-50">
      <div className="mb-4">
      <label className="block text-sm font-bold text-gray-800 pb-4">Appointment Registration:</label>
        <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
        <Field name="patientName" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
        <ErrorMessage name="patientName" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <Field name="date" type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
        <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
        <Field name="time" type="time" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
        <ErrorMessage name="time" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
    </Form>
  </Formik>
  );
};

export default AppointmentForm;
