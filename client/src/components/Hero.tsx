import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Data Into
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {" "}Actionable Insights
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Prime Data Works helps businesses make data-driven decisions through advanced analytics,
              visualization, and strategic insights. Unlock the power of your data with
              our expert team.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg">View Case Studies</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Data Analytics Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}