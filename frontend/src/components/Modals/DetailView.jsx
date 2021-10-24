import { useContext } from "react";
import { MdPeopleAlt, MdAttachMoney } from "react-icons/md";

import ModalBase from "./ModalBase";
import SaveButton from "../SaveButton";

const DetailView = ({ scData, applied }) => {
  return (
    <ModalBase>
      <div className="relative">
        <header className="shadow-md p-6">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://photos.angel.co/startups/i/5001845-166baf15b842a06817010b6dc196fda3-medium_jpg.jpg?buster=1582753841" />
            </div>
            <div>
              <h1 className="font-bold uppercase">
                {scData.name || scData?.scholarship.name}
              </h1>
              <p>{scData?.description || scData?.scholarship.description}</p>
            </div>
          </div>
        </header>
        <div className="flex">
          <section className="p-6 w-2/3">
            <p>{testDescription}</p>
          </section>
          <section className="py-6 md:p-6 w-1/3">
            <div className="border rounded px-4 py-2 space-y-4">
              <div>
                <b>Creator</b>
                <p>{scData.donor.name}</p>
              </div>
              <div>
                <b>Grant Worth</b>
                <p>{scData.amount || scData?.scholarship.amount}</p>
              </div>
              <div>
                <b>Tags</b>
                <p>{scData.tag || scData?.scholarship.tag}</p>
              </div>
              <div>
                <b>Donors</b>
                <ol>
                  <li>Andrew - 500</li>
                  <li>Andrew - 500</li>
                  <li>Andrew - 500</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-between p-6">
          <SaveButton />
          {/* <div
            className={`border rounded-[4px] border-blue-500  hover:bg-blue-500 hover:text-white ${
              applied && "bg-blue-500 text-white"
            }`}
          >
            <button className={`py-1 px-3 cursor-default`} onClick={() => {}}>
              Close
            </button>
          </div> */}
        </div>
      </div>
    </ModalBase>
  );
};

export default DetailView;

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
