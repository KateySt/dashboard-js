import { Link, Outlet } from "react-router-dom";
import { BoardProvider } from "./context/BoardContext.jsx";

const App = () => {
  return (
    <BoardProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              My Dashboard
            </h1>
            <nav className="flex gap-6">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">
          <Outlet />
        </main>
      </div>
    </BoardProvider>
  );
};

export default App;
