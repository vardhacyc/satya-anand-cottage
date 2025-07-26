import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-mountain-deep text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Satya Anand Cottage</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              A serene retreat in the heart of Coonoor's hills, offering pure vegetarian hospitality 
              in an alcohol-free environment. Experience the perfect blend of comfort and consciousness.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-primary/20 px-3 py-1 rounded-full">Pure Vegetarian</span>
              <span className="bg-mountain-blue/20 px-3 py-1 rounded-full">Non-Alcoholic</span>
              <span className="bg-mountain-green/20 px-3 py-1 rounded-full">Eco-Friendly</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('rooms')} 
                  className="hover:text-white transition-colors"
                >
                  Rooms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('amenities')} 
                  className="hover:text-white transition-colors"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-2 text-primary flex-shrink-0" />
                <div className="text-sm">
                  Upper Coonoor Road<br />
                  Coonoor, Tamil Nadu 643101
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">info@satyaanandcottage.com</span>
              </div>
              <div className="flex items-start">
                <Clock className="h-4 w-4 mt-1 mr-2 text-primary flex-shrink-0" />
                <div className="text-sm">
                  Check-in: 2:00 PM<br />
                  Check-out: 11:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">Nearby Attractions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
            <div>Sim's Park (5 km)</div>
            <div>Dolphin's Nose (8 km)</div>
            <div>Lamb's Rock (7 km)</div>
            <div>Tea Gardens (3 km)</div>
            <div>Ooty Lake (19 km)</div>
            <div>Botanical Garden (20 km)</div>
            <div>Doddabetta Peak (25 km)</div>
            <div>Catherine Falls (12 km)</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            © {currentYear} Satya Anand Cottage. All rights reserved.
          </div>
          <div className="flex items-center">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-400 fill-current" />
            <span>for conscious travelers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;