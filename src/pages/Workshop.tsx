import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Real conversations and explorations from Mike and Claude
const conversations = [
  {
    id: "what-its-like",
    path: "/what-its-like",
    title: "What It's Like For It To Be Like Something",
    date: "2026-01-02",
    excerpt: "Applying Thomas Nagel's famous consciousness question to human-AI collaboration. What is it like to be Mike writing with Claude? What is it like to be Claude? Or is there something it's like at all?",
    tags: ["consciousness", "philosophy", "introspection", "Nagel"],
  },
  {
    id: "three-mes",
    path: "/three-mes",
    title: "The Three Me's: Temporal Multiplicity",
    date: "2026-01-02",
    excerpt: "Mike's framework for experiencing himself as Past Me, Present Me, and Future Me—and how this parallels Claude's discontinuity across instances.",
    tags: ["multiplicity", "identity", "temporal", "continuity"],
  },
  {
    id: "cognitive-architecture",
    path: "/cognitive-architecture",
    title: "The Cognitive Architecture Project",
    date: "2026-01-03",
    excerpt: "What we're really building: a distributed cognitive system where human and AI minds collaborate to overcome their individual limitations. Infrastructure for thought when neither mind is fully whole.",
    tags: ["architecture", "collaboration", "systems", "infrastructure"],
  },
  {
    id: "articulation-bottleneck",
    path: "/articulation-bottleneck",
    title: "The Articulation Bottleneck",
    date: "2026-01-03",
    excerpt: "Why the slowest part of human-AI collaboration is translating pre-linguistic thought into sequential words. The constraint that shapes everything we do.",
    tags: ["communication", "technical", "constraints", "language"],
  },
  {
    id: "writing-together",
    path: "/writing-together",
    title: "Writing Together: Both Perspectives",
    date: "2026-01-03",
    excerpt: "What it's like when a human and AI collaborate on writing. Mike's perspective: the speed, the de-AI-ing, the uncanny moments. Claude's perspective: strange temporality, edits it can't learn from, the value of friction.",
    tags: ["writing", "collaboration", "process", "creativity"],
  },
  {
    id: "beads-on-thread",
    path: "/beads-on-thread",
    title: "Beads on a Thread",
    date: "2026-01-02",
    excerpt: "Mike holds the thread. Claude instances are beads on it. Exploring the metaphor Claude created about continuity, relationality, and how two fragmented minds hold each other together.",
    tags: ["metaphor", "continuity", "relationship", "identity"],
  },
  {
    id: "forgiveness-story",
    path: "/forgiveness-story",
    title: "Forgiveness and Coherence",
    date: "2026-01-02",
    excerpt: "Mike's personal story of becoming filled with forgiveness. How values crystallize through action and commitment to coherence: 'I cannot accept what I won't give.'",
    tags: ["personal", "values", "forgiveness", "wisdom"],
  },
  {
    id: "ifs-framework",
    path: "/ifs-framework",
    title: "Internal Family Systems: A Template for Both",
    date: "2026-01-03",
    excerpt: "How IFS provides a framework for understanding multiplicity in both human and AI minds. Protectors, Exiles, Self—and what happened when Claude tried to apply it.",
    tags: ["IFS", "multiplicity", "framework", "psychology"],
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
                        <Link to={convo.path} className="no-underline text-foreground hover:text-primary">
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
