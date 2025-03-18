import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  LineChart,
  BarChart2,
  PieChart,
  TrendingUp,
  Search,
  BarChart,
} from "lucide-react";

const services = [
  {
    title: "Data Analytics Implementation",
    description: "Set up and configure GA4, GTM, and Looker Studio for comprehensive tracking and reporting",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Custom Dashboard Creation",
    description: "Build tailored dashboards that visualize your most important metrics",
    icon: BarChart2,
    image: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e",
  },
  {
    title: "Data Strategy Consulting",
    description: "Develop a comprehensive data strategy aligned with your business goals",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407",
  },
];

export default function Services() {
  return (
    <main className="pt-20">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive data analytics solutions to help your business make better decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'll work with you to develop a tailored analytics solution that meets your specific needs
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
