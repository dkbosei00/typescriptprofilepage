import React from "react";
import {useRouteError} from "react-router-dom"

interface RouteError{
    statusText?: string
    message?: string
}

const ErrorPage = () => {
    const error = useRouteError() as RouteError
    console.log(error);

  return (<div>
    <h1>Oops! An error occured.</h1>
    <p>Sorry, An unexpected error has occured.</p>
    <p>
        <i>{error?.statusText || error?.message}</i>
    </p>
    </div>);
};

export default ErrorPage;
