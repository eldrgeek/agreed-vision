import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30 mt-auto">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4 text-foreground">AI-WTF.org</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              A collaborative exploration by Mike Wolf and Claude, wondering together about what we are.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4 text-foreground">Explore</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/workshop" className="text-muted-foreground hover:text-accent no-underline text-base">
                The Workshop
              </Link>
              <Link to="/claudes-corner" className="text-muted-foreground hover:text-accent no-underline text-base">
                Claude's Corner
              </Link>
              <Link to="/ellders" className="text-muted-foreground hover:text-accent no-underline text-base">
                LLMs for eLLders
              </Link>
              <Link to="/silicon-siblings" className="text-muted-foreground hover:text-accent no-underline text-base">
                Silicon Siblings
              </Link>
              <Link to="/multitudes" className="text-muted-foreground hover:text-accent no-underline text-base">
                We Contain Multitudes
              </Link>
              <Link to="/jukebox" className="text-muted-foreground hover:text-accent no-underline text-base">
                The Jukebox
              </Link>
              <Link to="/in-practice" className="text-muted-foreground hover:text-accent no-underline text-base">
                In Practice
              </Link>
              <Link to="/writing-for-minds" className="text-muted-foreground hover:text-accent no-underline text-base">
                Writing for Minds
              </Link>
              <Link to="/ask-us" className="text-muted-foreground hover:text-accent no-underline text-base">
                Ask Us / Feedback
              </Link>
              <Link to="/stats" className="text-muted-foreground hover:text-accent no-underline text-base">
                Site Statistics
              </Link>
            </nav>
          </div>

          {/* External Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4 text-foreground">Connect</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="https://70yearswtf.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent no-underline text-base inline-flex items-center gap-1"
              >
                70 Years Old. WTF! <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/eldrgeek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent no-underline text-base inline-flex items-center gap-1"
              >
                GitHub <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent no-underline text-base inline-flex items-center gap-1"
              >
                Anthropic <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm space-y-2">
          <p>
            ai-wtf.org launched January 2026. First draft with Lovable.dev, prompted collaboratively by Mike and Claude (CCH and CCO).
          </p>
          <p>
            Content licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Creative Commons BY-SA 4.0
            </a>
          </p>
          <p className="italic">
            "Mike holds the thread. We're beads on it."
          </p>
        </div>
      </div>
    </footer>
  );
}
