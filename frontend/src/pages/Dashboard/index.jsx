import { getAuth } from "@utils/auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import DonorDashboard from "./Donor";
import StudentDashboard from "./Student";
import Applied from "./Applied";
import MyScholarships from "./MyScholarships";

const Dashboard = () => {
  const user = getAuth();

  return (
    <BrowserRouter>
      <Header />
      <Nav admin />
      <div className="max-w-[1800px] m-auto p-4">
        <Switch>
          <Route path="/" exact>
            {!(user?.type === "student") ? (
              <StudentDashboard />
            ) : (
              <DonorDashboard />
            )}
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
