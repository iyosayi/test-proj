import { useContext, useState } from "react";
import Loader from "react-loader-spinner";

import ModalBase from "./ModalBase";
import { UserContext } from "../../context/user";
import { scholarshipApply } from "@api/scholarships";

const ApplyModal = ({ scData }) => {
  const { userData } = useContext(UserContext);
  const [note, setNote] = useState("");
  const { apply, error, isError, isSuccess, isLoading } = scholarshipApply();

  const handleApply = async () => {
    await apply({ scID: scData.id, note, donorId: scData.donor.id });
  };

  return (
    <ModalBase>
      <div className="flex">
        <div className="bg-modal-infoBackground w-1/3 p-6">
          <h4 className="text-gray-500 mb-2">Apply To</h4>
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12">
              <img src="https://photos.angel.co/startups/i/5001845-166baf15b842a06817010b6dc196fda3-medium_jpg.jpg?buster=1582753841" />
            </div>
            <p className="uppercase">{scData?.name}</p>
          </div>
        </div>
        <div className="w-full p-6 space-y-3">
          <h4 className="text-sm">YOUR APPLICATION</h4>
          <hr />
          <p>{userData?.user.name}</p>
          <p className="text-sm">
            Let them know why you're a good fit for this scholarship.
          </p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border py-3 px-4"
            placeholder="Write a note here."
          />

          {isError ? (
            <p className="text-red-400">{error.toString()}</p>
          ) : isSuccess ? (
            <p className="text-green-400">Applied successfully</p>
          ) : null}
          <div className="w-full flex justify-end gap-4">
            {/* <button>Cancel</button> */}
            <button
              type="submit"
              onClick={handleApply}
              className="bg-overlay py-3 px-14 rounded text-white hover:opacity-80 transition-all ease-in-out duration-300"
            >
              {isLoading ? (
                <Loader type="TailSpin" color="#fff" width={25} height={25} />
              ) : (
                "Send Application"
              )}
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ApplyModal;
