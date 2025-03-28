// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "./_home_page/Contact";
import Hero from "./_home_page/Hero";
import ServiceProviders from "./_home_page/ServiceProviders";
import WhatisMSA from "./_home_page/WhatisMSA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhatisMSA />
      <ServiceProviders />
      <Contact />
      <Footer />
    </div>
  );
}
