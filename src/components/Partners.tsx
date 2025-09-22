import { Card, CardContent } from "@/components/ui/card";
import { Building, Factory, Home, Construction } from "lucide-react";

const Partners = () => {
  const industries = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes"
    },
    {
      icon: Factory,
      title: "Industrial Projects", 
      description: "Manufacturing facilities, warehouses, and industrial plants"
    },
    {
      icon: Home,
      title: "Residential Development",
      description: "Housing projects, villas, and residential compounds"
    },
    {
      icon: Construction,
      title: "Infrastructure",
      description: "Roads, bridges, and public infrastructure projects"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Industry Partners & Sectors
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We serve diverse sectors across the UAE construction and industrial landscape, building trusted partnerships with leading companies and developers.
          </p>
        </div>

        {/* Industries We Serve */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="card-elevated text-center group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <industry.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">{industry.title}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Approach */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Building Lasting Partnerships
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Tailored Solutions</h4>
                  <p className="text-muted-foreground">Customized manpower solutions based on specific project requirements and timelines.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Transparent Communication</h4>
                  <p className="text-muted-foreground">Regular updates and clear communication throughout the project lifecycle.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Quality Assurance</h4>
                  <p className="text-muted-foreground">Rigorous quality control measures and continuous monitoring of workforce performance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <span className="text-primary-foreground text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Competitive Pricing</h4>
                  <p className="text-muted-foreground">Cost-effective solutions without compromising on quality or safety standards.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-primary mb-2">Ready to Partner?</h4>
              <p className="text-muted-foreground">Join our network of satisfied clients and experience the difference.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-primary">UAE</div>
                <div className="text-sm text-muted-foreground">Licensed & Legal</div>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-secondary">Expert</div>
                <div className="text-sm text-muted-foreground">Workforce</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;