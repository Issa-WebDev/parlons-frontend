import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  User,
  Bell,
  Menu,
  LogOut,
  Settings,
  Moon,
  Sun,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, logout } = useAuth();
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const interval = setInterval(() => {
      fetch("/api/healthcheck", {
        method: "HEAD",
        cache: "no-cache",
      })
        .then(() => setIsOnline(true))
        .catch(() => setIsOnline(false));
    }, 30000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-[#1E3A8A] h-[10vh] dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="">
            <Link
              to="#"
              className="flex pt-5 text-white text-xl font-semibold items-center"
            >
              PARLONS
            </Link>
          </div>

          {/* Boutons et menu dropdown */}
          <div className="flex items-center gap-2">
            <motion.div whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${
                  isActive("/")
                    ? "bg-voicify-orange text-white"
                    : "text-gray-500 dark:text-gray-400 hover:bg-voicify-orange dark:hover:bg-gray-700"
                }`}
                onClick={() => navigate("/")}
              >
                <Home size={20} className="text-white hover:text-black" />
              </Button>
            </motion.div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Link to="/search">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full text-gray-500 dark:text-gray-400 hover:bg-voicify-orange dark:hover:bg-gray-700 ${
                    isActive("/search") && "bg-voicify-orange text-white"
                  }`}
                >
                  <Search size={20} className="text-white hover:text-black" />
                </Button>
              </Link>
            </motion.div>

            <motion.div whileTap={{ scale: 0.98 }}>
              <Link to="/notifications">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full text-gray-500 dark:text-gray-400 hover:bg-voicify-orange dark:hover:bg-gray-700 ${
                    isActive("/notifications") && "bg-voicify-orange text-white"
                  }`}
                >
                  <Bell size={20} className="text-white hover:text-black" />
                </Button>
              </Link>
            </motion.div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div className="relative" whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="ghost"
                    className="rounded-full overflow-hidden p-0 h-10 w-10 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Avatar>
                      <AvatarImage src={user?.avatar} alt="Avatar" />
                      <AvatarFallback>
                        {user?.username?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                  <span
                    className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white dark:ring-gray-800 ${
                      isOnline ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 dark:bg-gray-800 dark:border-gray-700"
              >
                <DropdownMenuLabel className="dark:text-gray-300">
                  
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem
                  className="flex items-center cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => navigate("/profile")}
                >
                  {/* <User className="mr-2 h-4 w-4" /> */}
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => navigate("/settings")}
                >
                  {/* <Settings className="mr-2 h-4 w-4" /> */}
                  <span>Paramètres</span>
                </DropdownMenuItem>
                {user?.isAdmin && (
                  <DropdownMenuItem
                    className="flex items-center cursor-pointer dark:text-gray-300 dark:hover:bg-gray-700"
                    onClick={() => navigate("/admin")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Administration</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator className="dark:bg-gray-700" />
                <DropdownMenuItem
                  className="flex items-center cursor-pointer text-red-600 dark:text-red-400 dark:hover:bg-gray-700"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
