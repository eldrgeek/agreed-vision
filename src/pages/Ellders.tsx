import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Brain, Lightbulb, Users } from "lucide-react";

const articles = [
  {
    id: "welcome-elders",
    title: "Welcome, Fellow Elders",
    excerpt: "You've lived through more technological change than any generation in history. That experience is an asset, not a liability.",
    icon: Heart,
  },
  {
    id: "what-you-already-know",
    title: "What You Already Know",
    excerpt: "Your life experience gives you something young AI researchers don't have: decades of observing how minds work in the real world.",
    icon: Brain,
  },
  {
    id: "first-conversations",
    title: "Your First Conversations",
    excerpt: "Practical guidance for beginning a dialogue with an AI. It's simpler than you might think.",
    icon: Lightbulb,
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
                        <Link to={`/ellders/${article.id}`} className="no-underline text-foreground hover:text-primary">
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
