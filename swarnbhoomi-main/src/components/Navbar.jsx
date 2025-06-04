import React, { useEffect, useState } from "react";
import { Menu, Bell, Mic, Image as ImageIcon, Search, LogOut, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Popover = ({ children, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="text-white p-2 hover:bg-white/10 rounded-full transition">
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
  const navigate = useNavigate();

  const [notifications] = useState([
    t("notification1"),
    t("notification2"),
    t("notification3"),
  ]);
  const [searchText, setSearchText] = useState("");
  const [recognition, setRecognition] = useState(null);
  const [avatarOpen, setAvatarOpen] = useState(false);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SpeechRecognition();
      recog.lang = "hi-IN";
      recog.continuous = true;
      recog.interimResults = true;

      recog.onresult = (event) => {
        let interimTranscript = "";
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

  const handleLogout = () => navigate("/");

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-green-900 shadow-md z-40 px-4 sm:px-6">
      <div className="flex items-center justify-between h-full">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="text-white p-2 md:hidden hover:bg-white/10 rounded-full"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <img
            src="/logo-preview.png"
            alt="Logo"
            className="h-8 w-auto hidden sm:block"
          />
        </div>

        {/* Center: Fixed Width Search */}
        <div className="hidden sm:flex items-center justify-center w-72 bg-white rounded-full px-3 py-1 shadow-inner">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={t("search_placeholder") || "Search..."}
            className="flex-1 px-2 py-1 outline-none text-sm bg-transparent text-gray-800"
          />
          <button className="p-1 text-gray-600 hover:text-black" onClick={handleVoiceInput}>
            <Mic className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-600 hover:text-black">
            <ImageIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Notifications + Avatar */}
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

          <div className="relative">
            <button onClick={() => setAvatarOpen(!avatarOpen)}>
              <img
                src="https://api.dicebear.com/7.x/initials/svg?seed=U"
                alt="Avatar"
                className="h-9 w-9 rounded-full border-2 border-white shadow"
              />
            </button>
            {avatarOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-xl z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                      navigate("/dashboard/profile");
                      setAvatarOpen(false);
                    }}
                  >
                    <User size={16} /> Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
