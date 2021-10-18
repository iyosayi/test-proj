import { getAuth } from "@utils/auth";
import Nav from "../../components/Nav";
import DonorDashboard from "./components/DonorDashboard";
import StudentDashboard from "./components/StudentDashboard";

const Dashboard = () => {
  const user = getAuth();

  return (
    <>
      <Nav />
      <div className="max-w-[1800px] m-auto p-4">
        {!(user?.type === "student") ? (
          <StudentDashboard />
        ) : (
          <DonorDashboard />
        )}
      </div>
    </>
  );
};

export default Dashboard;
