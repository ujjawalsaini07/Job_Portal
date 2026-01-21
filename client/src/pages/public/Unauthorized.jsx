import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Unauthorized() {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/'); // or '/' depending on your home route

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 px-4">
      <div className="flex w-full max-w-md flex-col items-center text-center">
        
        {/* Icon Container */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-red-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        {/* Text Content */}
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Access Denied</h1>
        <p className="mb-8 text-gray-500">
          Sorry, you don't have permission to access this page. If you believe this is an error, please contact your administrator.
        </p>

        {/* Action Buttons */}
        <div className="flex w-full flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            onClick={goBack}
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            Go Back
          </button>
          <button
            onClick={goHome}
            className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Go to Home
          </button>
        </div>
        
      </div>
    </div>
  );
}