import { useContext } from "react";
import { MdPeopleAlt } from "react-icons/md";

import ModalBase from "./ModalBase";
import { ModalContext } from "./ModalContext";
import SaveButton from "../SaveButton";

const ContributeModal = ({ applied }) => {
  const { modalData, setModalData } = useContext(ModalContext);

  return (
    <ModalBase>
      <div className="relative">
        <header className="shadow-md p-6">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://photos.angel.co/startups/i/5001845-166baf15b842a06817010b6dc196fda3-medium_jpg.jpg?buster=1582753841" />
            </div>
            <div>
              <h1 className="font-bold">CareerMove</h1>
              <p>Obtain an ACCA certification for free!</p>
              <p className="flex items-center text-sm gap-1">
                <MdPeopleAlt />
                11-50 Beneficiaries
              </p>
            </div>
          </div>
        </header>
        <div className="flex">
          <section className="p-6 w-2/3">
            <p>{testDescription}</p>
          </section>
          <section className="p-6 w-1/3">
            <div className="border rounded px-4 py-2 space-y-4">
              <div>
                <b>Sponsor</b>
                <p>CareerMove</p>
              </div>
              <div>
                <b>Beneficiaries</b>
                <p>11-50 people</p>
              </div>
              <div>
                <b>Contribute</b>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-between p-6">
          <SaveButton />
          <div
            className={`border rounded-[4px] border-blue-500  hover:bg-blue-500 hover:text-white ${
              applied && "bg-blue-500 text-white"
            }`}
          >
            <button className={`py-1 px-3 cursor-default`} onClick={() => {}}>
              Close
            </button>
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ContributeModal;

const testDescription = ` Livepeer is building the world's open video infrastructure.
Developers building video streaming applications can use Livepeer's
network to encode live streaming video with high reliability, at a
fraction of the price of traditional cloud providers. Livepeer
enables this by creating an open marketplace for excess GPU
computing power to compete to encode video, and settles payments
through an Ethereum blockchain based system. Every day the Livepeer
team focuses on solving hard problems in video focused software
engineering, Ethereum and blockchain based development, P2P
networking, and more. Everything we build is open source by default,
and we have a remote-first engineering team culture and workflow.`;
