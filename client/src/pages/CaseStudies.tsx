import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const caseStudies = [
  {
    title: "E-commerce Analytics Transformation",
    description: "How we helped an online retailer increase conversion rates by 45% through advanced GA4 implementation",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
    metrics: ["45% increase in conversions", "2.5x ROI improvement", "60% better user engagement"],
  },
  {
    title: "B2B Dashboard Optimization",
    description: "Streamlining data visualization for a B2B SaaS company using Looker Studio",
    image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d",
    metrics: ["30% time saved in reporting", "95% client satisfaction", "Real-time decision making"],
  },
  {
    title: "Marketing Analytics Integration",
    description: "Implementing GTM to track and optimize multi-channel marketing campaigns",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    metrics: ["3x marketing ROI", "85% improved targeting", "Unified tracking system"],
  },
];

export default function CaseStudies() {
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

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
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
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
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
