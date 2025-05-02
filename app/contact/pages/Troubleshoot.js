import Image from "next/image";

export default function Troubleshoot() {
  return (
    <div className="bg-white h-[347px] flex flex-col items-center justify-center px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl w-full ">
        {/* Left: Devices */}
        <div className="flex justify-center items-center gap-6 lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/dignose.avif"
            alt="Printer"
            width={539}
            height={347}
            className="object-contain"
          />
        </div>

        {/* Right: Text */}
       
        <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-[40px] font- text-black mb-2 ">Diagnose and solve</p>
  <div className="flex items-start justify-center lg:justify-start mb-4">
    {/* Chat Icon (Matching Screenshot) */}
    {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-[33px] h-[33px] text-black mr-2 mt-[2px]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 2H4C2.897 2 2 2.897 2 4V18C2 19.103 2.897 20 4 20H18L22 24V4C22 2.897 21.103 2 20 2Z" />
    </svg> */}
    {/* <img className="h-[30px] width-[30px]" src="https://static.vecteezy.com/system/resources/thumbnails/006/692/321/small/chatting-message-icon-template-black-color-editable-chatting-message-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"/> */}

    {/* Heading (Bold Match) */}
    
    <h1 className="text-[29px] text-black">
      Contact Support – Chat Live
    </h1>
  </div>

  {/* Paragraph */}
  <p className="text-[20px] text-black leading-relaxed mb-2">
    In this support hub, you’ll find quick access to live assistance for common computer and printer issues.
  </p>
  <p className="text-[20px] text-black leading-relaxed">
    Click the tabs to switch between <span className="font-bold">Computer</span> and <span className="font-bold">Printer</span> topics,
    <br/>
    Then start a live chat with a support agent.
  </p>
</div>

      </div>

      {/* Tabs */}
      {/* <div className="flex gap-10 mt-16 text-lg font-medium">
        <button className="flex items-center gap-2 text-gray-700 hover:text-black">
          <span className="text-2xl">🖥</span> Computer Issues
        </button>
        <button className="flex items-center gap-2 text-blue-700 font-bold border-b-4 border-blue-700 pb-1">
          <span className="text-2xl">🖨</span> Printer Issues
        </button>
      </div> */}
    </div>
  );
}