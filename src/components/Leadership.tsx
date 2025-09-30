import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const LeadershipTeam = () => {
  const leaders = [
    {
      name: "Bablu MD Abdul Rasid",
      description:
        "Civil Engineer with 18+ years of international experience across the Middle East, Europe, Africa, South Asia, and India. Expert in leading major infrastructure, industrial, and building projects with a focus on quality, timely delivery, and growth."
    },
    {
      name: "Chandramohan Deviarasu",
      description:
        "25+ years of construction industry experience in the Middle East, Southeast Asia, and India. Skilled in managing complex projects, leading multicultural teams, and driving operational excellence and innovation."
    },
    {
      name: "Joy Joseph Morris",
      description:
        "20+ years of UAE experience in administration, government liaison, and business coordination. Accomplished entrepreneur with a track record of creating and managing successful ventures, ensuring operational efficiency and sustainable growth."
    }
  ];

  return (
    <section id="leadership-team" className="py-20 section-gradient">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experts driving our success with decades of global experience and visionary leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="card-elevated text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{leader.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{leader.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
