import { Button } from "@/components/ui/button";
import { MapPin, Star, Leaf, Sparkles, Mountain } from "lucide-react";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with dark luxury overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(/hero-cottage.png)` }}
      >
        {/* Deep dark gradient for luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,5%)]/90 via-[hsl(220,20%,7%)]/70 to-[hsl(220,20%,7%)]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,5%)]/60 via-transparent to-[hsl(220,20%,5%)]/60" />
        {/* Subtle gold glow at center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38,75%,55%,0.05),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 text-center pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 mb-8 fade-in-up">
            <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[hsl(38,75%,55%)] text-[hsl(38,75%,55%)]" />
              ))}
              <Star className="h-4 w-4 text-[hsl(38,75%,55%)]/50" />
              <span className="ml-2 text-sm font-medium text-[hsl(40,15%,90%)]">4.1/5 • 302 Reviews</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 fade-in-up" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-[hsl(40,15%,95%)] drop-shadow-2xl">Satya Anand</span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-[hsl(38,75%,55%)] via-[hsl(38,80%,65%)] to-[hsl(38,75%,55%)] bg-clip-text text-transparent">
                Cottage
              </span>
            </span>
          </h1>

          {/* Tagline from brochure */}
          <p className="text-lg sm:text-xl md:text-2xl text-[hsl(38,75%,55%)] font-medium tracking-wide mb-6 fade-in-up" style={{ animationDelay: '0.3s' }}>
            Pure Veg and Non-Alcoholic Hotel
          </p>

          {/* Gold accent divider */}
          <div className="flex items-center justify-center gap-4 mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[hsl(38,75%,55%)] to-transparent" />
            <Sparkles className="h-5 w-5 text-[hsl(38,75%,55%)]" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[hsl(38,75%,55%)] to-transparent" />
          </div>

          {/* Location */}
          <div className="inline-flex items-center gap-2 mb-8 fade-in-up bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10" style={{ animationDelay: '0.5s' }}>
            <MapPin className="h-5 w-5 text-[hsl(38,75%,55%)]" />
            <p className="text-base md:text-lg text-[hsl(40,15%,85%)] font-medium tracking-wide">
              Coonoor — The Nilgiri Hills
            </p>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-[hsl(40,10%,70%)] mb-12 max-w-2xl mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '0.6s' }}>
            Experience tranquility in our serene hillside retreat surrounded by misty mountains.
            <span className="block mt-2 text-[hsl(40,10%,55%)]">8 uniquely themed gemstone rooms await your arrival.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-gradient-to-r from-[hsl(38,75%,55%)] to-[hsl(38,70%,45%)] hover:from-[hsl(38,80%,60%)] hover:to-[hsl(38,75%,50%)] text-[hsl(220,20%,7%)] font-bold text-lg px-10 py-6 rounded-2xl shadow-lg shadow-[hsl(38,75%,55%)]/20 hover:shadow-xl hover:shadow-[hsl(38,75%,55%)]/30 transition-all duration-300 hover:scale-105 border-0"
            >
              Reserve Your Stay
            </Button>
            <Button
              size="lg"
              onClick={scrollToRooms}
              className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-[hsl(38,75%,55%)]/30 text-[hsl(40,15%,95%)] hover:bg-white/10 hover:border-[hsl(38,75%,55%)]/50 font-bold text-lg px-10 py-6 rounded-2xl transition-all duration-300 hover:scale-105"
            >
              Explore Rooms
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-16 fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="flex items-center gap-2 bg-[hsl(160,50%,40%)]/10 backdrop-blur-sm px-5 py-3 rounded-full border border-[hsl(160,50%,40%)]/30 hover:bg-[hsl(160,50%,40%)]/20 transition-all">
              <Leaf className="h-5 w-5 text-[hsl(160,50%,45%)]" />
              <span className="text-sm font-semibold text-[hsl(40,15%,90%)]">Pure Vegetarian</span>
            </div>
            <div className="flex items-center gap-2 bg-[hsl(215,70%,50%)]/10 backdrop-blur-sm px-5 py-3 rounded-full border border-[hsl(215,70%,50%)]/30 hover:bg-[hsl(215,70%,50%)]/20 transition-all">
              <Sparkles className="h-5 w-5 text-[hsl(215,70%,55%)]" />
              <span className="text-sm font-semibold text-[hsl(40,15%,90%)]">Shiv Shakti Meditation</span>
            </div>
            <div className="flex items-center gap-2 bg-[hsl(38,75%,55%)]/10 backdrop-blur-sm px-5 py-3 rounded-full border border-[hsl(38,75%,55%)]/30 hover:bg-[hsl(38,75%,55%)]/20 transition-all">
              <Mountain className="h-5 w-5 text-[hsl(38,75%,55%)]" />
              <span className="text-sm font-semibold text-[hsl(40,15%,90%)]">Mountain Views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-[hsl(38,75%,55%)]/40 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-[hsl(38,75%,55%)] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;