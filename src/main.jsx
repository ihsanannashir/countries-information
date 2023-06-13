import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Navbar from "../components/navbar";
import Countries from "./routes/countries.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Sans', sans-serif`,
    body: `'Nunito Sans', sans-serif`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "countries/:countriesId",
    element: <Countries />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <section className="bg-light-bg dark:bg-dark-bg min-h-screen overflow-x-hidden">
        <Navbar />
        <section className="flex justify-center bg-light-bg dark:bg-dark-bg">
          <section className="w-[90%] md:w-[85%] xl:max-w-[1200px] bg-light-bg dark:bg-dark-bg">
            <RouterProvider router={router} />
          </section>
        </section>
      </section>
    </ChakraProvider>
  </React.StrictMode>
);
