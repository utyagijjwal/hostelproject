import React, { useState } from "react";
import hostelImage from "../Assests/R.jpg"; // Adjust path if necessary

const Detail = () => {
  // State for handling the electricity bill calculation
  const [appliance, setAppliance] = useState("cooler");
  const [hoursUsed, setHoursUsed] = useState(0);
  const [electricityBill, setElectricityBill] = useState(null);

  // Rates for cooler and AC (per hour)
  const coolerRate = 5; // example cost per hour for a cooler
  const acRate = 10; // example cost per hour for an AC

  const handleCalculateBill = () => {
    const rate = appliance === "cooler" ? coolerRate : acRate;
    const annualBill = rate * hoursUsed * 365; // Annual cost based on hours per day
    setElectricityBill(annualBill);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative py-12"
      style={{ backgroundImage: `url(${hostelImage})` }}
    >
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-red-600 p-4 shadow-lg">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center">
            Hostel Accommodation Details
          </h1>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-12">
          <ul className="space-y-6 text-lg">
            <li className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Number of Rooms:</span>
              <span>200</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Hostel Fees:</span>
              <span>₹30,000 per year</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Mess Fees:</span>
              <span>₹21,000 per year</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Number of Lifts:</span>
              <span>2</span>
            </li>
            <li className="flex justify-between border-b pb-4">
              <span className="font-semibold text-gray-700">Room Types & Fees:</span>
              <div className="text-right">
                <p>Two-Seater: ₹60,000 per year</p>
                <p>Four-Seater: ₹45,000 per year</p>
              </div>
            </li>
          </ul>

          {/* Electricity Bill Calculation Section */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-6">Electricity Bill Calculation</h2>
            <div className="space-y-4">
              {/* Appliance Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-700">Appliance Type:</label>
                <select
                  value={appliance}
                  onChange={(e) => setAppliance(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                >
                  <option value="cooler">Cooler</option>
                  <option value="ac">Air Conditioner</option>
                </select>
              </div>

              {/* Hours Used Per Day */}
              <div>
                <label className="block text-lg font-semibold text-gray-700">Hours Used Per Day:</label>
                <input
                  type="number"
                  value={hoursUsed}
                  onChange={(e) => setHoursUsed(e.target.value)}
                  className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter hours per day"
                />
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculateBill}
                className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
              >
                Calculate Electricity Bill
              </button>

              {/* Display Electricity Bill */}
              {electricityBill !== null && (
                <div className="mt-6 text-xl font-semibold text-gray-700">
                  Estimated Annual Electricity Bill: ₹{electricityBill}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
            >
              Contact for Admission
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
