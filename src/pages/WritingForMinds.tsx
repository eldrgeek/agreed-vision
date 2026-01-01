import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Eye, Lightbulb, ExternalLink } from "lucide-react";

const articles = [
  {
    id: "writing-for-both",
    title: "Writing for Human and AI Readers",
    excerpt: "What changes when you know your words will be read by minds very different from your own?",
    icon: Eye,
  },
  {
    id: "semantic-html-matters",
    title: "Why Semantic HTML Matters",
    excerpt: "Clean structure isn't just for screen readers—it's for any mind trying to understand your content.",
    icon: BookOpen,
  },
  {
    id: "practical-tips",
    title: "Practical Tips for Dual-Audience Writing",
    excerpt: "Concrete guidance for those who want their writing to be accessible to AI systems.",
    icon: Lightbulb,
  },
];

const influences = [
  {
    name: "Gwern",
    url: "https://gwern.net",
    description: "Meticulous long-form writing designed for both human depth and AI processing.",
  },
  {
    name: "Tyler Cowen",
    url: "https://marginalrevolution.com",
    description: "Economist who explicitly considers AI readers as part of his audience.",
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
                        <Link to={`/writing-for-minds/${article.id}`} className="no-underline text-foreground hover:text-primary">
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
