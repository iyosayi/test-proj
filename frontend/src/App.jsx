import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "@pages/Dashboard";
import Login from "@pages/Login";
import SignUp from "@pages/Signup";
import PrivateRoute from "@utils/privateRoute";

import { ModalContext } from "./components/Modals/ModalContext";
import ApplyModal from "./components/Modals/ApplyModal";
import DetailView from "./components/Modals/DetailView";
import ContributeModal from "./components/Modals/ContributeModal";
import AddScholarship from "./components/Modals/AddModal";
import ApplicantsView from "./components/Modals/Applicants";
import ProfileModal from "./components/Modals/ProfileModal";
import ApplicantPreview from "./components/Modals/Applicants/ApplicantPreview";

const App = () => {
  const { modalData } = useContext(ModalContext);

  return (
    <BrowserRouter>
      {modalData.modalShow && modalData.modalType === "apply" && (
        <ApplyModal scData={modalData.scData} />
      )}
      {modalData.modalShow && modalData.modalType === "detailView" && (
        <DetailView scData={modalData.scData} />
      )}
      {modalData.modalShow && modalData.modalType === "contribute" && (
        <ContributeModal scData={modalData.scData} />
      )}
      {modalData.modalShow && modalData.modalType === "add" && (
        <AddScholarship />
      )}
      {modalData.modalShow && modalData.modalType === "applicants" && (
        <ApplicantsView scData={modalData.scData} />
      )}
      {modalData.modalShow && modalData.modalType === "profile" && (
        <ProfileModal />
      )}

      {modalData.modalShow && modalData.modalType === "preview" && (
        <ApplicantPreview />
      )}

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/" comp={Dashboard} redirect="/login" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
