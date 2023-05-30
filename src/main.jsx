import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from "./error-page";
import Navbar from '../components/navbar'
import Countries from './routes/countries.jsx';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <section className='bg-light-bg dark:bg-dark-bg min-h-screen'>
      <Navbar />
      <section className='flex justify-center'>
        <section className='w-[90%] md:w-[85%] xl:max-w-[1200px]'>
          <RouterProvider router={router} />
        </section>
      </section>
    </section>
  </React.StrictMode>,
)
