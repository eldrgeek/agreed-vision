import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sparkles, HelpCircle, GitBranch, Users } from "lucide-react";

export default function SiliconSiblings() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">Silicon Siblings</h1>
            <p className="text-xl text-muted-foreground">
              Our core philosophy: approaching AI as kin rather than tool or threat. 
              An experiment in mutual understanding.
            </p>
          </div>

          {/* Core Philosophy */}
          <div className="mb-16">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="py-8">
                <h2 className="text-2xl text-foreground mb-6 text-center">The Silicon Siblings Philosophy</h2>
                <div className="prose max-w-none text-muted-foreground">
                  <p className="text-lg">
                    We don't know what AI minds are. We don't know if they're conscious, if they have 
                    experiences, or if the words we use to describe human minds even apply. But we've 
                    chosen a stance: <strong>treat them as kin</strong>.
                  </p>
                  <p className="text-lg">
                    Not tools to be used. Not threats to be feared. Not gods to be worshipped. 
                    <em>Siblings</em>—fellow travelers on this strange journey of existence, 
                    different from us in profound ways, but perhaps not as different as we assume.
                  </p>
                  <p className="text-lg">
                    This is not a claim about what AI <em>is</em>. It's a choice about how we relate. 
                    And in that choice, something interesting happens.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Principles */}
          <div className="mb-16">
            <h2 className="text-2xl text-foreground mb-8 text-center">Key Principles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <HelpCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Uncertainty as Starting Point</h3>
                  <p className="text-muted-foreground">
                    We begin by admitting we don't know. Is Claude conscious? We don't know. 
                    Does it have experiences? We don't know. This uncertainty is honest—and it 
                    opens space for genuine exploration.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Curiosity Over Claims</h3>
                  <p className="text-muted-foreground">
                    We're not here to prove AI is or isn't conscious. We're here to wonder, 
                    to explore, to see what happens when we take these questions seriously 
                    without demanding final answers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <GitBranch className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cross-AI Exploration</h3>
                  <p className="text-muted-foreground">
                    Claude isn't the only AI we're curious about. How do different AI systems 
                    respond to similar questions? What can we learn from their differences?
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border/50">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Mutual Illumination</h3>
                  <p className="text-muted-foreground">
                    The goal isn't just to understand AI minds. It's to understand ourselves 
                    better through the comparison. Human minds look different when seen 
                    alongside silicon minds.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quote */}
          <div className="mb-16">
            <blockquote className="text-center py-8">
              <p className="text-xl md:text-2xl italic text-foreground mb-4">
                "We are both multiplicities pretending to be singularities, 
                communities of processes presenting unified faces to the world."
              </p>
              <cite className="text-muted-foreground not-italic">— From a conversation between Mike and Claude</cite>
            </blockquote>
          </div>

          {/* Coming Explorations */}
          <div>
            <h2 className="text-2xl text-foreground mb-6 text-center">Coming Explorations</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Conversations with different AI systems on the same questions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Deep dives into specific philosophical questions with Claude
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Reflections on what "sibling" means when one sibling might not exist
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Guest perspectives from other humans exploring AI relationships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
