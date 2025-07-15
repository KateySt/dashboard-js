import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WidgetSettings from "./pages/WidgetSettings.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Error from "./pages/Error.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {index: true, element: <Home/>},
      {
        path: 'dashboard',
        element: <Dashboard/>,
        children: [
          {path: 'widgets/:widgetId', element: <WidgetSettings/>},
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);