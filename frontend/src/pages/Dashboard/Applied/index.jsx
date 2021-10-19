import { myApplications } from "../../../api/scholarships";
import Loader from "react-loader-spinner";
import AppliedCard from "./AppliedCard";

const Applied = () => {
  const { data, error, isLoading } = myApplications();

  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Scholarships You've Applied To</h1>
      <div className="w-full flex flex-col gap-4">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loader
              width={100}
              height={100}
              type="TailSpin"
              color={"#004394"}
            />
          </div>
        ) : data.length === 0 ? (
          <div>You've not applied to any scholarships</div>
        ) : (
          data &&
          data.map((scData, index) => {
            return <AppliedCard key={index} scData={scData} />;
          })
        )}
      </div>
    </div>
  );
};

export default Applied;
