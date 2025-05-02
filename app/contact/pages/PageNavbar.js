import Image from "next/image";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function PageNavbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      {/* Left - Logo & Nav */}
      <div className="flex items-center space-x-10">
        <Image src="/hplogo.png" alt="HP Logo" width={60} height={60} />
        <div className="flex space-x-6 text-gray-700 font-medium text-lg">
          <a href="#" className="hover:text-black">Explore</a>
          <a href="#" className="hover:text-black">Shop</a>
          <a href="#" className="hover:text-black">Support</a>
        </div>
      </div>

      {/* Center - Search */}
      <div className="flex items-center w-[400px] border border-gray-300 rounded px-4 py-1">
        <input
          type="text"
          placeholder="Search HP Support"
          className="w-full outline-none text-gray-700"
        />
        <FaSearch className="text-gray-500" />
      </div>

      {/* Right - Cart and Sign in */}
      <div className="flex items-center space-x-4">
        <FaShoppingCart className="text-gray-700 text-xl" />
        <button className="bg-black text-white px-4 py-1 font-medium">
          Sign in
        </button>
      </div>
    </nav>
  );
}