import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import heroImage from "@/assets/hero-cottage.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const element = document.getElementById('rooms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Rating */}
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm">4.8/5 • 127 Reviews</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Satya Anand
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Cottage
            </span>
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="h-5 w-5 text-green-400" />
            <p className="text-xl text-gray-200">
              Nestled in the serene hills of Coonoor, Tamil Nadu
            </p>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience tranquility in our pure vegetarian, non-alcoholic retreat. 
            Surrounded by misty mountains and lush greenery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-mountain"
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToRooms}
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-6 rounded-xl"
            >
              View Rooms
            </Button>
          </div>

          {/* Special Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="font-semibold text-green-400 mb-2">100% Pure Vegetarian</h3>
              <p className="text-sm text-gray-300">Wholesome, organic meals prepared with love</p>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="font-semibold text-blue-400 mb-2">Non-Alcoholic Zone</h3>
              <p className="text-sm text-gray-300">Peaceful, family-friendly environment</p>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="font-semibold text-yellow-400 mb-2">Mountain Views</h3>
              <p className="text-sm text-gray-300">Breathtaking vistas from every room</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;