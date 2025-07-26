import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

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
        style={{ backgroundImage: `url(/lovable-uploads/1d3b7521-a06b-46a5-96a3-740de26d4a9e.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Rating */}
          <div className="flex items-center justify-center space-x-1 mb-6 animate-fade-up">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm font-medium glass-morphism px-3 py-1 rounded-full">4.8/5 • 127 Reviews</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Satya Anand
            <br />
            <span className="gradient-text">
              Cottage
            </span>
          </h1>

          <div className="flex items-center justify-center space-x-2 mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <MapPin className="h-5 w-5 text-green-400" />
            <p className="text-lg md:text-xl text-gray-200 font-medium">
              Nestled in the serene hills of Coonoor, Tamil Nadu
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.6s' }}>
            Experience tranquility in our pure vegetarian, non-alcoholic retreat. 
            Surrounded by misty mountains and lush greenery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-gradient-primary hover:shadow-elegant text-primary-foreground font-semibold text-lg px-8 py-4 rounded-2xl shadow-mountain transition-all duration-300 hover:scale-105"
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToRooms}
              className="glass-morphism text-white hover:bg-white/20 font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              View Rooms
            </Button>
          </div>

          {/* Special Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="text-center p-6 glass-morphism rounded-2xl hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '1s' }}>
              <h3 className="font-semibold text-green-400 mb-3 text-lg">100% Pure Vegetarian</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Wholesome, organic meals prepared with love</p>
            </div>
            <div className="text-center p-6 glass-morphism rounded-2xl hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '1.2s' }}>
              <h3 className="font-semibold text-blue-400 mb-3 text-lg">Non-Alcoholic Zone</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Peaceful, family-friendly environment</p>
            </div>
            <div className="text-center p-6 glass-morphism rounded-2xl hover:scale-105 transition-all duration-300 animate-scale-in" style={{ animationDelay: '1.4s' }}>
              <h3 className="font-semibold text-yellow-400 mb-3 text-lg">Mountain Views</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Breathtaking vistas from every room</p>
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