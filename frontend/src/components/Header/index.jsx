import { Link } from "react-router-dom";
import { useContext } from "react";

import { FaBell } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import logo from "@assets/logo.png";
import ProfilePopover from "./ProfilePopover";
import { UserContext } from "../../context/user";
import { ModalContext } from "../Modals/ModalContext";
import NotificationPopover from "./NotificationPopover";

const Header = () => {
  const { userData } = useContext(UserContext);
  const { setModalData } = useContext(ModalContext);

  return (
    <header className="sticky top-0 h-20 bg-header text-white px-4 py-4">
      <div className="max-w-[1800px] m-auto h-full flex justify-between">
        <Link to="/" className="flex h-full gap-2">
          <img src={logo} className="" />
          <p className="self-center font-medium md:text-xl">Scholars</p>
        </Link>
        <div className="flex items-center md:text-2xl gap-1">
          {userData?.user.type === "donor" && (
            <div
              role="button"
              className="flex items-center p-3 gap-2 rounded-full transition-all ease-in-out duration-300 hover:bg-overlay hover:text-blue-200"
              onClick={() => {
                setModalData({
                  modalShow: true,
                  modalType: "add",
                });
              }}
            >
              <MdAddBox className="md:text-3xl" />
            </div>
          )}

          <NotificationPopover />

          <ProfilePopover />
        </div>
      </div>
    </header>
  );
};

export default Header;
