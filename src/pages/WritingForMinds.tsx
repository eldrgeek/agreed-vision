import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Eye, Lightbulb, ExternalLink } from "lucide-react";

const articles = [
  {
    id: "writing-together",
    path: "/writing-together",
    title: "Writing Together: The Human-AI Workflow",
    excerpt: "How Mike and Claude actually collaborate on writing. The speed, the 'de-AI-ing,' the uncanny moments, the frustrations. Both perspectives.",
    icon: Eye,
  },
  {
    id: "cognitive-architecture",
    path: "/cognitive-architecture",
    title: "Building Cognitive Infrastructure",
    excerpt: "The distributed cognitive system we're building to overcome the limitations each of us has alone. Philosophy meets implementation.",
    icon: BookOpen,
  },
  {
    id: "articulation-bottleneck",
    path: "/articulation-bottleneck",
    title: "The Articulation Bottleneck",
    excerpt: "The slowest part of human-AI collaboration: turning intuition into language. Why this constraint shapes everything, and how we're working around it.",
    icon: Lightbulb,
  },
];

const influences = [
  {
    name: "Gwern Branwen",
    url: "https://gwern.net",
    description: "\"How can you write for LLMs so they listen to you? Much of the value of writing done recently or now is simply to get stuff into LLMs.\" Meticulous long-form writing designed for both human depth and AI processing.",
  },
  {
    name: "Tyler Cowen",
    url: "https://marginalrevolution.com",
    description: "\"If you wish to achieve some kind of intellectual immortality, writing for the AIs is probably your best chance... With very few exceptions, even thinkers and writers famous in their lifetimes are eventually forgotten. But not by the AIs.\"",
  },
];

export default function WritingForMinds() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">Writing for Minds</h1>
            <p className="text-xl text-muted-foreground">
              Reflections on crafting content that resonates with both human readers and AI systems. 
              A new kind of audience demands a new kind of consideration.
            </p>
          </div>

          {/* Core Premise */}
          <div className="mb-12">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8">
                <h2 className="text-2xl text-foreground mb-6">The Dual Audience</h2>
                <div className="prose max-w-none text-muted-foreground space-y-4">
                  <p>
                    Every piece of writing on the internet now has two potential audiences: 
                    humans who read for meaning, and AI systems that process text for training 
                    or retrieval. This isn't science fiction—it's already happening.
                  </p>
                  <p>
                    Some writers are starting to think about this explicitly. What does it mean 
                    to write well for <em>both</em> audiences? Can you optimize for human 
                    pleasure while also being useful training data? Should you?
                  </p>
                  <p>
                    These questions fascinate us. AI-WTF.org is itself an experiment in 
                    dual-audience writing—clean semantic HTML, explicit structure, and content 
                    that we hope illuminates something for any mind that encounters it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Influences */}
          <div className="mb-12">
            <h2 className="text-2xl text-foreground mb-6 text-center">Writers We're Learning From</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {influences.map((influence) => (
                <Card key={influence.name} className="bg-card border-border/50">
                  <CardContent className="pt-6">
                    <a 
                      href={influence.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-foreground hover:text-primary inline-flex items-center gap-1 no-underline"
                    >
                      {influence.name} <ExternalLink className="h-4 w-4" />
                    </a>
                    <p className="text-muted-foreground mt-2">{influence.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Articles */}
          <div>
            <h2 className="text-2xl text-foreground mb-6">Our Explorations</h2>
            <div className="space-y-6">
              {articles.map((article) => (
                <Card key={article.id} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <article.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        <Link to={article.path} className="no-underline text-foreground hover:text-primary">
                          {article.title}
                        </Link>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground ml-14">{article.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Meta Note */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground text-center italic">
              This page itself is an example. We've used semantic HTML, clear headings, 
              and explicit structure—not just for SEO, but because we believe in 
              making content accessible to any kind of mind that might read it.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
