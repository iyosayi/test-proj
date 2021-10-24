import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "../../context/user";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Dash from "./Dash";
import Applied from "./Applied";
import MyScholarships from "./MyScholarships";
import MyContributions from "./MyContributions";
import Awarded from "./Awarded";

const Dashboard = () => {
  const { userData } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Header />
      <div className="max-w-[1800px] m-auto p-4">
        <Nav donor={userData?.user.type === "donor"} />
        <Switch>
          <Route path="/" exact>
            <Dash />
          </Route>
          <Route path="/applied">
            <Applied />
          </Route>
          <Route path="/my-scholarships">
            <MyScholarships />
          </Route>
          <Route path="/my-contributions">
            <MyContributions />
          </Route>
          <Route path="/awarded">
            <Awarded />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
