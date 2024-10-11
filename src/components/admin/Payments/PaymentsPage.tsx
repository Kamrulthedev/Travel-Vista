"use client"

import { FaDownload, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const PaymentsPage = () => {
  const [payments] = useState([
    { id: 1, user: 'John Doe', amount: '$150', date: '2024-09-01' },
    { id: 2, user: 'Jane Smith', amount: '$200', date: '2024-09-02' },
    { id: 3, user: 'Michael Scott', amount: '$300', date: '2024-09-03' },
  ]);

  const paymentData = [1200, 1900, 3000, 2500, 2700, 3200]; // Example data
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']; // X-axis labels

  return (
    <div className="p-6 font-serif">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Payments Overview</h1>

      {/* Payment Graph (Simple Custom Chart) */}
      <div className="bg-white p-6 shadow-lg rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-2">Monthly Payments</h2>
        <div className="flex justify-between items-end h-40 md:h-56">
          {paymentData.map((value, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-blue-500 w-4 md:w-6 rounded-t-md"
                style={{ height: `${(value / 3500) * 100}%` }} // Scaling bar height
              ></div>
              <span className="mt-2 text-sm">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div className="flex w-full md:w-auto mb-4 md:mb-0 space-x-4">
          <input
            type="text"
            placeholder="Search by user..."
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <FaSearch />
            <span>Search</span>
          </button>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <FaDownload />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Recent Payments List */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Payments</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2">User</th>
                <th className="px-4 py-2 border-b-2">Amount</th>
                <th className="px-4 py-2 border-b-2">Date</th>
                <th className="px-4 py-2 border-b-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-2 border-b">{payment.user}</td>
                  <td className="px-4 py-2 border-b">{payment.amount}</td>
                  <td className="px-4 py-2 border-b">{payment.date}</td>
                  <td className="px-4 py-2 border-b">
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;

