import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead Data Scientist",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a",
  },
  {
    name: "Michael Chen",
    role: "Analytics Director",
    image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf",
  },
  {
    name: "Emily Rodriguez",
    role: "Visualization Expert",
    image: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51",
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expert Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
