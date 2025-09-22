import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional construction team at work" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 hero-text">
            Expert Manpower Solutions for
            <span className="text-secondary"> UAE Construction</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto hero-text">
            Delivering skilled and unskilled workforce with uncompromising quality, safety, and reliability for your construction and industrial projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={scrollToContact} variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button onClick={scrollToAbout} variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Licensed</div>
              <p className="text-white/80">UAE Licensed Company (No. 1551848)</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Expert</div>
              <p className="text-white/80">Skilled & Experienced Workforce</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Reliable</div>
              <p className="text-white/80">On-time Project Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;