import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Preloader from "@/components/Preloader";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Preloader />
      <Header />
      <Hero />
      <Rooms />
      <About />
      <Amenities />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
