import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Movie } from "./Pages/Movie";
import { Contact, contactData } from "./Pages/Contacts";
import AppLayout from "./Components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesData } from "./api/GetApiData";
import { MovieDetails } from "./Components/Ui/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";
const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
};

export default App;