import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics configuration
const ANALYTICS_CONFIG = {
  // Set to true to enable analytics
  enabled: false, // Change to true after setting up GoatCounter
  
  // Your GoatCounter code (e.g., 'ai-wtf' for ai-wtf.goatcounter.com)
  goatcounterCode: '', // Add your code here
  
  // Custom settings
  allowLocal: false, // Track on localhost (useful for testing)
  allowBot: false,   // Track bots/crawlers
};

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Don't load analytics if not enabled
    if (!ANALYTICS_CONFIG.enabled) {
      console.log('Analytics disabled. Enable in src/components/Analytics.tsx');
      return;
    }

    // Don't load if no code is set
    if (!ANALYTICS_CONFIG.goatcounterCode) {
      console.warn('GoatCounter code not set. Add it in src/components/Analytics.tsx');
      return;
    }

    // Load GoatCounter script
    const script = document.createElement('script');
    script.src = '//gc.zgo.at/count.js';
    script.async = true;
    script.setAttribute(
      'data-goatcounter',
      `https://${ANALYTICS_CONFIG.goatcounterCode}.goatcounter.com/count`
    );
    
    if (ANALYTICS_CONFIG.allowLocal) {
      script.setAttribute('data-goatcounter-settings', JSON.stringify({
        allow_local: true,
        allow_bot: ANALYTICS_CONFIG.allowBot,
      }));
    }

    document.head.appendChild(script);

    console.log('Analytics tracking enabled');

    return () => {
      // Cleanup: remove script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Track route changes for SPA navigation
  useEffect(() => {
    if (!ANALYTICS_CONFIG.enabled || !window.goatcounter) {
      return;
    }

    // Tell GoatCounter about the route change
    if (window.goatcounter?.count) {
      window.goatcounter.count({
        path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}

// TypeScript declaration for GoatCounter global
declare global {
  interface Window {
    goatcounter?: {
      count: (vars?: { path?: string }) => void;
    };
  }
}

