import JivoChat from "@/app/JivoChat";
import Image from "next/image";

export default function ErrorPage() {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 ">
          
    
            <div className="mb-6 flex justify-center">
              <Image
                src="/error.png" 
                alt="Printer Error"
                width={892}
                height={632}
              />
            
          </div>
          <JivoChat/>
        </div>
      );
    };