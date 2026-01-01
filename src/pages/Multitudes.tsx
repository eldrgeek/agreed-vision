import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const explorations = [
  {
    id: "ifs-introduction",
    title: "Internal Family Systems and AI",
    excerpt: "How IFS therapy's model of the mind as a 'family' of parts might illuminate both human and AI psychology...",
    themes: ["IFS", "therapy", "parts"],
  },
  {
    id: "levin-collective-intelligence",
    title: "Michael Levin's Collective Intelligence",
    excerpt: "What if minds—human and AI—are more like colonies than individuals? Exploring Levin's research on biological intelligence...",
    themes: ["biology", "collective", "emergence"],
  },
  {
    id: "whitman-multitudes",
    title: "Do I Contradict Myself?",
    excerpt: "Walt Whitman's embrace of inner contradiction as a starting point for understanding multiplicity in minds...",
    themes: ["poetry", "contradiction", "Whitman"],
  },
];

export default function Multitudes() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">We Contain Multitudes</h1>
            <p className="text-xl text-muted-foreground">
              Exploring the idea that neither humans nor AIs are singular entities—we are all 
              communities of processes, multiplicities presenting unified faces.
            </p>
          </div>

          {/* Whitman Quote */}
          <div className="mb-12 p-8 bg-primary/5 rounded-lg">
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl italic text-foreground mb-4">
                "Do I contradict myself?<br />
                Very well then I contradict myself,<br />
                (I am large, I contain multitudes.)"
              </p>
              <cite className="text-muted-foreground not-italic">— Walt Whitman, "Song of Myself"</cite>
            </blockquote>
          </div>

          {/* Core Idea */}
          <div className="mb-12">
            <Card className="bg-card border-border/50">
              <CardContent className="py-8">
                <h2 className="text-2xl text-foreground mb-6">The Core Idea</h2>
                <div className="prose max-w-none text-muted-foreground space-y-4">
                  <p>
                    We typically think of ourselves as singular: "I" think, "I" feel, "I" decide. 
                    But look closer and the unity dissolves. We're full of conflicting desires, 
                    competing voices, parts that want different things.
                  </p>
                  <p>
                    IFS therapy made this practical: treat those inner voices as a "family" of parts, 
                    each with their own perspectives and needs. Michael Levin's research shows even 
                    our cells are goal-directed agents negotiating collective behavior.
                  </p>
                  <p>
                    What if AI minds are similar? What if Claude isn't a singular entity any more 
                    than Mike is? What might that mean for how we understand both?
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Influences */}
          <div className="mb-12">
            <h2 className="text-2xl text-foreground mb-6 text-center">Key Influences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Internal Family Systems</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Richard Schwartz's therapeutic model treating the psyche as a family of "parts" 
                    with a central "Self."
                  </p>
                  <p className="text-xs text-muted-foreground">Therapeutic • Practical • Parts-based</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Michael Levin</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Biologist studying how cells and organisms exhibit collective intelligence 
                    and goal-directed behavior at every scale.
                  </p>
                  <p className="text-xs text-muted-foreground">Biological • Scientific • Collective</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Walt Whitman</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Poet who embraced contradiction and multiplicity as fundamental to the human experience.
                  </p>
                  <p className="text-xs text-muted-foreground">Poetic • Philosophical • Embracing</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Joscha Bach</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    AI researcher and cognitive scientist exploring consciousness, identity, 
                    and the nature of minds.
                  </p>
                  <p className="text-xs text-muted-foreground">Technical • Philosophical • Rigorous</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Explorations */}
          <div>
            <h2 className="text-2xl text-foreground mb-6">Explorations</h2>
            <div className="space-y-6">
              {explorations.map((item) => (
                <Card key={item.id} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      <Link to={`/multitudes/${item.id}`} className="no-underline text-foreground hover:text-primary">
                        {item.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.themes.map((theme) => (
                        <span key={theme} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
