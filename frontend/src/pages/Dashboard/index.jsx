import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "../../context/user";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Dash from "./Dash";
import Applied from "./Applied";
import MyScholarships from "./MyScholarships";

const Dashboard = () => {
  const { userData } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Header />
      <Nav admin={!!userData?.user.type === "admin"} />
      <div className="max-w-[1800px] m-auto p-4">
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
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
