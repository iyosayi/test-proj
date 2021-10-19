import { useContext, useState } from "react";
import { MdPeopleAlt } from "react-icons/md";
import Loader from "react-loader-spinner";

import ModalBase from "./ModalBase";
import { ModalContext } from "./ModalContext";
import SaveButton from "../SaveButton";
import { scholarshipContribute } from "../../api/scholarships";

const ContributeModal = ({ scData, applied }) => {
  const [contribution, setContribution] = useState(0);
  const [grantWorth, setGrantWorth] = useState(scData.amount);
  const { modalData, setModalData } = useContext(ModalContext);
  const { contribute, isLoading, error, isError, isSuccess } =
    scholarshipContribute();

  const handleContribute = async () => {
    await contribute({ scID: scData.id, amount: contribution });
    setGrantWorth(Number(grantWorth) + Number(contribution));
  };

  return (
    <ModalBase>
      <div className="relative">
        <header className="shadow-md p-6">
          <div className="flex gap-2">
            <div className="w-12 h-12">
              <img src="https://photos.angel.co/startups/i/5001845-166baf15b842a06817010b6dc196fda3-medium_jpg.jpg?buster=1582753841" />
            </div>
            <div>
              <h1 className="font-bold uppercase">{scData.name}</h1>
              <p>{scData.description}</p>
              <p className="flex items-center text-sm gap-1">
                <MdPeopleAlt />
                {scData.donor.name}
              </p>
              <p>
                Help increase the impact of this scholarship by contributing.
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
                <b>Grant Worth</b>
                <p>{grantWorth}</p>
              </div>
              <div className="flex flex-col gap-4">
                <b>How much would you like to contribute?</b>

                <input
                  type="number"
                  value={contribution}
                  onChange={(e) => setContribution(e.target.value)}
                  className="h-10 border"
                />

                <button
                  className="py-1 px-3 border rounded border-blue-500  hover:bg-blue-500 hover:text-white flex justify-center"
                  onClick={handleContribute}
                >
                  {isLoading ? (
                    <Loader
                      type="TailSpin"
                      color="#3b82f6"
                      width={25}
                      height={25}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>

                {isError ? (
                  <p className="text-red-400">{error.toString()}</p>
                ) : isSuccess ? (
                  <p className="text-green-400">Contributed successfully</p>
                ) : null}
              </div>
            </div>
          </section>
        </div>
        <div className="flex justify-between p-6">
          <SaveButton />
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
