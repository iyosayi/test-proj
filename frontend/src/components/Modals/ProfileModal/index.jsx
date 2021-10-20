import { useContext } from "react";
import { MemoryRouter, Route } from "react-router";

import ModalBase from "../ModalBase";
import EditProfile from "./Edit";
import PreviewProfile from "./Preview";
import { IoMdPerson } from "react-icons/io";
import { UserContext } from "@context/user";

const ProfileModal = () => {
  const { userData } = useContext(UserContext);

  return (
    <ModalBase>
      <div className="flex">
        <div className="hidden md:flex flex-col gap-2 bg-modal-infoBackground w-1/3 p-6">
          <h4 className="text-gray-500 mb-2">{userData?.user.name}</h4>
          <div className="flex gap-2 items-center">
            <div className="bg-gray-400 p-1 rounded-full">
              <IoMdPerson className="text-3xl" />
            </div>
          </div>
        </div>
        <div className="w-full p-6 space-y-3">
          <MemoryRouter>
            <Route path="/" exact>
              <PreviewProfile />
            </Route>
            <Route path="/edit" exact>
              <EditProfile />
            </Route>
          </MemoryRouter>
        </div>
      </div>
    </ModalBase>
  );
};

export default ProfileModal;
