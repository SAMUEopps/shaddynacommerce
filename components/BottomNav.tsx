// components/BottomNavigationBar.tsx
"use client"
import React, { useState } from 'react';
import { FaHeart, FaSearch, FaStore, FaQuestionCircle } from 'react-icons/fa';

const BottomNavigationBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('wishlist'); // Initialize active link as 'wishlist'

  // Function to set the active link when clicked
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  // Define the active style with the color #ff199c
  const activeStyle = 'text-[#182155]';
  const inactiveStyle = 'text-[#182155]';

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="flex justify-around items-center py-2">
        <a
          href="/wishlist"
          className={`flex flex-col items-center ${activeLink === 'wishlist' ? activeStyle : inactiveStyle}`}
          onClick={() => handleLinkClick('wishlist')}
        >
          <FaHeart className="text-2xl mb-1" />
          <span>Wishlist</span>
        </a>
        <a
          href="/search"
          className={`flex flex-col items-center ${activeLink === 'search' ? activeStyle : inactiveStyle}`}
          onClick={() => handleLinkClick('search')}
        >
          <FaSearch className="text-2xl mb-1" />
          <span>Search</span>
        </a>
        <a
          href="/shop"
          className={`flex flex-col items-center ${activeLink === 'shop' ? activeStyle : inactiveStyle}`}
          onClick={() => handleLinkClick('shop')}
        >
          <FaStore className="text-2xl mb-1" />
          <span>Shop</span>
        </a>
        <a
          href="/help"
          className={`flex flex-col items-center ${activeLink === 'help' ? activeStyle : inactiveStyle}`}
          onClick={() => handleLinkClick('help')}
        >
          <FaQuestionCircle className="text-2xl mb-1" />
          <span>Help</span>
        </a>
      </div>
    </div>
  );
};

export default BottomNavigationBar;

