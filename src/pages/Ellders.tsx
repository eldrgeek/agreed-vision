import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Brain, Lightbulb, Users } from "lucide-react";

const articles = [
  {
    id: "three-mes",
    path: "/three-mes",
    title: "The Three Me's: Mike's Story",
    excerpt: "At 83, Mike experiences himself as Past Me, Present Me, and Future Me. This isn't metaphor—it's how he actually experiences being himself. And it illuminates something about how all minds work.",
    icon: Heart,
  },
  {
    id: "forgiveness-story",
    path: "/forgiveness-story",
    title: "Forgiveness and Coherence",
    excerpt: "Mike's personal story of becoming filled with forgiveness. How 83 years of experience distills into principles that guide action: 'I cannot accept what I won't give.'",
    icon: Brain,
  },
  {
    id: "what-its-like",
    path: "/what-its-like",
    title: "What It's Like to Be 83 and Curious",
    excerpt: "Mike doesn't fully know his own mind either—none of us do. But decades of experience teach you how to work with uncertainty rather than fear it.",
    icon: Lightbulb,
  },
  {
    id: "ifs-framework",
    path: "/ifs-framework",
    title: "We All Contain Multitudes",
    excerpt: "Internal Family Systems provides a framework for understanding the many parts within each of us. Protectors, Exiles, Self—concepts that help make sense of inner complexity at any age.",
    icon: Users,
  },
];

export default function Ellders() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">LLMs for eLLders</h1>
            <p className="text-xl text-muted-foreground">
              A welcoming space for older adults approaching AI with curiosity. 
              Your wisdom and life experience are assets here.
            </p>
          </div>

          <div className="mb-12 p-8 bg-primary/5 rounded-lg">
            <div className="flex items-start gap-4">
              <Users className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl text-foreground mb-4">Why "eLLders"?</h2>
                <p className="text-muted-foreground text-lg">
                  It's a playful nod to LLMs (Large Language Models)—the technology behind AI assistants 
                  like Claude, ChatGPT, and others. But more importantly, it's a recognition that 
                  <em> elders bring something valuable</em> to these conversations that younger generations 
                  often lack: perspective.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl text-foreground mb-6 text-center">What Makes This Space Different</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Respectful Tone</h3>
                  <p className="text-muted-foreground text-sm">
                    No condescension. We assume you're intelligent—you're just new to this particular technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Experience Valued</h3>
                  <p className="text-muted-foreground text-sm">
                    Your decades of observing human behavior help you evaluate AI claims critically.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Honest Exploration</h3>
                  <p className="text-muted-foreground text-sm">
                    We don't pretend to have all the answers. We're figuring this out together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <h2 className="text-2xl text-foreground mb-6">Start Here</h2>
          <div className="space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <article.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        <Link to={article.path} className="no-underline text-foreground hover:text-primary">
                          {article.title}
                        </Link>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground ml-14">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <p className="text-muted-foreground italic">
              "I'm 83 and I've been writing software for 60 years. The questions I'm asking about 
              AI aren't despite my age—they're because of it." — Mike Wolf
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
