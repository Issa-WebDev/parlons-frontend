import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl text-red-500 font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Cete page n'existe pas</p>
        <a href="/" className="text-green-400 hover:text-green-700 underline">
          Accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
