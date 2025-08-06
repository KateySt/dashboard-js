import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import WidgetSettings from './pages/WidgetSettings';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { path: 'widgets/:widgetId', element: <WidgetSettings /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
