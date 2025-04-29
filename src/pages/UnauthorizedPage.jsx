import React from "react";

const UnauthorizedPage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-500 mb-4">403</h1>
        <h2 className="text-xl font-semibold mb-2">Unauthorized Access</h2>
        <p className="text-gray-600 mb-6">
          You do not have permission to view this page.
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
