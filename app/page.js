import Image from "next/image";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import DataContent from "./Components/DataContent";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import JivoChat from "./JivoChat";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      {/* <Header/> */}
      <Support/>
      <DataContent/>
      <JivoChat/>
     
    </>
  );
}
