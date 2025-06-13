// 'use client';

// import Link from 'next/link';
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className="text-white py-20 bg-black h-[400px] pt-[14px]">
//             <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
//                 <div className="flex">
//                     <div className="font-bold text-center">
//                         <h1 className="text-[32px] mt-[89px]">  Micro Hub Care</h1>
//                     </div>
//                 </div>

//                 <div>
//                     <p>Let us help</p>
//                     <div className="flex flex-col text-start mb-4 md:mb-0">
//                         {[
//                             { name: 'Home', path: '/' },
//                             { name: 'About us', path: '/about' },
//                             { name: 'Contact us', path: '/contact' },
//                             { name: 'Services', path: '/' },
//                             { name: 'Disclaimer', path: '/Disclaimer' }
//                         ].map(({ name, path }) => (
//                             <Link
//                                 key={name}
//                                 href={path}
//                                 className="block md:inline-block py-2 hover:text-gray-500"
//                             >
//                                 {name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>

//                 <div>
//                     <div className="flex flex-col text-start mb-4 md:mb-0 text-[14px]">
//                         {[
//                             { name: 'Terms and Conditions', path: '/terms&condition' },
//                             { name: 'Privacy Policy', path: '/policy' },
//                             { name: 'License Agreement', path: '/license-agreement' },
//                             { name: 'Copyright Information', path: '/copyright-information' },
//                             { name: 'Cookies Policy', path: '/cookies-policy' }
//                         ].map(({ name, path }) => (
//                             <Link
//                                 key={name}
//                                 href={path}
//                                 className="block md:inline-block py-2 hover:text-gray-500"
//                             >
//                                 {name}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="flex flex-col">
//                     <p>SOCIAL MEDIA</p>
//                     <div className="flex mt-4 gap-3">
//                         {[
//                             { icon: FaFacebook, bgColor: 'bg-blue-600', link: '#' },
//                             { icon: FaInstagram, bgColor: 'bg-pink-600', link: '#' },
//                             { icon: FaTwitter, bgColor: 'bg-blue-600', link: '#' },
//                             { icon: FaYoutube, bgColor: 'bg-red-600', link: '#' }
//                         ].map(({ icon: Icon, bgColor, link }, index) => (
//                             <a
//                                 key={index}
//                                 href={link}
//                                 className={`${bgColor} p-1.5 rounded-sm text-white hover:text-gray-500 hover:scale-110`}
//                             >
//                                 <Icon size={18} />
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center py-10 mt-[-103px]">
//                 <span className="text-gray-400 leading-10">© Copyright, All Rights Reserved by Micro Hub Care </span>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand Name */}
          <div className="text-white font-bold">Micro Hub Care</div>

          {/* Quick Links - Single Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/" className="hover:text-white transition-colors">Services</Link>
            <Link href="/Disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/terms&condition" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="/policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Copyright - Tiny Text */}
        <div className="mt-4 pt-3 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Micro Hub Care. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

