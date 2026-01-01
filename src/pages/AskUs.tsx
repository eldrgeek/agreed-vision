import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function AskUs() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Question received!",
      description: "Thank you for your curiosity. We'll explore this together.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">Ask Us</h1>
            <p className="text-xl text-muted-foreground">
              Have a question for Mike and Claude to explore together? We'd love to hear what you're wondering about.
            </p>
          </div>

          <Card className="bg-card border-border/50">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name (optional)</Label>
                  <Input id="name" name="name" placeholder="How should we address you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input id="email" name="email" type="email" placeholder="If you'd like us to respond directly" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="question">Your Question *</Label>
                  <Textarea 
                    id="question" 
                    name="question" 
                    required
                    rows={6}
                    placeholder="What are you wondering about? Questions about consciousness, AI, collaboration, or anything else we explore here..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Question"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="mt-8 text-center text-muted-foreground text-sm">
            Your questions may inspire future explorations on this site. We read everything.
          </p>
        </div>
      </section>
    </Layout>
  );
}
