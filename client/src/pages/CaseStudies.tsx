import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { InteractiveCaseStudy } from "@/components/InteractiveCaseStudy";
import { X } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Analytics Transformation",
    description: "How we helped an online retailer increase conversion rates by 45% through advanced GA4 implementation",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
    metrics: ["45% increase in conversions", "2.5x ROI improvement", "60% better user engagement"],
    interactiveSteps: [
      {
        title: "Initial Analysis",
        description: "Our team conducted a comprehensive audit of the existing analytics setup, identifying major gaps in tracking and reporting.",
        chart: {
          data: [
            { name: "Jan", value: 1000 },
            { name: "Feb", value: 1200 },
            { name: "Mar", value: 1100 },
          ],
          dataKey: "value",
          label: "Monthly Visitors",
        },
      },
      {
        title: "GA4 Implementation",
        description: "We implemented enhanced e-commerce tracking and custom event tracking to capture key user interactions.",
        chart: {
          data: [
            { name: "Week 1", value: 2.1 },
            { name: "Week 2", value: 2.3 },
            { name: "Week 3", value: 2.8 },
            { name: "Week 4", value: 3.2 },
          ],
          dataKey: "value",
          label: "Conversion Rate (%)",
        },
      },
      {
        title: "Optimization Phase",
        description: "Based on the collected data, we optimized the checkout process and product recommendations.",
        chart: {
          data: [
            { name: "Q1", value: 100000 },
            { name: "Q2", value: 150000 },
            { name: "Q3", value: 220000 },
            { name: "Q4", value: 280000 },
          ],
          dataKey: "value",
          label: "Revenue ($)",
        },
      },
    ],
  },
  // Add more case studies here...
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
                steps={caseStudies[selectedCase].interactiveSteps}
                onComplete={() => setSelectedCase(null)}
              />
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={study.title} className="overflow-hidden">
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