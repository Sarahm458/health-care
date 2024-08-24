import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const data = [
    { name: 'Jan', Patients: 30 },
    { name: 'Feb', Patients: 20 },
    { name: 'Mar', Patients: 32 },
    { name: 'Apr', Patients: 28 },
    { name: 'May', Patients: 25 },
    { name: 'Jun', Patients: 23 },
    { name: 'Jul', Patients: 15 },
    { name: 'Aug', Patients: 14 },
  ];

  return (
    <div className="flex justify-center items-center m-8">
      <div className="p-1 bg-gradient-to-r from-blue-700 to-[#f70070] rounded-lg">
        <div className="p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Healthcare Metrics</h2>
          <div className="w-full lg:w-[600px] md:w-[500px] h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Patients" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
