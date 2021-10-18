import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import SignUp from "@pages/Signup";
import PrivateRoute from "@utils/privateRoute";

import ApplyModal from "./components/Modals/ApplyModal";
import { ModalContext } from "./components/Modals/ModalContext";

const App = () => {
  const { modalData } = useContext(ModalContext);

  return (
    <BrowserRouter>
      {modalData.modalShow && modalData.modalType === "apply" && <ApplyModal />}
      <Switch>
        <PrivateRoute path="/" comp={Dashboard} exact redirect="/login" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
