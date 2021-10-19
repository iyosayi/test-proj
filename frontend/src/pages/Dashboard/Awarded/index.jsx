import { myApplications, myAwarded } from "../../../api/scholarships";
import Loader from "react-loader-spinner";
import AwardedCard from "./AwardedCard";

const Awarded = () => {
  const { data, error, isLoading } = myAwarded();

  console.log(data);
  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Scholarships You've Been Awarded</h1>
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
          <div>You've not been awarded any scholarships</div>
        ) : (
          data &&
          data.map((scData, index) => {
            return <AwardedCard key={index} scData={scData} />;
          })
        )}
      </div>
    </div>
  );
};

export default Awarded;
