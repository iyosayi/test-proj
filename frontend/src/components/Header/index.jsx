import { FaBell } from "react-icons/fa";
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";
import ProfilePopover from "./ProfilePopover";

const Header = () => {
  return (
    <header className="sticky top-0 h-20 bg-header text-white px-4 py-4">
      <div className="max-w-[1800px] m-auto h-full flex justify-between">
        <Link to="/" className="flex h-full gap-2">
          <img src={logo} className="" />
          <p className="self-center font-medium text-xl">Scholars</p>
        </Link>
        <div className="flex items-center text-2xl gap-1">
          <div
            role="button"
            className="flex items-center p-3 gap-2 rounded-full transition-all ease-in-out duration-300 hover:bg-overlay hover:text-blue-200"
          >
            <FaBell />
          </div>

          <ProfilePopover />
        </div>
      </div>
    </header>
  );
};

export default Header;
