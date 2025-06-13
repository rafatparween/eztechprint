import Image from 'next/image';

export default function BrotherHeader() {
  return (
    <div className="bg-[#0D2EA0] flex items-center h-[63px] px-4">
      <Image
        src="/brother9.png"
        alt="Brother Logo"
        width={106}
        height={40}
        className="object-contain"
      />
      {/* <span className="text-white text-sm ml-2">at your side</span> */}
    </div>
  );
}