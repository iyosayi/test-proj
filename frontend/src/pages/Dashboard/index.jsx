import { getAuth } from "@utils/auth";
import DonorDashboard from "./DonorDashboard";
import StudentDashboard from "./StudentDashboard";

const Dashboard = () => {
  const user = getAuth();

  return user?.type === "student" ? <StudentDashboard /> : <DonorDashboard />;
};

export default Dashboard;
