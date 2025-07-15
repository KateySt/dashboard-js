import {Link, Outlet} from "react-router-dom";
import {BoardProvider} from "./context/BoardContext.jsx";

const App = () => {
  return (
    <BoardProvider>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">My Dashboard</h1>
            <nav className="space-x-4">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Home
              </Link>
              <span>|</span>
              <Link
                to="/dashboard"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Dashboard
              </Link>
            </nav>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Outlet/>
        </main>
      </div>
    </BoardProvider>
  );
};

export default App;
