import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-10">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="w-44 flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Al Madeena Oasis Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-lg text-sm">
              UAE's trusted partner for skilled and unskilled manpower in
              construction and industrial sectors. Delivering excellence,
              reliability, and safety on every project.
            </p>
            <div className="text-xs text-primary-foreground/60 space-y-0.5">
              <p>License No: 1551848</p>
              <p>Established in UAE</p>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-semibold mb-4 tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              {[
                "Skilled Masons",
                "Carpenters",
                "Steel Fixers",
                "Electricians",
                "Plumbers",
                "Welders",
                "General Labor",
              ].map((service, i) => (
                <li
                  key={i}
                  className="hover:text-secondary transition-colors duration-200"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-base font-semibold mb-4 tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                </span>
                <span className="text-primary-foreground/80">
                  +971 XX XXX XXXX
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail className="w-3.5 h-3.5 text-secondary" />
                </span>
                <span className="text-primary-foreground/80">
                  info@almadeenaoasis.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="p-1.5 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                </span>
                <span className="text-primary-foreground/80">
                  United Arab Emirates
                </span>
              </div>
            </div>

            <div className="mt-5 text-xs text-primary-foreground/60">
              <p className="font-medium mb-0.5">Business Hours:</p>
              <p>Sun-Thu: 6:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-4 text-center">
          <p className="text-primary-foreground/60 text-xs">
            © 2024 Al Madeena Oasis Plaster Works L.L.C. All rights reserved. |{" "}
            <span className="opacity-90">
              Powered by{" "}
              <a
                href="https://sanonyx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Sanonyx
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
