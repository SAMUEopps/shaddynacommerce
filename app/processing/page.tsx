// pages/payment-processing.tsx

import BottomNavigationBar from '@/components/BottomNav';
import Footer from '@/components/Footer';
import HeadNavigation from '@/components/HeadNavigation';
import { NextPage } from 'next';

const PaymentProcessingPage: NextPage = () => {
  return (
    <div>
        <HeadNavigation /> 
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl border border-[#182155]">
        <h1 className="text-3xl text-center font-semibold text-[#182155] mb-6">Payment is Being Processed</h1>
        
        <div className="flex flex-col items-center space-y-6">
          <div className="w-16 h-16 border-4 border-t-4 border-[#ff199c] rounded-full animate-spin"></div>

          <p className="text-[#182155] text-lg text-center">
            Thank you for your payment! We are processing your transaction to complete your registration as a seller.
          </p>

          <p className="text-[#182155] text-md text-center">
            Please be patient while we verify and finalize your payment. This may take a few moments.
          </p>

          <div className="text-center">
            <p className="text-[#182155] font-medium">While you wait:</p>
            <ul className="list-disc list-inside text-[#182155]">
              <li>Ensure your payment information is correct.</li>
              <li>If you have any issues, contact our support team.</li>
              <li>We will notify you once the process is complete.</li>
            </ul>
          </div>

          <div className="flex justify-center mt-6">
            <button className="py-3 px-6 bg-[#ff199c] text-white font-semibold rounded-lg hover:bg-[#e0157f] transition duration-300">
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <BottomNavigationBar />
    </div>
  );
};

export default PaymentProcessingPage;
