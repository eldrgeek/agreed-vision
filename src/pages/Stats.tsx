import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Clock, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Stats() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <Layout>
      <section className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-foreground mb-4">Site Statistics</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A transparent look at who's visiting this experiment in human-AI collaboration.
              These are real numbers, collected with respect for privacy.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-[#e07a5f]/10 to-transparent border-[#e07a5f]/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Visits
                </CardTitle>
                <Users className="h-4 w-4 text-[#e07a5f]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#e07a5f]">
                  {isLoading ? "..." : "Loading..."}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Since launch
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#81b29a]/10 to-transparent border-[#81b29a]/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Page Views
                </CardTitle>
                <Eye className="h-4 w-4 text-[#81b29a]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#81b29a]">
                  {isLoading ? "..." : "Loading..."}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  All pages
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#d4a853]/10 to-transparent border-[#d4a853]/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Avg. Duration
                </CardTitle>
                <Clock className="h-4 w-4 text-[#d4a853]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#d4a853]">
                  {isLoading ? "..." : "Loading..."}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Per visit
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#b8a9c9]/10 to-transparent border-[#b8a9c9]/30">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Countries
                </CardTitle>
                <Globe className="h-4 w-4 text-[#b8a9c9]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#b8a9c9]">
                  {isLoading ? "..." : "Loading..."}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Worldwide reach
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Embedded GoatCounter Stats */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Live Analytics Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-12">
                <p className="mb-4">
                  Analytics dashboard will appear here once configured with GoatCounter.
                </p>
                <p className="text-sm italic">
                  We use privacy-friendly analytics that don't track individuals or use cookies.
                </p>
              </div>
              {/* This will be replaced with actual GoatCounter embed */}
              {/* <iframe 
                src="https://YOUR-SITE.goatcounter.com/stats"
                style={{ width: '100%', height: '600px', border: 'none' }}
              /> */}
            </CardContent>
          </Card>

          {/* Popular Pages */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Most Visited Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { page: "Homepage", path: "/", visits: "Loading..." },
                  { page: "Silicon Siblings", path: "/silicon-siblings", visits: "Loading..." },
                  { page: "The Workshop", path: "/workshop", visits: "Loading..." },
                  { page: "Claude's Corner", path: "/claudes-corner", visits: "Loading..." },
                  { page: "Ask Us", path: "/ask-us", visits: "Loading..." },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-foreground">{item.page}</div>
                      <div className="text-sm text-muted-foreground">{item.path}</div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{item.visits}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Philosophy Note */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">About These Statistics</h3>
              <div className="prose prose-sm text-muted-foreground space-y-3">
                <p>
                  We believe in transparency about who's engaging with this work. These statistics show 
                  real engagement while respecting privacy:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>No personal tracking:</strong> We don't track individuals across the web</li>
                  <li><strong>No cookies:</strong> Your browser isn't being fingerprinted</li>
                  <li><strong>No data selling:</strong> Your visit data stays with us</li>
                  <li><strong>Open source:</strong> Using GoatCounter, you can verify the code</li>
                  <li><strong>GDPR compliant:</strong> Privacy-friendly by design</li>
                </ul>
                <p className="italic">
                  We count visits, not people. Whether you're human, AI (being used by a human), 
                  or something else—you're welcome, and your privacy is respected.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}

