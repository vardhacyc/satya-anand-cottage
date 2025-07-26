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
      {/* Background Image with better mobile optimization */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/1d3b7521-a06b-46a5-96a3-740de26d4a9e.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Rating */}
          <div className="flex items-center justify-center space-x-1 mb-8 animate-fade-up">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-xs sm:text-sm font-medium glass-morphism px-3 py-1.5 rounded-full backdrop-blur-md">4.8/5 • 127 Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="block">Satya Anand</span>
            <span className="block gradient-text bg-gradient-to-r from-green-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Cottage
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium text-center">
              Nestled in the serene hills of Coonoor, Tamil Nadu
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up px-4" style={{ animationDelay: '0.6s' }}>
            Experience tranquility in our pure vegetarian, non-alcoholic retreat. 
            Surrounded by misty mountains and lush greenery, where peace meets comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up px-4" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-mountain transition-all duration-300 hover:scale-105 hover:shadow-elegant"
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToRooms}
              className="w-full sm:w-auto glass-morphism border-white/30 text-white hover:bg-white/20 font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              View Rooms
            </Button>
          </div>

          {/* Special Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16 max-w-5xl mx-auto px-4">
            <div className="text-center p-4 sm:p-6 glass-morphism rounded-2xl hover:scale-105 transition-all duration-500 animate-scale-in border border-white/20" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 text-xl">🌱</span>
              </div>
              <h3 className="font-semibold text-green-400 mb-3 text-base sm:text-lg">100% Pure Vegetarian</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Wholesome, organic meals prepared with love and care</p>
            </div>
            <div className="text-center p-4 sm:p-6 glass-morphism rounded-2xl hover:scale-105 transition-all duration-500 animate-scale-in border border-white/20" style={{ animationDelay: '1.2s' }}>
              <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-400 text-xl">🕊️</span>
              </div>
              <h3 className="font-semibold text-blue-400 mb-3 text-base sm:text-lg">Non-Alcoholic Zone</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Peaceful, family-friendly environment for all</p>
            </div>
            <div className="text-center p-4 sm:p-6 glass-morphism rounded-2xl hover:scale-105 transition-all duration-500 animate-scale-in border border-white/20 sm:col-span-2 lg:col-span-1" style={{ animationDelay: '1.4s' }}>
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-400 text-xl">🏔️</span>
              </div>
              <h3 className="font-semibold text-yellow-400 mb-3 text-base sm:text-lg">Mountain Views</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Breathtaking vistas from every room</p>
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