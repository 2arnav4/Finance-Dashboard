import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white flex flex-col justify-start items-center left-0 top-0 h-screen w-67 text-white shadow-lg">
      <div className =" flex flex-row items-center pt-8">
        <div className="rounded-full text-black bg-gray-300 w-10 h-10 mb-2"></div>
        <div className="text-lg font-semibold text-black ml-2">UserName</div>
      </div>
    </nav>
  );
};

export default Navbar;
