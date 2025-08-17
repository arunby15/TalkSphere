import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { MessageSquare, Settings, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg backdrop-blur-lg">
      <div className="container mx-auto px-6 h-16">
        <div className="flex items-center justify-between h-full text-white">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-90 transition-all"
          >
            <div className="size-10 rounded-lg bg-white/20 flex items-center justify-center shadow-md">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-wide">TalkSphere 🌐</h1>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Link
              to="/setting"
              className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all flex items-center gap-2 shadow-sm"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all flex items-center gap-2 shadow-sm"
                >
                  <User className="size-5" />
                  <span className="hidden sm:inline font-medium">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-600 transition-all flex items-center gap-2 shadow-md"
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
