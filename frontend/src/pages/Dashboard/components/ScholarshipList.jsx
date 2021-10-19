import ScholarshipCard from "./ScholarshipCard";
import { useContext } from "react";
import { UserContext } from "../../../context/user";

const ScholarshipList = ({ scholarships }) => {
  const { userData } = useContext(UserContext);

  return (
    <div className="w-full flex flex-col gap-4">
      {scholarships.map((sc, index) => {
        return (
          <ScholarshipCard
            scData={sc}
            donor={userData?.user.type === "donor"}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ScholarshipList;
