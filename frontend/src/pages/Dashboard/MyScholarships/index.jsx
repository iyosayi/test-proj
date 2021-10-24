import { useContext } from "react";
import Loader from "react-loader-spinner";

import { UserContext } from "@context/user";
import { myScholarships } from "@api/scholarships";
import { myApplications } from "@api/scholarships";

import ApplicationCard from "./ApplicationCard";

const MyScholarships = () => {
  const { userData } = useContext(UserContext);
  const { data, isLoading, error } = myScholarships();

  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Your Created Scholarships</h1>
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
          <div>You've not created any scholarships</div>
        ) : (
          data &&
          data.map((scData, index) => {
            return <ApplicationCard key={index} scData={scData} />;
          })
        )}
      </div>
    </div>
  );
};

export default MyScholarships;
