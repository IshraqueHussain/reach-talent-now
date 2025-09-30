import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional construction team at work"
          className="w-full h-full object-cover scale-105 animate-hero-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-primary/20 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 hero-text drop-shadow-lg">
            Reliable Workforce for{" "}
            <span className="text-secondary">Construction Excellence</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto hero-text drop-shadow">
            Delivering skilled and unskilled workforce with uncompromising
            quality, safety, and reliability for your construction and
            industrial projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={scrollToContact}
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 flex items-center justify-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-secondary/50"
            >
              Get Free Quote <ArrowRight size={20} />
            </Button>

            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all"
            >
              Learn More
            </Button>
          </div>

          {/* Stats / Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Award className="w-8 h-8 text-secondary" />,
                title: "Licensed",
                desc: "UAE Licensed Company (No. 1551848)",
              },
              {
                icon: <Users className="w-8 h-8 text-secondary" />,
                title: "Expert",
                desc: "Skilled & Experienced Workforce",
              },
              {
                icon: <Clock className="w-8 h-8 text-secondary" />,
                title: "Reliable",
                desc: "On-time Project Delivery",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center hover:-translate-y-1 transition-transform shadow-md hover:shadow-lg"
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.title}
                </div>
                <p className="text-white/80 text-center">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional floating animation */}
      <style>
        {`
          @keyframes hero-pulse {
            0% { transform: scale(1.02); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1.02); }
          }
          .animate-hero-pulse {
            animation: hero-pulse 20s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
