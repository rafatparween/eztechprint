import Image from 'next/image';

export default function BrotherPrinterSupport() {
  const supportItems = [
    { 
      name: "Printer Setup", 
      icon: "/brother1.png", // Consider using local images
      bgColor: "bg-blue-100"
    },
    { 
      name: "Printer Offline", 
      icon: "/brother2.png",
      bgColor: "bg-red-100"
    },
    { 
      name: "Wireless Setup", 
      icon: "/brother3.png",
      bgColor: "bg-green-100"
    },
    { 
      name: "Ink Issues", 
      icon: "/brother4.png",
      bgColor: "bg-purple-100"
    },
    { 
      name: "Scanner Help", 
      icon: "/brother5.png",
      bgColor: "bg-yellow-100"
    },
    { 
      name: "Fax Support", 
      icon: "/brother7.png",
      bgColor: "bg-indigo-100"
    },
    { 
      name: "Download Drivers", 
      icon: "/download.png",
      bgColor: "bg-orange-100"
    },
    { 
      name: "Contact Support", 
      icon: "/brother6.png",
      bgColor: "bg-pink-100"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        {/* <div className="relative w-64 h-16 mx-auto mb-6">
          <Image 
            src="/brothergirl.jpg" 
            alt="Brother Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div> */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Brother Printer Support</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Quick solutions for your Brother printer issues. Select your topic below.
        </p>
      </div>

      {/* Support Options Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportItems.map((item, index) => (
            <div 
              key={index} 
              className={`${item.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
            >
              <div className="p-6 flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-inner mb-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center">
                  Get Help
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Help Section */}
      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-blue-600 md:w-1/3 flex items-center justify-center p-8">
            <div className="relative w-full h-48">
              <Image
                src="/brothergirl.jpg"
                alt="Brother Printer"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Need More Help?</div>
            <h2 className="mt-2 text-2xl font-extrabold text-gray-900">24/7 Brother Printer Support</h2>
            <p className="mt-3 text-gray-600">
              Our expert technicians are available around the clock to help with any Brother printer issues. 
              Whether it's setup, troubleshooting, or maintenance, we've got you covered.
            </p>
            <div className="mt-6">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Support: 1-800-BROTHER
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}