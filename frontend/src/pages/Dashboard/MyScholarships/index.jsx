import { useContext } from "react";
import Loader from "react-loader-spinner";

import { UserContext } from "@context/user";
import { myScholarships } from "@api/scholarships";

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

const scD = {
  id: 3,
  name: "New Scholarship",
  description: "ALKNAFLKNKLAEN",
  amount: 132024,
  tag: "Test",
  isActive: true,
  status: "in-progress",
  donor: {
    id: 3,
    name: "Donor Test",
    password: "$2a$08$XLx.bDoTSwHWKqrtGbr/B.lsxzw39mR3Nv7kQHk7/tVliCRM6y/fm",
    email: "donor@test.com",
    profile: null,
    created_at: "2021-10-19T13:58:18.143Z",
    updated_at: "2021-10-19T13:58:18.143Z",
    type: "donor",
  },
  created_at: "2021-10-19T15:28:10.574Z",
  updated_at: "2021-10-19T15:28:10.574Z",
};
