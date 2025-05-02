// // pages/error.js
// export default function ErrorPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
//         <div>
//             {/* <img src="https://www.qwebcare.com/help/images/hp-logo.gif"></img> */}
//         </div>
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '600px' }}>
//         {/* Blue Triangle */}
//         <div className="absolute bottom-0 left-0 w-full h-24 bg-blue-600" 
//              style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>



//         {/* Content */}
//         <div className="p-10">
//           <h1 className="text-2xl font-semibold mb-4">Installing</h1>
//           <p className="text-gray-500 mb-6">Fatal error occurred during installation..</p>
//           <div className="flex justify-center mb-6">
//             <img
//               src="https://d1nhio0ox7pgb.cloudfront.net/_img/v_collection_png/512x512/shadow/printer_error.png" // Replace this with the actual path to the printer error image
//               alt="Printer Error"
//               width={150}
//               height={150}
//             />
//           </div>
//           <p className="text-gray-600 mb-4">
//           A problem occurred while preparing to install software to your system.please restart you computer,and run this installer again.if the problem persists,
       
//           </p>
//           <p className="text-gray-600 mb-4">
//             Please don't try to setup again 
//           </p>
//           <p className="font-semibold">Please Contact HP Support for</p>
//           <a href="#" className="text-blue-600 font-bold text-xl mt-4 inline-block">Through Chat</a>
//         </div>

//         {/* Footer */}
//         <div className="bg-white p-6 flex justify-center items-center">
//           <img
//             src="https://www.qwebcare.com/help/images/hp-logo.gif" // Replace this with the actual path to the HP logo
//             alt="HP Logo"
//             width={50}
//             height={50}
//           />
//           <span className="ml-4 text-blue-600 text-lg">24x7 HP Assistance</span>
//         </div>
//       </div>
//     </div>
//   );
// }




// pages/error.js
// 


import Image from "next/image";
// import JivoChat from "@/app/Jivochat";
export default function ErrorPage() {
      return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl relative" style={{ minHeight: '529px' }}>
      {/* Blue Triangle */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-[#0d2ea0]"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div> */}



      {/* Content */}
      <div className="">
      <div className="bg-gray-100 px-6 py-4 flex justify-between items-center h-[79px]">
        <div className="text-left">
          {/* <h1 className="text-lg font-semibold">Installing</h1> */}
          <p className="text-gray-600 text-md">Printer Setup Installation is Failed..</p>
        </div>
        <img
          src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/7/AmazonStores/ATVPDKIKX0DER/e81e9881d82935f4565fd9d398475f45.w3000.h3000._RO1499,1,0,0,0,0,0,0,0,0,15_FMpng_.png" className="h-[67px] w-[67px]"
          alt="HP Logo"
        />
      </div>
        <div className="flex justify-center mb-6 mt-[40px] mb-[40px]">
          <img
            src="https://www.iconexperience.com/_img/v_collection_png/256x256/shadow/printer_error.png" // Replace this with the actual path to the printer error image
            alt="Printer Error"
            width={150}
            height={150}
          />
        </div>
        <p className="text-gray-800 mb-4 text-center">
          Fatal Error occurred Code:C0000022 during the software installation setup.
          <br />
          Please Contact Support before attempting to install it again.
        </p>
        <p className="font-bold text-center text-xl mb-2">PLEASE CONTACT FOR BROTHER PRINTER SUPPORT</p>
        <p className="text-center text-[#0d2ea0] font-bold text-xl">THROUGH LIVE CHAT</p>
      </div>
      <div className="relative mt-8">
        {/* Blue Triangle Background */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-[#0d2ea0]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
        
    
        <div className="relative flex items-center text-white p-4 ml-4">
        <img
          src="https://play-lh.googleusercontent.com/peHZUx1L2ed2Wr6lcpLjbOO7sZmGUQc-ZbesVlWeFe8KwABapv3Fz4YME8b4CYY_FBE=w600-h300-pc0xffffff-pd"
          height={49}
          width={106}
          alt="HP Logo"
        />
          <span className="text-lg font-semibold">24x7 BROTHER Assistance</span>
        </div>
      </div>

      
    </div>
  </div>
        </>
      );
    };