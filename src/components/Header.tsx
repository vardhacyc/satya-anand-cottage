import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Satya Anand Cottage</h1>
            <span className="text-sm text-muted-foreground hidden sm:block">Pure Veg • Non-Alcoholic</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('rooms')} className="text-foreground hover:text-primary transition-colors">
              Rooms
            </button>
            <button onClick={() => scrollToSection('amenities')} className="text-foreground hover:text-primary transition-colors">
              Amenities
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </nav>

          {/* Contact Info & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+9198927 01200</span>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="shadow-soft">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('rooms')} className="text-left text-foreground hover:text-primary transition-colors">
                Rooms
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-left text-foreground hover:text-primary transition-colors">
                Amenities
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                Contact
              </button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
                <Phone className="h-4 w-4" />
                <span>+9198927 01200</span>
              </div>
              <Button onClick={() => scrollToSection('contact')} className="self-start">
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;