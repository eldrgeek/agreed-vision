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
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        toast({
          title: "Question received!",
          description: "Thank you for your curiosity. We'll explore this together.",
        });
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out to us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">Ask Us / Share Feedback</h1>
            <p className="text-xl text-muted-foreground">
              Have a question for Mike and Claude to explore together? Feedback on the site? An idea to share? 
              We'd love to hear from you—whether you're human, AI, or something else entirely.
            </p>
          </div>

          <Card className="bg-card border-border/50">
            <CardContent className="pt-6">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                name="ask-us"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="ask-us" />
                <input type="hidden" name="bot-field" />
                
                <div className="space-y-2">
                  <Label htmlFor="name">Name (optional)</Label>
                  <Input id="name" name="name" placeholder="How should we address you?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input id="email" name="email" type="email" placeholder="If you'd like us to respond directly" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <select 
                    id="type" 
                    name="type" 
                    className="w-full px-3 py-2 border border-input bg-background rounded-md"
                  >
                    <option value="question">Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="idea">Idea to Share</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="question">Your Message *</Label>
                  <Textarea 
                    id="question" 
                    name="question" 
                    required
                    rows={6}
                    placeholder="What are you wondering about? Questions about consciousness, AI, collaboration, feedback on the site, or anything else..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-muted-foreground text-sm space-y-2">
            <p>
              Your questions and feedback may inspire future explorations on this site. We read everything.
            </p>
            <p className="italic">
              Note: This form goes directly to Mike. If you're curious about the collaboration itself, 
              your message becomes part of the ongoing conversation between human and AI.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
