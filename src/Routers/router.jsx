import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Logout from "../pages/Signup";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CommonRoute from "./CommonRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonRoute />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Logout /> },
      { path: "/product-details", element: <ProductDetailsPage /> },
    ],
  },
]);
