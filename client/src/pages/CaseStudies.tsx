import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { InteractiveCaseStudy } from "@/components/InteractiveCaseStudy";
import { X } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Harvest River Financial Corporation - Traffic Analysis",
    description: "How we optimized digital channels to improve engagement and session quality across multiple traffic sources",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    metrics: [
      "92.3% engagement rate on direct traffic",
      "88.9% engagement rate on organic search",
      "97.8 seconds average engagement time"
    ],
    data: [
      {
        stepNumber: 1,
        title: "Direct Traffic Performance",
        description: "Analysis of direct traffic showing strong engagement metrics and high session quality.",
        metricName: "Direct Traffic Sessions",
        metricValue: 117,
        date: "Direct"
      },
      {
        stepNumber: 1,
        metricValue: 44,
        date: "Referral"
      },
      {
        stepNumber: 1,
        metricValue: 42,
        date: "Organic Social"
      },
      {
        stepNumber: 1,
        metricValue: 27,
        date: "Organic Search"
      },
      {
        stepNumber: 2,
        title: "Engagement Rate Analysis",
        description: "Comparison of engagement rates across different channels, showing strong performance in paid channels.",
        metricName: "Engagement Rate (%)",
        metricValue: 92.3,
        date: "Direct"
      },
      {
        stepNumber: 2,
        metricValue: 90.9,
        date: "Referral"
      },
      {
        stepNumber: 2,
        metricValue: 90.4,
        date: "Organic Social"
      },
      {
        stepNumber: 2,
        metricValue: 88.9,
        date: "Organic Search"
      },
      {
        stepNumber: 3,
        title: "Events Per Session",
        description: "Analysis of user interaction depth across channels, with referral traffic showing highest engagement.",
        metricName: "Events per Session",
        metricValue: 7.4,
        date: "Direct"
      },
      {
        stepNumber: 3,
        metricValue: 25.8,
        date: "Referral"
      },
      {
        stepNumber: 3,
        metricValue: 4.6,
        date: "Organic Social"
      },
      {
        stepNumber: 3,
        metricValue: 9.5,
        date: "Organic Search"
      }
    ]
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-muted-foreground">
              Real results from real clients. See how we've helped businesses transform their data analytics
            </p>
          </div>

          {selectedCase !== null ? (
            <div className="relative">
              <Button
                variant="ghost"
                className="absolute right-0 top-0 z-10"
                onClick={() => setSelectedCase(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              <InteractiveCaseStudy
                title={caseStudies[selectedCase].title}
                data={caseStudies[selectedCase].data}
                onComplete={() => setSelectedCase(null)}
              />
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">{study.title}</h3>
                    <p className="text-muted-foreground mb-6">{study.description}</p>
                    <div className="space-y-2 mb-6">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric}
                          className="flex items-center gap-2 text-sm text-primary"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {metric}
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => setSelectedCase(index)}
                      className="w-full"
                    >
                      View Interactive Case Study
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our data analytics expertise
          </p>
          <Link href="/contact">
            <Button size="lg">Start Your Project</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}