import { Card, CardContent } from "@/components/ui/card";
import { Shield, CheckCircle, Clock, Users, Award, Handshake } from "lucide-react";

const Strengths = () => {
  const strengths = [
    {
      icon: Shield,
      title: "Quality & Safety First",
      description: "Commitment to highest standards of quality and safety across all projects and work sites."
    },
    {
      icon: CheckCircle,
      title: "Trade-Tested Personnel",
      description: "All our workforce is carefully selected, trained, and trade-tested for maximum reliability."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Proven track record of delivering projects on time and within budget constraints."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Management team with deep industry knowledge and experienced workforce."
    },
    {
      icon: Award,
      title: "UAE Licensed",
      description: "Fully licensed UAE company (License No. 1551848) with complete legal compliance."
    },
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description: "Building lasting relationships with clients based on trust, reliability, and performance."
    }
  ];

  return (
    <section id="strengths" className="py-20 section-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Al Madeena Oasis
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our core strengths set us apart in the competitive UAE construction market. We combine experience, quality, and reliability to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <Card key={index} className="card-elevated text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <strength.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{strength.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Core Values</h3>
          </div>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">E</span>
              </div>
              <h4 className="font-semibold text-primary">Excellence</h4>
              <p className="text-sm text-muted-foreground">High-quality performance</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-secondary-foreground font-bold">R</span>
              </div>
              <h4 className="font-semibold text-primary">Reliability</h4>
              <p className="text-sm text-muted-foreground">Always available</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">I</span>
              </div>
              <h4 className="font-semibold text-primary">Integrity</h4>
              <p className="text-sm text-muted-foreground">Ethical practices</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-secondary-foreground font-bold">T</span>
              </div>
              <h4 className="font-semibold text-primary">Teamwork</h4>
              <p className="text-sm text-muted-foreground">Strong collaboration</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-primary-foreground font-bold">S</span>
              </div>
              <h4 className="font-semibold text-primary">Safety</h4>
              <p className="text-sm text-muted-foreground">Safe working practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;