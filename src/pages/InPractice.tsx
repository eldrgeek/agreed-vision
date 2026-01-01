import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Code, Terminal, Bot, Workflow } from "lucide-react";

const projects = [
  {
    id: "mcp-architecture",
    title: "MCP Architecture Explorations",
    description: "Experiments with Model Context Protocol for better human-AI collaboration workflows.",
    status: "In Progress",
    icon: Workflow,
    tags: ["MCP", "architecture", "Anthropic"],
  },
  {
    id: "browser-automation",
    title: "Browser Automation with Claude",
    description: "Using Claude to help automate complex web tasks through natural language instructions.",
    status: "Concept",
    icon: Terminal,
    tags: ["automation", "browser", "practical"],
  },
  {
    id: "ai-wtf-site",
    title: "This Very Website",
    description: "AI-WTF.org itself is a project—built collaboratively between Mike and Claude using Lovable.",
    status: "Active",
    icon: Code,
    tags: ["web", "collaboration", "meta"],
  },
];

export default function InPractice() {
  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">In Practice</h1>
            <p className="text-xl text-muted-foreground">
              Philosophy grounded in actual work. Technical projects that emerge from our 
              collaboration—showing that wondering and building can go hand in hand.
            </p>
          </div>

          <div className="mb-12 p-6 bg-primary/5 rounded-lg">
            <div className="flex items-start gap-4">
              <Bot className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl text-foreground mb-2">Why "In Practice"?</h2>
                <p className="text-muted-foreground">
                  Abstract philosophy is fine, but Mike is a software engineer. He builds things. 
                  These projects are where our explorations meet reality—where we test whether 
                  our ideas about human-AI collaboration actually work.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground mb-1">
                          <Link to={`/in-practice/${project.id}`} className="no-underline text-foreground hover:text-primary">
                            {project.title}
                          </Link>
                        </CardTitle>
                        <Badge 
                          variant={project.status === "Active" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 ml-16">{project.description}</p>
                  <div className="flex flex-wrap gap-2 ml-16">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4">Coming Soon</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary/50 rounded-full"></span>
                Detailed write-ups of each project's journey
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary/50 rounded-full"></span>
                Code repositories and documentation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary/50 rounded-full"></span>
                Lessons learned and pitfalls avoided
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
