import Navbar from "./components/Navbar";
import TestPage from "./pages/TestPage";
import { ContextProvider } from "./components/ContextProvider";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import Footer from "./components/Footer";

function Root() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
    </>
  );
}

export default function App() {
  const router = createHashRouter([
    {
      children: [{ element: <TestPage />, path: "/" }],
      element: <Root />,
    },
  ]);
  return <RouterProvider router={router} />;
}
