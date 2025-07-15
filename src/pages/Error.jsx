import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <h1>404 - Not found</h1>;
    }
    return <h1>{error.status} - {error.statusText}</h1>;
  }

  return <h1>Something wrong.</h1>;
};

export default Error;