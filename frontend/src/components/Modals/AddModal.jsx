import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";

import ModalBase from "./ModalBase";
import SaveButton from "../SaveButton";
import { scholarshipCreate } from "../../api/scholarships";

const AddScholarship = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { create, isLoading, isSuccess, isError, error } = scholarshipCreate();

  const createSubmit = ({ scDesc, scAmt, scName, scTag }) => {
    create({
      description: scDesc,
      amount: scAmt,
      name: scName,
      tag: scTag,
    });
  };

  return (
    <ModalBase>
      <div className="relative">
        <header className="shadow-md p-6">
          <div className="flex gap-2 items-center text-xl">
            <div className="w-12 h-12">
              <img src="https://photos.angel.co/startups/i/5001845-166baf15b842a06817010b6dc196fda3-medium_jpg.jpg?buster=1582753841" />
            </div>
            <h1 className="font-bold">Create New Scholarship</h1>
          </div>
        </header>
        <div className="flex">
          <form onSubmit={handleSubmit(createSubmit)} className="p-6 w-full">
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="scName">Scholarship Name</label>
              <input
                id="scName"
                className={`h-12 mt-2 p-2 border border-opacity-20 ${
                  errors.scName
                    ? "shadow-error border-red-500"
                    : "shadow-md border-black"
                }`}
                {...register("scName", {
                  required: "We'd need a name",
                })}
              />
              <p className="text-[#cc0000]">
                {errors.scName && errors.scName.message}
              </p>
            </div>
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="firstName">Scholarship Description</label>
              <textarea
                id="scDesc"
                className={`h-12 mt-2 p-2 border border-opacity-20 ${
                  errors.scDesc
                    ? "shadow-error border-red-500"
                    : "shadow-md border-black"
                }`}
                {...register("scDesc", {
                  required: "We'd need a description",
                })}
              />
              <p className="text-[#cc0000]">
                {errors.scDesc && errors.scDesc.message}
              </p>
            </div>
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="scAmt">Grant Worth</label>
              <input
                id="scAmt"
                type="number"
                className={`h-12 mt-2 p-2 border border-opacity-20 ${
                  errors.scAmt
                    ? "shadow-error border-red-500"
                    : "shadow-md border-black"
                }`}
                {...register("scAmt", {
                  required: "We'd need an amount",
                })}
              />
              <p className="text-[#cc0000]">
                {errors.scAmt && errors.scAmt.message}
              </p>
            </div>
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="scTag">Tag</label>
              <input
                id="scTag"
                className={`h-12 mt-2 p-2 border border-opacity-20 ${
                  errors.scTag
                    ? "shadow-error border-red-500"
                    : "shadow-md border-black"
                }`}
                {...register("scTag", {
                  required: "Tags help us provide better recommendations.",
                })}
              />
              <p className="text-[#cc0000]">
                {errors.scTag && errors.scTag.message}
              </p>
            </div>
            {isError ? (
              <p className="text-red-400">{error.toString()}</p>
            ) : isSuccess ? (
              <p className="text-green-400">Created successfully</p>
            ) : null}
            <div className="w-full">
              <button
                type="submit"
                className="w-full flex justify-center items-center bg-overlay mt-6 p-4 text-white hover:opacity-80 transition-all ease-in-out duration-300"
              >
                {isLoading ? (
                  <Loader
                    type={"TailSpin"}
                    width={24}
                    height={24}
                    color="white"
                  />
                ) : (
                  "Create Scholarship"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalBase>
  );
};

export default AddScholarship;
