import { Link, Outlet, useLocation } from "react-router-dom";
import { BoardProvider } from "./context/BoardContext.jsx";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
];

const App = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BoardProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white text-gray-900">
        <header className="bg-white shadow-md transition-shadow duration-500 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between animate-fade-in-down">
            <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm hover:scale-105 transition-transform duration-300">
              My Dashboard
            </h1>

            <nav className="flex gap-6">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={clsx(
                    "relative font-medium transition-all duration-300",
                    location.pathname === to
                      ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main
          className={clsx(
            "flex-grow w-full max-w-7xl mx-auto px-6 py-8 transition-opacity duration-500",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Outlet />
        </main>
      </div>
    </BoardProvider>
  );
};

export default App;

