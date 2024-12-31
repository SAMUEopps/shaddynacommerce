import BottomNavigationBar from "@/components/BottomNav";
import Footer from "@/components/Footer";
import HeadNavigation from "@/components/HeadNavigation";
import React from "react";
import {
  FaChartPie,
  FaUser,
  FaBox,
  FaShoppingCart,
  FaMoneyBill,
  FaComments,
  FaTruck,
  FaBullhorn,
  FaChartLine,
  FaBalanceScale,
  FaUsers,
  FaShieldAlt,
  FaCogs,
  FaClipboardList,
} from "react-icons/fa";

const AdminPage: React.FC = () => {
  const buttons = [
    { name: "Admin Dashboard", icon: <FaChartPie />, color: "bg-blue-500" },
    { name: "User Management", icon: <FaUser />, color: "bg-purple-500" },
    { name: "Product Management", icon: <FaBox />, color: "bg-green-500" },
    { name: "Category Management", icon: <FaChartLine />, color: "bg-teal-500" },
    { name: "Order and Transaction Management", icon: <FaShoppingCart />, color: "bg-yellow-500" },
    { name: "Payment and Payout Management", icon: <FaMoneyBill />, color: "bg-red-500" },
    { name: "Communication and Notifications", icon: <FaComments />, color: "bg-indigo-500" },
    { name: "Shipping and Delivery Management", icon: <FaTruck />, color: "bg-orange-500" },
    { name: "Marketing and Promotions", icon: <FaBullhorn />, color: "bg-pink-500" },
    { name: "Analytics and Reporting", icon: <FaChartLine />, color: "bg-teal-500" },
    { name: "Tax and Legal Compliance", icon: <FaBalanceScale />, color: "bg-gray-500" },
    { name: "Vendor Management", icon: <FaUsers />, color: "bg-amber-500" },
    { name: "Security and System Management", icon: <FaShieldAlt />, color: "bg-cyan-500" },
    { name: "Platform Maintenance and Updates", icon: <FaCogs />, color: "bg-lime-500" },
    { name: "User Feedback and Improvement", icon: <FaClipboardList />, color: "bg-rose-500" },
  ];

  return (
    <div>
      <HeadNavigation />
      <div className="min-h-screen bg-gray-100 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Management</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 text-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ${button.color}`}
            >
              <div className="text-4xl mb-4">{button.icon}</div>
              <p className="text-center text-lg font-semibold">{button.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <BottomNavigationBar />
    </div>
  );
};

export default AdminPage;
