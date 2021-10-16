import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import PrivateRoute from "./utils/privateRoute";

import "./App.css";

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
