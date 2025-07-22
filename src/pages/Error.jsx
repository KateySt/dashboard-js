import React from 'react';
import { isRouteErrorResponse, useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let title = "Unexpected Error";
  let message = "Something went wrong.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "404 - Page Not Found";
      message = "Sorry, the page you're looking for doesn't exist.";
    } else {
      title = `${error.status} - ${error.statusText}`;
      message = error.data || "An unexpected error occurred.";
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{title}</h1>
      <p className="text-lg text-gray-700 mb-8">{message}</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Error;
