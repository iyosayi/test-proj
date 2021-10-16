import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./utils/privateRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact redirect="/login"></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
