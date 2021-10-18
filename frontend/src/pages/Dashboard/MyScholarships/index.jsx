import ScholarshipCard from "../components/ScholarshipCard";

const MyScholarships = () => {
  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Your Created Scholarships</h1>
      <div className="w-full flex flex-col gap-4">
        {[...Array(1)].map((_, index) => {
          return <ScholarshipCard key={index} admin />;
        })}
      </div>
    </div>
  );
};

export default MyScholarships;
