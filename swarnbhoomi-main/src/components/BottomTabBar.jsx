import { Home, Leaf, PlusCircle, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Inside your Layout component, at the bottom
const BottomTabBar = () => {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-2">
        <Link to="/dashboard">
          <div className="flex flex-col items-center text-gray-700">
            <Home
              size={20}
              className={location.pathname === "/dashboard" ? "text-green-700" : ""}
            />
            <span className="text-xs">Home</span>
          </div>
        </Link>
        <Link to="/dashboard/advisory">
          <div className="flex flex-col items-center text-gray-700">
            <Leaf
              size={20}
              className={location.pathname === "/dashboard/advisory" ? "text-green-700" : ""}
            />
            <span className="text-xs">Advisory</span>
          </div>
        </Link>
        <Link to="/dashboard/extra">
          <div className="flex flex-col items-center text-gray-700">
            <PlusCircle
              size={20}
              className={location.pathname === "/dashboard/extra" ? "text-green-700" : ""}
            />
            <span className="text-xs">Extra</span>
          </div>
        </Link>
        <Link to="/dashboard/profile">
          <div className="flex flex-col items-center text-gray-700">
            <User
              size={20}
              className={location.pathname === "/dashboard/profile" ? "text-green-700" : ""}
            />
            <span className="text-xs">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomTabBar;
