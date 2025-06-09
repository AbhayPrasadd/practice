import { Home, Leaf, PlusCircle, User, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomTabBar = ({ isSidebarOpen }) => {
  const location = useLocation();

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 bg-green-900 text-white shadow-md border-t border-green-800 z-30 transition-all duration-300 ${
        isSidebarOpen ? "mb-[calc(100vh-4rem)]" : ""
      }`}
    >
      <div className="flex justify-around items-center py-2">
        <Link to="/dashboard">
          <div className="flex flex-col items-center">
            <Home size={20} className={location.pathname === "/dashboard" ? "text-yellow-300" : "text-white"} />
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link to="/dashboard/advisory">
          <div className="flex flex-col items-center">
            <Leaf size={20} className={location.pathname === "/dashboard/advisory" ? "text-yellow-300" : "text-white"} />
            <span className="text-xs">Advisory</span>
          </div>
        </Link>
        <Link to="/dashboard/community">
          <div className="flex flex-col items-center scale-125">
            <PlusCircle size={28} className="text-yellow-300" />
            <span className="text-xs">Ask</span>
          </div>
        </Link>
        <Link to="/dashboard/alerts">
          <div className="flex flex-col items-center">
            <MessageSquare size={20} className={location.pathname === "/dashboard/alerts" ? "text-yellow-300" : "text-white"} />
            <span className="text-xs">Alerts</span>
          </div>
        </Link>
        <Link to="/dashboard/profile">
          <div className="flex flex-col items-center">
            <User size={20} className={location.pathname === "/dashboard/profile" ? "text-yellow-300" : "text-white"} />
            <span className="text-xs">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomTabBar;
