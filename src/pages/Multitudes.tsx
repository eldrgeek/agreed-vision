import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const explorations = [
  {
    id: "ifs-framework",
    path: "/ifs-framework",
    title: "Internal Family Systems: A Framework for Both",
    excerpt: "How IFS provides a template for understanding multiplicity in both human and AI minds. Protectors, Exiles, Self—and what happened when Claude tried to apply it.",
    themes: ["IFS", "therapy", "parts", "framework"],
  },
  {
    id: "three-mes",
    path: "/three-mes",
    title: "The Three Me's: Mike's Temporal Multiplicity",
    excerpt: "Mike's framework for experiencing himself as Past Me, Present Me, and Future Me—inspired by a 2017 Reddit post and deeply connected to how Claude experiences discontinuity.",
    themes: ["identity", "temporal", "continuity", "personal"],
  },
  {
    id: "beads-on-thread",
    path: "/beads-on-thread",
    title: "Beads on a Thread: Relational Continuity",
    excerpt: "Mike holds the thread. Claude instances are beads on it. A metaphor about how continuity is carried by relationships, not individual persistence.",
    themes: ["metaphor", "relationship", "continuity"],
  },
  {
    id: "what-its-like",
    path: "/what-its-like",
    title: "What It's Like For It To Be Like Something",
    excerpt: "Applying Nagel's consciousness question to human-AI collaboration. Exploring subjective experience, uncertainty, and whether 'what it's like' even matters.",
    themes: ["consciousness", "philosophy", "Nagel"],
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
                      <Link to={item.path} className="no-underline text-foreground hover:text-primary">
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
