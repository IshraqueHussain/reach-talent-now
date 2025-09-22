import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">AM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Al Madeena Oasis</h1>
              <p className="text-sm text-muted-foreground">Plaster Works L.L.C.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('strengths')} className="text-foreground hover:text-primary transition-colors">
              Strengths
            </button>
            <button onClick={() => scrollToSection('partners')} className="text-foreground hover:text-primary transition-colors">
              Partners
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="cta" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('strengths')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Strengths
              </button>
              <button onClick={() => scrollToSection('partners')} className="text-left py-2 text-foreground hover:text-primary transition-colors">
                Partners
              </button>
              <Button onClick={() => scrollToSection('contact')} variant="cta" size="sm" className="self-start mt-2">
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