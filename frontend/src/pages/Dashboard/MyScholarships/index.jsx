import { useContext } from "react";
import { UserContext } from "../../../context/user";

import ApplicationCard from "../ApplicationList/ApplicationCard";

const MyScholarships = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Your Created Scholarships</h1>
      <div className="w-full flex flex-col gap-4">
        {[...Array(1)].map((_, index) => {
          return (
            <ApplicationCard
              key={index}
              admin={!!userData?.user.type === "admin"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyScholarships;
