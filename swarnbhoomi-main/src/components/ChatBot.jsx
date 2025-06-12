import { useEffect, useRef } from "react";

const ChatBot = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load the Dialogflow script
    if (!document.querySelector("script[src*='dialogflow-console']")) {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }

    // Append df-messenger only once
    if (!document.querySelector("df-messenger")) {
      const dfMessenger = document.createElement("df-messenger");

      dfMessenger.setAttribute("chat-icon", "https://i.postimg.cc/1tpX2F4F/bot.png");
      dfMessenger.setAttribute("intent", "WELCOME");
      dfMessenger.setAttribute("chat-title", "Kisan_madad");
      dfMessenger.setAttribute("agent-id", "166d2497-3463-474f-8368-b3ca887ac668");
      dfMessenger.setAttribute("language-code", "en-in");

      containerRef.current.appendChild(dfMessenger);

      // Wait for the Web Component to load and then inject styles
      setTimeout(() => {
        const shadowRoot = dfMessenger.shadowRoot;
        if (shadowRoot) {
          const style = document.createElement("style");
          style.textContent = `
            df-messenger-chat {
              bottom: 100px !important;
              max-height: 75vh !important;
              max-width: 95vw !important;
              border-radius: 12px !important;
            }

            df-messenger {
              --df-messenger-button-titlebar-color: #2e7d32;
              --df-messenger-font-color: #000;
              --df-messenger-chat-background-color: #fff;
              --df-messenger-user-message: #d0f0c0;
              --df-messenger-bot-message: #f0f0f0;
              bottom: 100px !important; /* push up from bottom nav */
            }

            @media (max-width: 480px) {
              df-messenger-chat {
                bottom: 110px !important;
                max-height: 70vh !important;
              }
            }
          `;
          shadowRoot.appendChild(style);
        }
      }, 2000); // wait for df-messenger to mount
    }
  }, []);

  return <div ref={containerRef}></div>;
};

export default ChatBot;
