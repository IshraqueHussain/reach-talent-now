import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <nav className="section-container flex items-center justify-between py-2 md:py-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-36 md:w-44 flex items-center">
            <img
              src={Logo}
              alt="Al Madeena Oasis Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 md:space-x-8 text-sm md:text-base">
          {["home", "about", "services", "strengths", "partners"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
          <Button
            onClick={() => scrollToSection("contact")}
            variant="cta"
            size="sm"
            className="text-sm md:text-base"
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-border md:hidden z-40">
            <div className="flex flex-col items-center space-y-1 py-2">
              {["home", "about", "services", "strengths", "partners"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-foreground hover:text-primary transition-colors w-full py-1.5"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                )
              )}
              <Button
                onClick={() => scrollToSection("contact")}
                variant="cta"
                size="sm"
                className="mt-1"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
