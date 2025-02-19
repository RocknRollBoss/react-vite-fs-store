import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NuqsAdapter } from "nuqs/adapters/react-router/v6";
import { Layout } from "./components/layout";
import {
  Home,
  Products,
  Auth,
  SingleProduct,
  Cart,
  Favourites,
  BestSeller,
} from "./pages";
import { ErrorMessage } from "./components";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorMessage />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "favourites", element: <Favourites /> },
      { path: "/best", element: <BestSeller /> },
    ],
  },

  { path: "/auth", element: <Auth /> },
]);
createRoot(document.getElementById("root")!).render(
  <NuqsAdapter>
    <RouterProvider router={router} />
  </NuqsAdapter>
);
