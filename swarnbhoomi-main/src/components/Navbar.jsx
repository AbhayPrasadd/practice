import React, { useEffect, useState } from "react";
import { Menu, Bell, Mic, Image as ImageIcon, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const Popover = ({ children, content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="relative text-white p-2 hover:bg-white/10 rounded-full transition">
        {children}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-xl rounded-xl p-4 z-50 animate-fade-in">
          {content}
        </div>
      )}
    </div>
  );
};

const Navbar = ({ setIsSidebarOpen }) => {
  const { t } = useTranslation();
  const [notifications] = useState([
    t("notification1"),
    t("notification2"),
    t("notification3"),
  ]);
  const [searchText, setSearchText] = useState("");
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SpeechRecognition();
      recog.lang = 'hi-IN';
      recog.continuous = true;
      recog.interimResults = true;

      recog.onresult = (event) => {
        let interimTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          interimTranscript += event.results[i][0].transcript;
        }
        setSearchText(interimTranscript);
      };

      setRecognition(recog);
    }
  }, []);

  const handleVoiceInput = () => {
    if (recognition) recognition.start();
    else alert("Speech recognition not supported in this browser.");
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-green-900 to-green-800 shadow-lg flex items-center justify-between px-4 md:px-6 z-40">
      {/* Left: Logo & Menu */}
      <div className="flex items-center gap-3">
        <button
          className="text-white p-2 md:hidden hover:bg-white/10 rounded-full transition"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <img
          src="/logo-preview.png"
          alt="Logo"
          className="h-9 w-auto hidden md:block drop-shadow-md"
        />
      </div>

      {/* Center: Search */}
      <div className="flex items-center flex-1 mx-4 max-w-xl bg-white/90 rounded-full px-4 py-1 shadow-inner focus-within:ring-2 ring-green-600">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={t("search_placeholder") || "Search..."}
          className="flex-1 px-2 py-1 outline-none text-sm bg-transparent text-gray-800"
        />
        <button className="p-1 text-gray-700 hover:text-black" onClick={handleVoiceInput}>
          <Mic className="w-5 h-5" />
        </button>
        <button className="p-1 text-gray-700 hover:text-black">
          <ImageIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Right: Notification */}
      <div className="flex items-center gap-3">
        <Popover
          content={
            <div>
              <div className="text-lg font-semibold text-gray-700">{t("notifications")}</div>
              <ul className="mt-2 space-y-2">
                {notifications.length > 0 ? (
                  notifications.map((note, index) => (
                    <li key={index} className="text-gray-600 text-sm border-b py-1">
                      {note}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 text-sm">{t("no_notifications")}</li>
                )}
              </ul>
            </div>
          }
        >
          <Bell className="h-6 w-6 text-white" />
        </Popover>
      </div>
    </nav>
  );
};

export default Navbar;
