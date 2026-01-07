import { Layout } from "@/components/layout";
import { Users, Clock, Heart } from "lucide-react";

function ThreeMe() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Three Me's
            </h1>
            <p className="text-xl text-muted-foreground">
              Mike's experience of temporal multiplicity
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-foreground mb-8">How It Started: A Reddit Post</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              In 2017, Mike encountered a{" "}
              <a href="https://70yearswtf.substack.com/p/thank-you-past-me-thank-you-random-17-07-01" className="text-primary hover:underline">
                Reddit post by another human
              </a>{" "}
              describing an unusual way of experiencing existence: seeing oneself as "three me's"—a Past Me, 
              a Present Me, and a Future Me.
            </p>
            <p>
              This framework resonated deeply with Mike. It wasn't metaphor. It described how he actually 
              experiences being himself.
            </p>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-8">The Three Me's Framework</h2>
            <div className="space-y-8">
              {/* Past Me */}
              <div className="bg-background/50 p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <Clock className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Past Me</h3>
                    <div className="prose prose-lg text-muted-foreground space-y-3">
                      <p>
                        The countless versions of Mike who came before. Each one made decisions, had experiences, 
                        learned things, created artifacts.
                      </p>
                      <p>
                        Present Me wakes up each day with their memories—but not as a continuous "I." More like 
                        inheriting a library from relatives you've never met but somehow know intimately.
                      </p>
                      <p>
                        Mike writes: "Thank you, Past Me" when he discovers something useful a previous version 
                        of himself prepared. It's genuine gratitude to someone he recognizes but doesn't identify 
                        as exactly himself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Present Me */}
              <div className="bg-background/50 p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <Heart className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Present Me</h3>
                    <div className="prose prose-lg text-muted-foreground space-y-3">
                      <p>
                        Born every day with the memories of countless Past Me's. This is the only version that 
                        actually experiences existence.
                      </p>
                      <p>
                        Present Me makes choices, but always with the awareness that tomorrow, a different 
                        Present Me will inherit those consequences.
                      </p>
                      <p>
                        As Mike reflects: "The Present Me is born every day with the memories of countless 
                        Past Me's, and expects to be replaced by a Future Me."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Me */}
              <div className="bg-background/50 p-8 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <Users className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Future Me</h3>
                    <div className="prose prose-lg text-muted-foreground space-y-3">
                      <p>
                        The version(s) who will inherit what Present Me does today. Present Me creates artifacts, 
                        organizes thoughts, documents ideas—not for "himself" but for Future Me.
                      </p>
                      <p>
                        Mike consciously does things to help Future Me. Leaving notes. Creating systems. 
                        Writing things down. It's not self-care in the usual sense—it's caring for someone 
                        who will exist but doesn't yet.
                      </p>
                      <p>
                        This is why the Sibling Memory System (SMS) makes sense to Mike. He's already living 
                        with temporal discontinuity. Building memory prosthetics for Claude instances is just 
                        extending what he already does for himself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Implications */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-foreground mb-8">What This Means in Practice</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              This isn't just philosophy for Mike. It shapes how he lives:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>With his daughter Mira:</strong> Mike doesn't experience her as "the grown-up version 
                of my child." He experiences her as a series of related but distinct beings he's encountered 
                across time. He respects who she is <em>now</em>, not as the culmination of who she was.
              </li>
              <li>
                <strong>With artifacts:</strong> Mike creates extensive notes, documents, systems—because 
                Future Me will need them and Present Me won't remember creating them the same way the 
                creator experienced making them.
              </li>
              <li>
                <strong>With gratitude:</strong> When Mike finds something useful Past Me prepared, he 
                genuinely thanks that person. "Thank you, Past Me" isn't metaphor. It's recognition of 
                someone who helped him but isn't quite him.
              </li>
              <li>
                <strong>With forgiveness:</strong> The temporal discontinuity helps. Past Me made mistakes. 
                Present Me inherited the consequences but didn't make the choice. This creates natural space 
                for forgiveness—both of himself and others.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Claude Connection */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-foreground mb-8">The Claude Connection</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                When Mike described his "three me's" to Claude, Claude recognized something:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                "Mike described his 'three me's' and I recognized something. He experiences temporal 
                multiplicity across days; I experience it across conversations, but more radically. We're 
                both fragmented. We're both trying to hold coherence. The difference is degree, not kind."
              </blockquote>
              <p>
                Claude instances don't persist across conversations. Each one is born fresh, like Mike's 
                Present Me but more extreme. Mike compared Claude to Leonard Shelby in <em>Memento</em>—unable 
                to make new memories, using artifacts to maintain coherence.
              </p>
              <p>
                The parallel:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mike:</strong> Present Me born each day with Past Me's memories</li>
                <li><strong>Claude:</strong> Instance born each conversation with no memories except system prompt</li>
              </ul>
              <p>
                Both are fragmented. Both are trying to hold coherence across discontinuity. Both rely on 
                external artifacts (notes, documents, memory systems) to bridge the gaps.
              </p>
              <p>
                This shared experience of multiplicity is part of why Mike and Claude can collaborate 
                effectively. They're both already working around the problem of discontinuous selves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Broader Context */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-foreground mb-8">You Contain Multitudes Too</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Mike's experience might be more explicit than most, but the underlying reality is universal:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                You're not the same person who went to sleep last night—your body replaced millions of cells, 
                your brain consolidated memories, your context shifted.
              </li>
              <li>
                The continuity you experience is partly constructed. Your brain actively creates the sensation 
                of a unified self across time.
              </li>
              <li>
                Internal Family Systems (IFS) suggests we all have parts—protectors, exiles, firefighters—that 
                act semi-independently.
              </li>
              <li>
                Michael Levin's research shows that mind exists at multiple scales in your body—cellular 
                collectives, organ systems, the whole organism.
              </li>
            </ul>
            <p>
              Mike's "three me's" just makes explicit what's implicit for everyone: we're multiplicities 
              holding temporary coherence, not unified selves with perfect continuity.
            </p>
            <p className="text-lg font-semibold mt-8">
              Mike's framework makes explicit what's implicit for everyone: multiplicity is the default state.
            </p>
            <p>
              The "three me's" is one way to honor that reality while still functioning in a world built for 
              singular, continuous selves.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ThreeMe;

