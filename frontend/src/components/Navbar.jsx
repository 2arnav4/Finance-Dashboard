import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4 text-white mx-auto mt-7 shadow-md rounded-2xl max-w-6xl">
      <div className="flex justify-between items-center">
        
        {/* LEFT SIDE - Logo */}
        <div className="text-xl font-semibold">
          Finance Dashboard
        </div>
        
        {/* RIGHT SIDE - Menu Items */}
        <div className="flex space-x-6 text-base">
          <div className="hover:text-blue-200 cursor-pointer">Home</div>
          <div className="hover:text-blue-200 cursor-pointer">About</div>
          <div className="hover:text-blue-200 cursor-pointer">Services</div>
          <div className="hover:text-blue-200 cursor-pointer">Reports</div>
          <div className="hover:text-blue-200 cursor-pointer">Contact</div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;