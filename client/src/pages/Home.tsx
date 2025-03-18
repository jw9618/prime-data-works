import Hero from "@/components/Hero";
import Analytics from "@/components/Analytics";
import Team from "@/components/Team";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { BarChart, LineChart, PieChart } from "lucide-react";

const benefits = [
  {
    title: "Data-Driven Decisions",
    description: "Transform raw data into actionable insights that drive business growth",
    icon: BarChart,
  },
  {
    title: "Real-Time Analytics",
    description: "Monitor key metrics and performance indicators in real-time",
    icon: LineChart,
  },
  {
    title: "Custom Dashboards",
    description: "Tailored visualization solutions for your specific business needs",
    icon: PieChart,
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Special Offer Section */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Special Offer: Comprehensive Data Audit
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get a thorough assessment of your data infrastructure, analytics setup, and optimization opportunities for just $100
            </p>
            <Link href="/contact">
              <Button size="lg" variant="default">
                Book Your Audit Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose DataViz Analytics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardContent className="p-6">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Analytics />

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you leverage your data for better business outcomes.
            </p>
            <Link href="/contact">
              <Button size="lg">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>

      <Team />
    </main>
  );
}