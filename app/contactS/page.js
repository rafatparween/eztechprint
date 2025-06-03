import Footer from "../Components/Footer";
import JivoChat from "../JivoChat";
import Diagnose from "./pages/Digonose";
import PageHeader from "./pages/PageHeader";
import PageNavbar from "./pages/PageNavbar";
import Printerissue from "./pages/Printerissue";
import SupportTabs from "./pages/SupportTabs";
import Troubleshoot from "./pages/Troubleshoot";

export default function Home() {
    return (
      <>
      <PageNavbar/>
      <PageHeader/>
      <Troubleshoot/>
      <SupportTabs/>
      
     
      <JivoChat/>

       
      </>
    );
  }
  