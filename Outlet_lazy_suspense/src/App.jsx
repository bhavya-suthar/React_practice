// import './App.css'
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import React, { Suspense } from "react";

const Home = React.lazy(()=> import('./pages/Home'))
const About = React.lazy(()=> import('./pages/About'))
const Contact = React.lazy(()=> import('./pages/Contact'))

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <h1>App</h1>
      <Suspense fallback={<h1>Loading.....</h1>}>
      <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
