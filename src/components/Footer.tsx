import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">AM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Al Madeena Oasis</h3>
                <p className="text-primary-foreground/80">Plaster Works L.L.C.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              UAE's trusted partner for skilled and unskilled manpower in construction and industrial sectors. Delivering excellence, reliability, and safety on every project.
            </p>
            <div className="text-sm text-primary-foreground/70">
              <p>License No: 1551848</p>
              <p>Established in UAE</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Skilled Masons</li>
              <li>Carpenters</li>
              <li>Steel Fixers</li>
              <li>Electricians</li>
              <li>Plumbers</li>
              <li>Welders</li>
              <li>General Labor</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">+971 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">info@almadeenaoasis.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">United Arab Emirates</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-primary-foreground/70">
              <p>Business Hours:</p>
              <p>Sun-Thu: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 Al Madeena Oasis Plaster Works L.L.C. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;