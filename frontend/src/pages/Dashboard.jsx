import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-[#dfdfe8] rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#2d2d6a] p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Investments</h2>
          <p className="text-gray-300">Track your investments and returns here.</p>
        </div>
        <div className="bg-[#2d2d6a] p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Expenses</h2>
          <p className="text-gray-300">Monitor your spending and manage expenses.</p>
        </div>
        <div className="bg-[#2d2d6a] p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Earnings</h2>
          <p className="text-gray-300">View your income and salary details.</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>More features coming soon!</p>
      </div>
    </div>
  );
};

export default Dashboard;
