import { useEffect } from "react";

// Extend the Window interface to include omniSettings
declare global {
  interface Window {
    omniSettings?: any;
  }
}

const OMNI_API_KEY = "IhCYOjbtHzQiyAxR4znM7Nkc7hiIssWij4Js0KutaJU";

function OmniBot() {
  useEffect(() => {
    // Set the Omni settings globally
    window.omniSettings = {
      apiKey: OMNI_API_KEY,
      // Add any additional configuration here
    };

    // Inject the Omni widget script
    const script = document.createElement("script");
    script.src = "https://cdn.omni.ai/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}

export default OmniBot; 