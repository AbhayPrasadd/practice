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
      <div className="flex justify-between items-center px-4 py-2">
        <Link to="/dashboard">
          <div className="flex flex-col items-center gap-1">
            <Home size={22} className={location.pathname === "/dashboard" ? "text-yellow-300" : "text-white"} />
            <span className="text-xs">Home</span>
          </div>
        </Link>

        <Link to="/dashboard/farmingAlerts">
          <div className="flex flex-col items-center gap-1">
            <MessageSquare
              size={22}
              className={location.pathname === "/dashboard/farmingAlerts" ? "text-yellow-300" : "text-white"}
            />
            <span className="text-xs">Alerts</span>
          </div>
        </Link>

        <Link to="/dashboard/advisoryPage">
          <div className="flex flex-col items-center gap-1 scale-125">
            <PlusCircle size={26} className="text-yellow-300" />
            <span className="text-xs">Advisory</span>
          </div>
        </Link>

        <Link to="/dashboard/communityPage">
          <div className="flex flex-col items-center gap-1">
            <Leaf
              size={22}
              className={location.pathname === "/dashboard/communityPage" ? "text-yellow-300" : "text-white"}
            />
            <span className="text-xs">Community</span>
          </div>
        </Link>

        <Link to="/dashboard/profilePage">
          <div className="flex flex-col items-center gap-1">
            <User
              size={22}
              className={location.pathname === "/dashboard/profile" ? "text-yellow-300" : "text-white"}
            />
            <span className="text-xs">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomTabBar;
