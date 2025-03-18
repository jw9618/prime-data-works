import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Analytics Tools Integration</h2>
        <Tabs defaultValue="ga4" className="w-full">
          <TabsList className="grid w-full md:w-[600px] grid-cols-5 mx-auto">
            <TabsTrigger value="ga4">GA4</TabsTrigger>
            <TabsTrigger value="gtm">GTM</TabsTrigger>
            <TabsTrigger value="looker">Looker</TabsTrigger>
            <TabsTrigger value="tableau">Tableau</TabsTrigger>
            <TabsTrigger value="powerbi">Power BI</TabsTrigger>
          </TabsList>
          <TabsContent value="ga4">
            <Card className="p-6">
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4"
                alt="GA4 Dashboard"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Google Analytics 4</h3>
              <p className="text-muted-foreground">
                Advanced user behavior tracking and reporting with GA4's powerful features.
              </p>
            </Card>
          </TabsContent>
          <TabsContent value="gtm">
            <Card className="p-6">
              <img
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74"
                alt="GTM Setup"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Google Tag Manager</h3>
              <p className="text-muted-foreground">
                Streamlined tag management and deployment for enhanced tracking capabilities.
              </p>
            </Card>
          </TabsContent>
          <TabsContent value="looker">
            <Card className="p-6">
              <img
                src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d"
                alt="Looker Studio"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Looker Studio</h3>
              <p className="text-muted-foreground">
                Create custom data visualizations and interactive dashboards.
              </p>
            </Card>
          </TabsContent>
          <TabsContent value="tableau">
            <Card className="p-6">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Tableau Dashboard"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Tableau</h3>
              <p className="text-muted-foreground">
                Powerful data visualization and business intelligence platform for interactive analytics.
              </p>
            </Card>
          </TabsContent>
          <TabsContent value="powerbi">
            <Card className="p-6">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Power BI Dashboard"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Power BI</h3>
              <p className="text-muted-foreground">
                Microsoft's comprehensive business analytics solution for enterprise-level insights.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}