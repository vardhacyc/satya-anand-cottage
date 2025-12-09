import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

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
    { id: 'about', label: 'About' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/95 backdrop-blur-lg shadow-soft border-b border-border/50'
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection('home')} className="focus:outline-none">
            <Logo size="md" showText={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isScrolled
                    ? 'text-foreground hover:text-primary hover:bg-primary/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919892701200"
              className={`flex items-center space-x-2 text-sm transition-colors ${isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                }`}
            >
              <Phone className="h-4 w-4" />
              <span>+91 98927 01200</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-soft hover:shadow-mountain transition-all duration-300 rounded-xl px-6"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 fade-in">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-3 rounded-xl text-foreground hover:text-primary hover:bg-primary/5 transition-all font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border/50 mt-2">
                <a
                  href="tel:+919892701200"
                  className="flex items-center space-x-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98927 01200</span>
                </a>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-3 bg-gradient-to-r from-primary to-primary/80 rounded-xl"
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