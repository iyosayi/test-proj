import { useContext } from "react";
import { ModalContext } from "../../../components/Modals/ModalContext";

import { MdPeopleAlt, MdAttachMoney } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";
import SaveButton from "../../../components/SaveButton";

const AwardedCard = ({ scData }) => {
  const { modalData, setModalData } = useContext(ModalContext);

  console.log("scd", scData);
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
          <h1 className="font-bold uppercase">{scData.scholarship.name}</h1>
          <p>{scData.scholarship.description}</p>
          <p className="flex items-center text-sm gap-1">
            <MdPeopleAlt />
            {scData.donor.name}
          </p>
          <p className="flex items-center text-sm gap-1">
            <MdAttachMoney />
            {scData.scholarship.amount}
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full border flex p-2 rounded-[4px] justify-between items-center">
          <p>{scData.scholarship.tag}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <SaveButton />
        <div className="flex gap-2">
          <button className="flex items-center gap-1">
            <BsExclamationTriangleFill />
            Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardedCard;
