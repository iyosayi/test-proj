import { useContext } from "react";
import { ModalContext } from "../../../components/Modals/ModalContext";

import { MdPeopleAlt, MdOutlineHideSource } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";
import SaveButton from "../../../components/SaveButton";

const ScholarshipCard = ({ applied, donor, scData }) => {
  const { modalData, setModalData } = useContext(ModalContext);

  return (
    <div className="w-full border rounded-sm flex flex-col p-4 gap-4">
      <div className="flex gap-2">
        <div className="w-12 h-12">
          <img src="https://photos.angel.co/startups/i/5001845-166baf15b842a06817010b6dc196fda3-medium_jpg.jpg?buster=1582753841" />
        </div>
        <div
          role="button"
          onClick={() => {
            setModalData({
              modalShow: true,
              modalType: "detailView",
              scData,
            });
          }}
        >
          <h1 className="font-bold uppercase">{scData.name}</h1>
          <p>{scData.description}</p>
          <p className="flex items-center text-sm gap-1">
            <MdPeopleAlt />
            {scData.donor.name}
          </p>
          <p className="flex items-center text-sm gap-1">
            <MdAttachMoney />
            {scData.amount}
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full border flex p-2 rounded-[4px] justify-between items-center">
          <p>{scData.tag}</p>
          <div
            className={`border rounded-[4px] border-blue-500  hover:bg-blue-500 hover:text-white ${
              applied && "bg-blue-500 text-white"
            }`}
          >
            <button
              className={`py-1 px-3 ${applied && "cursor-default"}`}
              onClick={() => {
                if (!scData.isApplied) {
                  setModalData(
                    donor
                      ? {
                          modalShow: true,
                          modalType: "contribute",
                          scData,
                        }
                      : {
                          modalShow: true,
                          modalType: "apply",
                          scData,
                        }
                  );
                }
              }}
            >
              {donor ? "Contribute" : scData.isApplied ? "Applied" : "Apply"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <SaveButton />
        <div className="flex gap-2">
          <button className="flex items-center gap-1">
            <BsExclamationTriangleFill />
            Report
          </button>
          <button className="flex items-center gap-1">
            <MdOutlineHideSource />
            Hide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
