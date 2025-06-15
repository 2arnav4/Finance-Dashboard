function StatsBlock({ title, amount, change, bgColor }) {
    return (
      <div className={`rounded-xl p-4 text-white shadow-md ${bgColor} transition transform hover:scale-105`}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-3xl font-bold mt-2">₹{amount}</p>
        <p className="mt-1 text-sm">{change}</p>
      </div>
    );
  }
  
  export default StatsBlock;
  