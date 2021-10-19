import ScholarshipCard from "./ScholarshipCard";
import { useContext } from "react";
import { UserContext } from "../../../context/user";

const ScholarshipList = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="w-full flex flex-col gap-4">
      {[...Array(5)].map((_, index) => {
        return (
          <ScholarshipCard
            donor={userData?.user.type === "donor"}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ScholarshipList;
