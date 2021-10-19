import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import SignUp from "@pages/Signup";
import PrivateRoute from "@utils/privateRoute";

import { ModalContext } from "./components/Modals/ModalContext";
import ApplyModal from "./components/Modals/ApplyModal";
import DetailView from "./components/Modals/DetailView";

const App = () => {
  const { modalData } = useContext(ModalContext);

  return (
    <BrowserRouter>
      {modalData.modalShow && modalData.modalType === "apply" && <ApplyModal />}
      {modalData.modalShow && modalData.modalType === "detailView" && (
        <DetailView />
      )}

      <Switch>
        <PrivateRoute path="/" comp={Dashboard} redirect="/login" />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
