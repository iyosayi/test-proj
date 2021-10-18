import ScholarshipCard from "../ScholarshipCard";

const Applied = () => {
  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Scholarships You've Applied To</h1>
      <div className="w-full flex flex-col gap-4">
        {[...Array(1)].map((_, index) => {
          return <ScholarshipCard key={index} applied />;
        })}
      </div>
    </div>
  );
};

export default Applied;
