import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (!document.getElementById("omnidimension-web-widget")) {
      const script = document.createElement("script");
      script.id = "omnidimension-web-widget";
      script.async = true;
      script.src = "https://backend.omnidim.io/web_widget.js?secret_key=d0bbff89726e59e9921f2fc3dc24d30c";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Chatbot and Call</h1>
      <p className="mb-8 text-lg text-gray-700 text-center max-w-xl">You can chat or call with our AI assistant for any questions or help you need as a parent.</p>
    </div>
  );
};

export default Chatbot; 