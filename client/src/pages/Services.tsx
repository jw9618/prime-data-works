import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Database,
  FileSpreadsheet,
  BarChart2,
  Brain,
  Users,
  LineChart,
  PieChart,
  Tags,
  Calculator,
} from "lucide-react";

const services = [
  {
    title: "Data Collection & Management",
    description: "Gathering and organizing data from multiple sources including websites, databases, CRMs, and social media platforms for comprehensive analysis.",
    icon: Database,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Data Cleaning & Preparation",
    description: "Ensuring data accuracy and consistency through thorough cleaning and standardization processes for reliable analysis.",
    icon: FileSpreadsheet,
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
  },
  {
    title: "Data Analysis & Reporting",
    description: "Using advanced statistical models and visualization tools to uncover patterns, trends, and actionable business insights.",
    icon: BarChart2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Business Intelligence (BI)",
    description: "Creating interactive dashboards and reports using Google Looker and GA4 for real-time performance tracking and decision making.",
    icon: PieChart,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Predictive Analytics",
    description: "Leveraging machine learning and AI technologies to forecast trends and optimize business outcomes.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Marketing & Customer Analytics",
    description: "Deep analysis of customer behavior, campaign performance, and audience segmentation for targeted marketing strategies.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Financial & Risk Analytics",
    description: "Advanced analytics for pricing optimization, fraud detection, and improved financial strategy development.",
    icon: Calculator,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    title: "Automation & Optimization",
    description: "Implementing GTM and other tools to streamline tracking, reporting, and analytics processes.",
    icon: Tags,
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0",
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
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Data?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our comprehensive analytics services can drive your business forward
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