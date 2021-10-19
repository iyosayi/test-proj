import ScholarshipCard from "./ScholarshipCard";

const ScholarshipList = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {[...Array(5)].map((_, index) => {
        return <ScholarshipCard admin key={index} />;
      })}
    </div>
  );
};

export default ScholarshipList;
