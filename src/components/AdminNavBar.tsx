import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";

const AdminNavBar = () => {
  const { logout } = useAuth();

  return (
    <motion.nav
      className="bg-voicify-blue dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-md sticky top-0 z-50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="flex justify-between h-16 items-center"
        >
          {/* Logo */}
          <motion.div
            className="flex items-center"
          >
            <Link to="#" className="flex items-center">
              <div className="flex items-center gap-2">
                <span className="text-xl font-montserrat font-bold text-white dark:text-white">
                  Admintrateur
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Boutons */}
          <div className="flex items-center gap-4">
            <motion.div>
              <Button
                variant="ghost"
                className="flex items-center gap-1 bg-white text-red-600 dark:text-red-400"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden md:inline">Se Déconnecter</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default AdminNavBar;
