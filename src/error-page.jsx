import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center my-auto mt-40">
      <h1 className="font-bold uppercase text-3xl mb-2">Oops!</h1>
      <div className="my-6">
        <p className="font-semibold">
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Link to="/">
        <span className="bg-white dark:bg-dark-bg py-2 px-4 rounded-sm shadow-sm">
          Back to Home
        </span>
      </Link>
    </div>
  );
}
