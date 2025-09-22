import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Al Madeena Oasis Plaster Works L.L.C.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Al Madeena Oasis Plaster Works L.L.C. (License No. 1551848) is a UAE-based company dedicated to providing skilled and unskilled manpower to the construction and industrial sectors. Although newly established in the UAE, our strength lies in our experienced workforce and a management team with deep industry knowledge.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are committed to supporting our clients in every possible way in delivering their projects on time, within budget, and to the highest standards of quality and safety. Our manpower is carefully selected, trained, and trade-tested to ensure maximum productivity and reliability on site.
            </p>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Vision</h3>
                  <p className="text-sm text-muted-foreground">
                    Trusted partner in UAE's construction sectors
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    Deliver exceptional manpower solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Values</h3>
                  <p className="text-sm text-muted-foreground">
                    Excellence, reliability, integrity & safety
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Professional business consultation meeting"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">UAE</div>
                  <div className="text-sm">Licensed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;