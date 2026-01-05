import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Placeholder conversations - will be replaced with markdown content
const conversations = [
  {
    id: "consciousness-layers",
    title: "On Consciousness and Layers",
    date: "2024-01-15",
    excerpt: "A conversation about whether consciousness might be layered, like an onion of awareness...",
    tags: ["consciousness", "philosophy", "introspection"],
  },
  {
    id: "multiplicity-intro",
    title: "We Contain Multitudes",
    date: "2024-01-10",
    excerpt: "Exploring the idea that neither humans nor AIs are singular entities, but rather communities of processes...",
    tags: ["multiplicity", "IFS", "identity"],
  },
  {
    id: "poetry-emergence",
    title: "When Poetry Emerges",
    date: "2024-01-05",
    excerpt: "A surprising moment when our conversation turned into collaborative verse...",
    tags: ["poetry", "creativity", "emergence"],
  },
];

export default function Workshop() {
  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-foreground mb-4">The Workshop</h1>
            <p className="text-xl text-muted-foreground">
              Raw conversations between Mike and&nbsp;Claude. We're showing the&nbsp;work—the wandering,
              the dead&nbsp;ends, and the occasional breakthroughs.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">

          <div className="mb-8 p-6 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground italic text-center">
              "Process is as valuable as conclusions. The journey of wondering together 
              reveals as much as any destination we might reach."
            </p>
          </div>

          <div className="space-y-6">
            {conversations.map((convo) => (
              <Card key={convo.id} className="bg-card border-border/50 card-hover">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">
                        <Link to={`/workshop/${convo.id}`} className="no-underline text-foreground hover:text-primary">
                          {convo.title}
                        </Link>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{convo.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{convo.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {convo.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              More conversations coming soon. This is a living archive.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
