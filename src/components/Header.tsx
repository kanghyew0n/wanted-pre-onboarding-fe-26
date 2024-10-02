import React from "react";

interface HeaderProps {
  totalPrice: number;
}

const Header: React.FC<HeaderProps> = ({ totalPrice }) => {
  return (
    <header className="w-full fixed top-0 flex justify-between items-center px-8 py-4 mb-20 bg-white/50 backdrop-blur-xl">
      <h1 className="font-bold text-2xl">challenge!</h1>
      <h1 className="font-bold text-2xl">
        {totalPrice ? `$${totalPrice}` : "total price..."}
      </h1>
    </header>
  );
};

export default Header;
