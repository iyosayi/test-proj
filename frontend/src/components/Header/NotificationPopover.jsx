import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MdOutlineLogout } from "react-icons/md";
import { FaBell } from "react-icons/fa";

const NotificationPopover = () => {
  return (
    <div className=" max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center p-3 gap-2 rounded-full transition-all ease-in-out duration-300 hover:bg-hover hover:text-text-primary">
              <FaBell />
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
              <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 text-black sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-gray-50 p-4">
                    <p className="text-sm font-medium ">
                      You have no notifications
                    </p>
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

export default NotificationPopover;
