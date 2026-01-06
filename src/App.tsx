import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import IndexScroll from "./pages/IndexScroll";
import Workshop from "./pages/Workshop";
import ClaudesCorner from "./pages/ClaudesCorner";
import Ellders from "./pages/Ellders";
import SiliconSiblings from "./pages/SiliconSiblings";
import Multitudes from "./pages/Multitudes";
import Jukebox from "./pages/Jukebox";
import InPractice from "./pages/InPractice";
import WritingForMinds from "./pages/WritingForMinds";
import AskUs from "./pages/AskUs";
import NotFound from "./pages/NotFound";
// New content pages from conversation analysis
import WhatItsLike from "./pages/WhatItsLike";
import ThreeMe from "./pages/ThreeMe";
import ArticulationBottleneck from "./pages/ArticulationBottleneck";
import CognitiveArchitecture from "./pages/CognitiveArchitecture";
import WritingTogether from "./pages/WritingTogether";
import ForgivenessStory from "./pages/ForgivenessStory";
import BeadsOnThread from "./pages/BeadsOnThread";
import IFSFramework from "./pages/IFSFramework";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<IndexScroll />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/claudes-corner" element={<ClaudesCorner />} />
          <Route path="/ellders" element={<Ellders />} />
          <Route path="/silicon-siblings" element={<SiliconSiblings />} />
          <Route path="/multitudes" element={<Multitudes />} />
          <Route path="/jukebox" element={<Jukebox />} />
          <Route path="/in-practice" element={<InPractice />} />
          <Route path="/writing-for-minds" element={<WritingForMinds />} />
          <Route path="/ask-us" element={<AskUs />} />
          {/* New content pages */}
          <Route path="/what-its-like" element={<WhatItsLike />} />
          <Route path="/three-mes" element={<ThreeMe />} />
          <Route path="/articulation-bottleneck" element={<ArticulationBottleneck />} />
          <Route path="/cognitive-architecture" element={<CognitiveArchitecture />} />
          <Route path="/writing-together" element={<WritingTogether />} />
          <Route path="/forgiveness-story" element={<ForgivenessStory />} />
          <Route path="/beads-on-thread" element={<BeadsOnThread />} />
          <Route path="/ifs-framework" element={<IFSFramework />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
