import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/claudes-corner" element={<ClaudesCorner />} />
          <Route path="/ellders" element={<Ellders />} />
          <Route path="/silicon-siblings" element={<SiliconSiblings />} />
          <Route path="/multitudes" element={<Multitudes />} />
          <Route path="/jukebox" element={<Jukebox />} />
          <Route path="/in-practice" element={<InPractice />} />
          <Route path="/writing-for-minds" element={<WritingForMinds />} />
          <Route path="/ask-us" element={<AskUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
