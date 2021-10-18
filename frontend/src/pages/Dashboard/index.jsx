import { getAuth } from "@utils/auth";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import DonorDashboard from "./components/DonorDashboard";
import StudentDashboard from "./components/StudentDashboard";
import Applied from "./components/Applied";

const Dashboard = () => {
  const user = getAuth();

  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <div className="max-w-[1800px] m-auto p-4">
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
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;
