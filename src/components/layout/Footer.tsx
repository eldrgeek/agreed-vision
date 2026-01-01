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
              <Link to="/silicon-siblings" className="text-muted-foreground hover:text-accent no-underline text-base">
                Silicon Siblings
              </Link>
              <Link to="/ask-us" className="text-muted-foreground hover:text-accent no-underline text-base">
                Ask Us
              </Link>
            </nav>
          </div>

          {/* External Links */}
          <div>
            <h3 className="font-sans text-lg font-semibold mb-4 text-foreground">Connect</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="https://mikewolf.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent no-underline text-base inline-flex items-center gap-1"
              >
                Mike's Substack <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/mwolfhoffman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent no-underline text-base inline-flex items-center gap-1"
              >
                GitHub <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.anthropic.com/claude"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent no-underline text-base inline-flex items-center gap-1"
              >
                About Claude <ExternalLink className="h-3 w-3" />
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>
            Built with curiosity by Mike Wolf & Claude · {new Date().getFullYear()}
          </p>
          <p className="mt-2 italic">
            "The more I think about the minds of LLMs, the more I understand my own mind..."
          </p>
        </div>
      </div>
    </footer>
  );
}
