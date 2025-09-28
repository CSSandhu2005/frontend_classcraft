import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { MeetTheTeam } from "@/sections/MeetTheTeam";
import Footer from "@/sections/Footer";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TabUi } from "@/sections/TabUi";

//product image import
import productImage from "@/assets/product-image.png" ; 
import backLogo from "@/assets/logo.svg" 

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker /> 
      <MeetTheTeam /> 
      <Features />
      <Testimonials />
      <MacbookScroll src={productImage.src} /> 
      <TabUi />
      <CallToAction />
      <Footer />
    </>
  );
}
