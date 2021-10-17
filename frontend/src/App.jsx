import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import SignUp from "@pages/Signup";
import PrivateRoute from "@utils/privateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" comp={Dashboard} exact redirect="/login" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
