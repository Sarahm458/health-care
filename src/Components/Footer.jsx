import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-2 bg-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} Healthcare Management System. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2">
            <p className="text-blue-700 hover:text-blue-900">Privacy Policy</p>
            <p className="text-blue-700 hover:text-blue-900">Terms of Service</p>
            <p className="text-blue-700 hover:text-blue-900">Contact Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
