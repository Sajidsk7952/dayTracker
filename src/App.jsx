import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AuthComp from "./components/AuthComp";
import Workspace from "./pages/Workspace";
// import AuthLayout from './components/AuthLayout';

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/auth", element: <AuthPage /> },
        { path: "/contactUs", element: <ContactPage /> },
        { path: "/aboutUs", element: <AboutPage /> },
        {
          path: "/workspace",
          element: (
            <AuthComp>
              <Workspace />
            </AuthComp>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
};

export default App;
