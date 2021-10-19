import ApplicationCard from "./ApplicationCard";

const ApplicationList = () => {
  return (
    <div className="max-w-4xl m-auto">
      <h1 className="text-2xl mb-8">Scholarship Applications</h1>
      <div className="w-full flex flex-col gap-4">
        {[...Array(2)].map((_, index) => {
          return <ApplicationCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default ApplicationList;
