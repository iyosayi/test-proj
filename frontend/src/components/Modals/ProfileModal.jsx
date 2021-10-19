import { useContext, useState } from "react";
import Loader from "react-loader-spinner";
import { IoMdPerson } from "react-icons/io";

import ModalBase from "./ModalBase";
import { UserContext } from "../../context/user";
import { scholarshipApply } from "@api/scholarships";
import { updateProfile } from "../../api/auth";

const ProfileModal = ({ scData }) => {
  const { userData } = useContext(UserContext);
  const [bio, setBio] = useState("");
  const { update, error, isError, isSuccess, isLoading } = updateProfile();

  const handleUpdate = async () => {
    await update({ bio });
  };

  console.log(userData);

  return (
    <ModalBase>
      <div className="flex">
        <div className="bg-modal-infoBackground w-1/3 p-6">
          <h4 className="text-gray-500 mb-2">{userData?.user.name}</h4>
          <div className="flex gap-2 items-center">
            <div className="bg-gray-400 p-1 rounded-full">
              <IoMdPerson className="text-3xl" />
            </div>
            <p className="uppercase">{scData?.name}</p>
          </div>
        </div>
        <div className="w-full p-6 space-y-3">
          <h4 className="text-sm">YOUR PROFILE</h4>
          <hr />
          <p>{userData?.user.name}</p>
          <p className="text-sm">
            Set a bio to let donors know why you're a good fit for scholarships.{" "}
          </p>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border py-3 px-4"
            placeholder="Write a description of yourself here."
          />

          {isError ? (
            <p className="text-red-400">{error.toString()}</p>
          ) : isSuccess ? (
            <p className="text-green-400">Updated successfully</p>
          ) : null}
          <div className="w-full flex justify-end gap-4">
            <button
              type="submit"
              onClick={handleUpdate}
              className="bg-overlay py-3 px-14 rounded text-white hover:opacity-80 transition-all ease-in-out duration-300"
            >
              {isLoading ? (
                <Loader type="TailSpin" color="#fff" width={25} height={25} />
              ) : (
                "Update Bio"
              )}
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ProfileModal;
