import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { IoMdPerson } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

const ProfilePopover = () => {
  return (
    <div className="w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="text-white rounded-md flex gap-2 items-center hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <div className="bg-gray-400 p-1 rounded-full">
                <IoMdPerson />
              </div>
              <p className="text-sm ">Andrew Glago</p>
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
                  <div className="bg-gray-50 p-2">
                    <button className="flex items-center gap-4 p-2 transition duration-150 ease-in-out rounded-md hover:text-red-500 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
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
  );
};

export default ProfilePopover;
