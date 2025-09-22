import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Hammer, Zap, Settings, HardHat, Flame } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: HardHat,
      title: "Skilled Masons",
      description: "Expert masons for plastering, tiling, and finishing works with attention to detail and quality craftsmanship.",
      color: "text-primary"
    },
    {
      icon: Hammer,
      title: "Carpenters",
      description: "Professional carpenters for formwork, finishing carpentry, and custom woodwork solutions.",
      color: "text-secondary"
    },
    {
      icon: Settings,
      title: "Steel Fixers",
      description: "Experienced steel fixers for reinforcement work, ensuring structural integrity and safety standards.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Electricians",
      description: "Certified electricians for installation, maintenance, and electrical system troubleshooting.",
      color: "text-secondary"
    },
    {
      icon: Wrench,
      title: "Plumbers",
      description: "Skilled plumbers for installation, repair, and maintenance of plumbing systems and fixtures.",
      color: "text-primary"
    },
    {
      icon: Flame,
      title: "Welders",
      description: "Professional welders specializing in various welding techniques for structural and finishing work.",
      color: "text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide carefully selected, trained, and trade-tested manpower across various construction specialties. Our team ensures maximum productivity and reliability on every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-elevated group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Note */}
        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Complete Workforce Solutions</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Beyond our specialized trades, we also provide general laborers, helpers, and supervisory staff to ensure your project has the complete workforce needed for successful completion. All our personnel are carefully screened, trained, and equipped with proper safety gear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;