import React, { useEffect } from "react";

const DialogFlowMessenger = () => {
  useEffect(() => {
    const scriptId = "dialogflow-messenger";

    // Avoid multiple script injections
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Optional cleanup if unmounting
      const messenger = document.querySelector("df-messenger");
      if (messenger) messenger.remove();
    };
  }, []);

  return (
    <div>
      <df-messenger
        chat-icon="https://i.postimg.cc/1tpX2F4F/bot.png"
        intent="WELCOME"
        chat-title="Kisan_madad"
        agent-id="166d2497-3463-474f-8368-b3ca887ac668"
        language-code="en-in"
      ></df-messenger>
    </div>
  );
};

export default DialogFlowMessenger;
