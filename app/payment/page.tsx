// pages/payment.tsx
"use client";
import { useState } from 'react';
import { NextPage } from 'next';
import Footer from '@/components/Footer';
import HeadNavigation from '@/components/HeadNavigation';
import { useRouter } from 'next/navigation'
import BottomNavigationBar from '@/components/BottomNav';


const PaymentPage: NextPage = () => {
  const [formData, setFormData] = useState({
    mpesaCode: '',
    name: '',
    amount: '',
    phoneNumber: '',
    email: '',
  });
  const router = useRouter();
  const handleClick = () => {
    // Navigate to the Delivery Page
    router.push('/processing');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Implement your payment logic here (e.g., API calls)
  };

  return (
    <div>
       <HeadNavigation /> 
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl border border-[#182155]">
        <h1 className="text-3xl text-center font-semibold text-[#182155] mb-6">Become a Seller</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* M-Pesa Code */}
          <div className="flex flex-col">
            <label htmlFor="mpesaCode" className="text-[#182155] font-medium">M-Pesa Code</label>
            <input
              type="text"
              name="mpesaCode"
              id="mpesaCode"
              value={formData.mpesaCode}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border-2 border-[#ff199c] focus:outline-none focus:ring-2 focus:ring-[#ff199c]"
              required
            />
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[#182155] font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border-2 border-[#ff199c] focus:outline-none focus:ring-2 focus:ring-[#ff199c]"
              required
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-[#182155] font-medium">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border-2 border-[#ff199c] focus:outline-none focus:ring-2 focus:ring-[#ff199c]"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-[#182155] font-medium">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border-2 border-[#ff199c] focus:outline-none focus:ring-2 focus:ring-[#ff199c]"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#182155] font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 rounded-lg border-2 border-[#ff199c] focus:outline-none focus:ring-2 focus:ring-[#ff199c]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-[#182155] text-white font-semibold rounded-lg hover:bg-[#e0157f] transition duration-300"
              onClick={handleClick}
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    <BottomNavigationBar />
    </div>
  );
};

export default PaymentPage;
