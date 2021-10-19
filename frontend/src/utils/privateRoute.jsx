import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../context/user";

const PrivateRoute = ({ comp: Component, redirect, ...rest }) => {
  const { userData } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        userData?.token ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
};

export default PrivateRoute;
