import { Route, Redirect } from "react-router-dom";
import { getAuth } from "./auth";

const PrivateRoute = ({ children: Component, ...rest }, redirect) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getAuth().user.token ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirect} />
        )
      }
    />
  );
};

export default PrivateRoute;
