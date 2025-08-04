import { Link, Outlet } from "react-router-dom";
import { BoardProvider } from "./context/BoardContext.jsx";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
];

const App = () => {
  return (
    <BoardProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">
              My Dashboard
            </h1>

            <nav className="flex gap-6">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
          <Outlet />
        </main>
      </div>
    </BoardProvider>
  );
};

export default App;
