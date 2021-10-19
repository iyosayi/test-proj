import Loader from "react-loader-spinner";
import { allScholarships } from "../../../api/scholarships";
import ScholarshipList from "../components/ScholarshipList";

const StudentDashboard = () => {
  const { data, error, isLoading } = allScholarships();

  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Scholarships</h1>
      {!data && isLoading && !error ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader width={100} height={100} type="TailSpin" color={"#004394"} />
        </div>
      ) : data.length === 0 ? (
        <div>No scholarships available yet.</div>
      ) : (
        <ScholarshipList scholarships={data} />
      )}
    </div>
  );
};

export default StudentDashboard;
