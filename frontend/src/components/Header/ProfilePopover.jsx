import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

import { UserContext } from "../../context/user";
import { ModalContext } from "../Modals/ModalContext";
import { setAuth } from "../../utils/auth";

const ProfilePopover = () => {
  const { userData, setUserData } = useContext(UserContext);
  const { setModalData } = useContext(ModalContext);

  const handleLogout = () => {
    setAuth(null);
    setUserData(null);
  };

  return (
    <div className="h-full flex items-center p-2 hover:bg-hover rounded-lg">
      <div className="w-full max-w-sm">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="rounded-md flex gap-2 items-center hover:bg-hover hover:text-blue-200 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className="bg-icon p-1 rounded-full text-white">
                  <IoMdPerson className="w-[0.85em] h-[0.85em]" />
                </div>
                <p className="text-sm text-black">{userData?.user.name}</p>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 text-black sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    {!userData.user.type === "donor" && (
                      <div className="bg-gray-50 p-2">
                        <button
                          onClick={() => {
                            setModalData({
                              modalShow: true,
                              modalType: "profile",
                            });
                          }}
                          className="flex items-center gap-4 p-2 transition duration-150 ease-in-out rounded-md hover:text-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <span className="text-sm font-medium ">Profile</span>
                          <IoMdPerson />
                        </button>
                      </div>
                    )}
                    <div className="bg-gray-50 p-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 p-2 transition duration-150 ease-in-out rounded-md hover:text-red-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="text-sm font-medium ">Logout</span>
                        <MdOutlineLogout />
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default ProfilePopover;
