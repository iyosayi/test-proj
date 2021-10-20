import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Loader from "react-loader-spinner";

import { UserContext } from "@context/user";
import { updateProfile } from "@api/auth";
import { setAuth } from "@utils/auth";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { userData, setUserData } = useContext(UserContext);
  const { update, error, isError, isSuccess, isLoading } = updateProfile();

  const handleUpdate = async (values) => {
    console.log(values);
    // const res = await update({ bio });
    // setUserData({ ...userData, user: res });
    // setAuth(userData);
  };

  return (
    <div className="">
      <h4 className="text-sm">
        YOUR PROFILE - <b>EDIT</b>
      </h4>
      <hr className="my-2" />
      <form className="w-full space-y-3" onSubmit={handleSubmit(handleUpdate)}>
        {userData?.user?.profile && (
          <div className="md:hidden">
            <p className="mt-4 font-bold">Bio:</p>
            <p className="mb-5">{userData.user.profile}</p>
          </div>
        )}
        <div>
          <p className="text-sm mb-1">When did you graduate? </p>
          <input
            type="date"
            className="w-full border py-3 px-4"
            {...register("gradDate")}
          />
        </div>

        <div>
          <p className="text-sm mb-1">What did you study?</p>
          <input
            className="w-full border py-3 px-4"
            placeholder="B. Tech"
            {...register("course")}
          />
        </div>

        <div>
          <p className="text-sm mb-1">
            Set a bio to let donors know why you're a good fit for scholarships.{" "}
          </p>
          <textarea
            {...register("bio")}
            className="w-full border py-3 px-4"
            placeholder="Write a description of yourself here."
          />
        </div>

        <div>
          <p className="text-sm mb-1">What are your interests? </p>
          <textarea
            {...register("interests")}
            className="w-full border py-3 px-4"
            placeholder="Chess, hockey and afrobeats."
          />
        </div>

        <div>
          <p className="text-sm mb-1">Abilities? </p>
          <textarea
            {...register("abilities")}
            className="w-full border py-3 px-4"
            placeholder="Airbender."
          />
        </div>

        {isError ? (
          <p className="text-red-400">{error.toString()}</p>
        ) : isSuccess ? (
          <p className="text-green-400">Updated successfully</p>
        ) : null}
        <div className="w-full flex justify-end items-center gap-6">
          <Link to="/" className="hover:text-text-primary">
            Preview
          </Link>
          <button
            type="submit"
            className="bg-overlay py-3 px-14 rounded text-white hover:opacity-80 transition-all ease-in-out duration-300"
          >
            {isLoading ? (
              <Loader type="TailSpin" color="#fff" width={25} height={25} />
            ) : (
              "Update Profile"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
