import { MemoryRouter, Route } from "react-router";

import { scholarshipApplicants } from "@api/scholarships";
import ModalBase from "../ModalBase";
import ApplicantDisclosure from "./ApplicantDisclosure";
import Loader from "react-loader-spinner";
import PreviewProfile from "../ProfileModal/Preview";
import { useState } from "react";

const ApplicantsView = ({ scData }) => {
  const { data, isLoading } = scholarshipApplicants(scData.id);
  const [prData, setPrData] = useState(null);

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
              <p>Applicants</p>
            </div>
          </div>
        </header>
        <div className="flex flex-col p-6">
          <MemoryRouter>
            <Route path="/" exact>
              <>
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <Loader
                      width={100}
                      height={100}
                      type="TailSpin"
                      color={"#004394"}
                    />
                  </div>
                ) : data.length === 0 ? (
                  <div>No one has applied to this scholarship yet.</div>
                ) : (
                  data &&
                  data.map((apData, index) => {
                    return (
                      <ApplicantDisclosure
                        key={index}
                        applicant={apData}
                        setPrData={setPrData}
                      />
                    );
                  })
                )}
              </>
            </Route>
            <Route path="/preview" exact>
              <PreviewProfile prData={prData} />
            </Route>
          </MemoryRouter>
        </div>
      </div>
    </ModalBase>
  );
};

export default ApplicantsView;
