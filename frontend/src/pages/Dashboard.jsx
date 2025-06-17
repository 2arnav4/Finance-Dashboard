import React from "react";
import StatsBlock from "../components/StatsBlock";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <div className="p-4">
        <h2 className="text-2xl font-semibold justify-center">
          {" "}
          Welcome to your dashboard
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <Link to="/investments">
          <StatsBlock
            title="Investments"
            amount="1,20,000"
            change="+5.2% this month"
            bgColor="bg-gradient-to-br from-[#4F28C7] to-[#210101]"
          />
        </Link>
        <Link to="/expenses">
          <StatsBlock
            title="Expenses"
            amount="45,000"
            change="-2.3% this month"
            bgColor="bg-red-500"
          />
        </Link>
        <Link to="/earnings">
          <StatsBlock
            title="Earnings"
            amount="80,000"
            change="+7.8% this month"
            bgColor="bg-green-500"
          />
        </Link>
        <Link to="/savings">
          <StatsBlock
            title="Savings"
            amount="30,000"
            change="+1.2% this month"
            bgColor="bg-yellow-500"
          />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
