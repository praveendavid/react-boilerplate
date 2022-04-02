import { Link } from "react-router-dom";
import { ROOT } from "./constants";

export const NotFound = () => {
  return (
    <>
      <h1>Page not found! <Link to={ROOT}>click here</Link> to go to home page</h1>
    </>
  );
};
