import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>Oops!! the page is not found</h1>
      <h2 className="error-align">
        {error.status} : {error.statusText}
      </h2>
      <h2 className="error-align">{error.data}</h2>
    </div>
  );
};

export default Error;
