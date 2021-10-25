import { useContext } from "react";
import { MdPeopleAlt, MdAttachMoney } from "react-icons/md";
import { BsExclamationTriangleFill } from "react-icons/bs";

import { ModalContext } from "@components/Modals/ModalContext";
import SaveButton from "@components/SaveButton";

const ContributedCard = ({ scData }) => {
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
              scData: scData.scholarships,
            });
          }}
        >
          <h1 className="font-bold uppercase">{scData.scholarships.name}</h1>
          <p>{scData.scholarships.description}</p>
          <p className="flex items-center text-sm gap-1">
            <MdPeopleAlt />
            {scData.scholarships.donor.name}
          </p>
          <p className="flex items-center text-sm gap-1">
            <MdAttachMoney />
            {scData.scholarships.amount}
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full border flex p-2 rounded-[4px] justify-between items-center">
          <p>{scData.scholarships.tag}</p>
          <div>You donated: {scData.amount}</div>
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

export default ContributedCard;
