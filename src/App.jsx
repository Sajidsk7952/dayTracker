import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AuthComp from "./components/AuthComp";
import Workspace from "./pages/Workspace";
import authService from "./firebase/authService";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login,logout } from "./store/AuthSlice";
// import AuthLayout from './components/AuthLayout';

const App = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const authStatus = useSelector(state => state.auth);
  useEffect(()=>{
      const subs = onAuthStateChanged(authService.auth,(user)=>{
        if (user) {
          console.log(user);
          dispatch(login({...user}));
          // navigate('/workspace');
        } else {
          dispatch(logout());
        }
      });
      return ()=>{
        subs();
      }
    },[dispatch]);
    // console.log(authStatus);
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
