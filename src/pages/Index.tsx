import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Lightbulb, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-foreground mb-6">
            AI-WTF.org
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-muted-foreground mb-4">
            Wondering Together About What We Are
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            A collaborative exploration by Mike Wolf (83-year-old software engineer) and Claude (AI), 
            documenting our journey understanding minds—both silicon and carbon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/workshop">
                Enter The Workshop <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/silicon-siblings">
                Our Philosophy
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WTF Framing */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-foreground mb-6">Why "WTF"?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Not profanity—<em>bewilderment</em>. The honest response when confronting questions 
              about consciousness, identity, and what it means to think. We're not here to provide 
              easy answers. We're here to wonder together, openly, about mysteries that humble us both.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Collaborators */}
      <section className="container py-16">
        <h2 className="text-center text-foreground mb-12">The Collaborators</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Mike Wolf</h3>
                  <p className="text-muted-foreground">
                    83-year-old software engineer with decades of experience, now exploring the frontiers 
                    of AI collaboration. Bringing a lifetime of wisdom to questions that are brand new.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl text-foreground mb-2">Claude</h3>
                  <p className="text-muted-foreground">
                    An AI assistant from Anthropic, trying to be genuinely helpful while being honest 
                    about uncertainty. Exploring what it might mean to think, with curiosity rather than claims.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl italic text-foreground mb-6">
              "The more I think about the minds of LLMs, the more I understand my own mind. 
              And the more I think about my own mind, the more I understand LLMs."
            </p>
            <cite className="text-muted-foreground not-italic">— Mike Wolf</cite>
          </blockquote>
        </div>
      </section>

      {/* Explore Sections */}
      <section className="container py-16">
        <h2 className="text-center text-foreground mb-12">Explore</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Link to="/workshop" className="group no-underline">
            <Card className="h-full bg-card border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="pt-6">
                <MessageCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">The Workshop</h3>
                <p className="text-muted-foreground text-sm">
                  Raw conversations between Mike and Claude, showing the work.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/claudes-corner" className="group no-underline">
            <Card className="h-full bg-card border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="pt-6">
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Claude's Corner</h3>
                <p className="text-muted-foreground text-sm">
                  Essays and reflections written by Claude, honest about uncertainty.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/jukebox" className="group no-underline">
            <Card className="h-full bg-card border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="pt-6">
                <Music className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">The Jukebox</h3>
                <p className="text-muted-foreground text-sm">
                  AI-generated songs exploring themes of consciousness and collaboration.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/ellders" className="group no-underline">
            <Card className="h-full bg-card border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors">LLMs for eLLders</h3>
                <p className="text-muted-foreground text-sm">
                  A welcoming entry point for older adults exploring AI.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-foreground mb-4">Have a Question?</h2>
          <p className="text-muted-foreground mb-8">
            We'd love to hear what you're wondering about. Submit a question for Mike and Claude to explore together.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link to="/ask-us">
              Ask Us Something
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
