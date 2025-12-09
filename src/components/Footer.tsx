import { MapPin, Phone, Mail, Clock, Heart, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'about', label: 'About Us' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'contact', label: 'Contact' }
  ];

  const attractions = [
    "Sim's Park (5 km)",
    "Dolphin's Nose (8 km)",
    "Lamb's Rock (7 km)",
    "Tea Gardens (3 km)"
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-950 to-green-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.08),transparent_50%)]" />

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Top section with logo and description */}
        <div className="text-center mb-12 sm:mb-16">
          <img
            src="/logo.png"
            alt="Satya Anand Cottage"
            className="h-16 sm:h-20 w-auto mx-auto mb-4 invert brightness-200"
          />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Satya Anand Cottage
          </h3>
          <p className="text-emerald-300 text-sm sm:text-base tracking-wide">
            Pure Vegetarian Mountain Retreat in Coonoor
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent rounded" />
              Explore
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent rounded" />
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a href="tel:+919892701200" className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 98927 01200</span>
              </a>
              <a href="mailto:info@satyaanandcottage.com" className="flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">info@satyaanandcottage.com</span>
              </a>
              <div className="flex items-start gap-2 sm:gap-3 text-gray-300">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm sm:text-base">
                  <span className="text-emerald-300">Check-in:</span> 2:00 PM<br />
                  <span className="text-emerald-300">Check-out:</span> 11:00 AM
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent rounded" />
              Location
            </h4>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 sm:gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div className="text-sm sm:text-base">
                Brooklands Rd, Alwarpet<br />
                Coonoor, Tamil Nadu<br />
                643103
              </div>
            </a>
          </div>

          {/* Nearby */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent rounded" />
              Nearby
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              {attractions.map((attraction, index) => (
                <li key={index} className="hover:text-emerald-300 transition-colors">{attraction}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-emerald-500/30">
            🌱 Pure Vegetarian
          </span>
          <span className="bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-sky-500/30">
            🕊️ Non-Alcoholic
          </span>
          <span className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-amber-500/30">
            🏔️ Mountain Views
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {currentYear} Satya Anand Cottage. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="https://www.instagram.com/explore/locations/108982303863827/satya-anand-cottage/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="hidden sm:inline text-sm">Instagram</span>
              </a>
              <div className="flex items-center text-xs sm:text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-red-400 fill-current" />
                <span className="hidden sm:inline">for conscious travelers</span>
              </div>
            </div>
          </div>

          {/* Website URL */}
          <div className="text-center mt-6 pt-4 border-t border-white/5">
            <a
              href="https://satya-anand-cottage.berk-carp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              satya-anand-cottage.berk-carp.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;