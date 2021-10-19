import { Disclosure } from "@headlessui/react";
import Loader from "react-loader-spinner";
import { BsChevronUp as ChevronUpIcon } from "react-icons/bs";
import { scholarshipAward } from "../../../api/scholarships";

const ApplicantDisclosure = ({ applicant }) => {
  const { award, isLoading, isSuccess } = scholarshipAward();
  const handleAward = async () => {
    if (!applicant.awarded) {
      await award({ scId: applicant.id, studentId: applicant.student.id });
    }
  };

  return (
    <div className="w-full">
      <div className="w-full p-2 ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left rounded-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>{applicant.student.name}</span>
                <div className="flex items-center gap-4">
                  {isLoading && (
                    <Loader
                      type={"TailSpin"}
                      width={24}
                      height={24}
                      color="#3b82f6"
                    />
                  )}
                  <div
                    className={`border rounded ${
                      applicant.awarded || isSuccess
                        ? "border-green-500  hover:bg-green-500 text-green-500"
                        : "border-blue-500  hover:bg-blue-500"
                    }  hover:text-white`}
                  >
                    <div
                      role="button"
                      className={`py-1 px-3`}
                      onClick={handleAward}
                    >
                      {applicant.awarded || isSuccess ? "Awarded" : "Award"}
                    </div>
                  </div>
                  <ChevronUpIcon
                    className={`${
                      !open && "transform rotate-180"
                    } w-5 h-5 text-purple-500`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {applicant.note}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default ApplicantDisclosure;
