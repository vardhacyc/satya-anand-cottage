import { Button } from "@/components/ui/button";
import { MapPin, Star, Leaf, Droplets, Mountain } from "lucide-react";

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
      {/* Background Image with premium overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(/lovable-uploads/1d3b7521-a06b-46a5-96a3-740de26d4a9e.png)` }}
      >
        {/* Multi-layer gradient for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-emerald-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center text-white pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Rating Badge - Glass morphism */}
          <div className="inline-flex items-center gap-2 mb-8 fade-in-up">
            <div className="glass-morphism flex items-center gap-1 px-5 py-2.5 rounded-full">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="ml-2 text-sm font-medium text-white">4.1/5 • 302 Reviews</span>
            </div>
          </div>

          {/* Main Title with premium typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-white drop-shadow-2xl">Satya Anand</span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg">
                Cottage
              </span>
            </span>
          </h1>

          {/* Gold accent divider */}
          <div className="flex items-center justify-center gap-4 mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
            <Leaf className="h-5 w-5 text-emerald-400" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
          </div>

          {/* Location - Glass morphism pill */}
          <div className="inline-flex items-center gap-2 mb-6 fade-in-up glass-morphism px-5 py-2.5 rounded-full" style={{ animationDelay: '0.4s' }}>
            <MapPin className="h-5 w-5 text-emerald-400" />
            <p className="text-base md:text-lg text-white font-medium tracking-wide">
              Coonoor, Tamil Nadu — The Nilgiri Hills
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light fade-in-up" style={{ animationDelay: '0.5s' }}>
            A serene vegetarian retreat where tranquility meets comfort.
            <span className="block mt-2 text-white/70">Experience pure bliss in the misty mountains.</span>
          </p>

          {/* CTA Buttons - More visible and premium */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-lg px-10 py-6 rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 border border-emerald-400/30"
            >
              Reserve Your Stay
            </Button>
            <Button
              size="lg"
              onClick={scrollToRooms}
              className="w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white/30 font-bold text-lg px-10 py-6 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Rooms
            </Button>
          </div>

          {/* Feature Pills - Glass morphism with better visibility */}
          <div className="flex flex-wrap justify-center gap-4 mt-16 fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass-morphism flex items-center gap-2 px-6 py-3.5 rounded-full hover:bg-white/20 transition-all border border-white/20">
              <Leaf className="h-5 w-5 text-green-400" />
              <span className="text-sm font-semibold text-white">Pure Vegetarian</span>
            </div>
            <div className="glass-morphism flex items-center gap-2 px-6 py-3.5 rounded-full hover:bg-white/20 transition-all border border-white/20">
              <Droplets className="h-5 w-5 text-sky-400" />
              <span className="text-sm font-semibold text-white">Non-Alcoholic</span>
            </div>
            <div className="glass-morphism flex items-center gap-2 px-6 py-3.5 rounded-full hover:bg-white/20 transition-all border border-white/20">
              <Mountain className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-semibold text-white">Mountain Views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center glass-morphism">
          <div className="w-1.5 h-3 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;