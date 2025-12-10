import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'about', label: 'About' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
      ? 'bg-[hsl(220,20%,7%)]/95 backdrop-blur-lg shadow-lg border-b border-[hsl(38,75%,55%)]/10'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="focus:outline-none flex items-center gap-3">
            <img src="/logo.png" alt="Satya Anand Cottage" className="h-10 w-10 object-contain" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-[hsl(40,15%,95%)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Satya Anand
              </span>
              <span className="block text-xs text-[hsl(38,75%,55%)] tracking-wider">COTTAGE</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 text-[hsl(40,15%,85%)] hover:text-[hsl(38,75%,55%)] hover:bg-[hsl(38,75%,55%)]/10"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919892701200"
              className="flex items-center space-x-2 text-sm text-[hsl(40,10%,60%)] hover:text-[hsl(38,75%,55%)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+91 98927 01200</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[hsl(38,75%,55%)] to-[hsl(38,70%,45%)] hover:from-[hsl(38,80%,60%)] hover:to-[hsl(38,75%,50%)] text-[hsl(220,20%,7%)] font-semibold shadow-lg shadow-[hsl(38,75%,55%)]/20 transition-all duration-300 rounded-xl px-6"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[hsl(40,15%,90%)] hover:bg-[hsl(38,75%,55%)]/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <span className="text-2xl font-light">✕</span> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[hsl(38,75%,55%)]/20 pt-4 fade-in">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 rounded-xl text-[hsl(40,15%,90%)] hover:text-[hsl(38,75%,55%)] hover:bg-[hsl(38,75%,55%)]/10 transition-all font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-[hsl(38,75%,55%)]/20 mt-2">
                <a
                  href="tel:+919892701200"
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-[hsl(40,10%,60%)] hover:text-[hsl(38,75%,55%)] transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98927 01200</span>
                </a>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-3 bg-gradient-to-r from-[hsl(38,75%,55%)] to-[hsl(38,70%,45%)] text-[hsl(220,20%,7%)] font-semibold rounded-xl"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;