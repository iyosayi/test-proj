import { Link, useLocation } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { FaAward, FaInbox } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Nav = ({ donor }) => {
  const path = useLocation().pathname;

  return (
    <nav className="fixed flex justify-center gap-2 bg-white p-4 bottom-0 w-full xl:w-auto xl:top-32 xl:bottom-auto xl:flex-col">
      <Link
        to="/"
        role="button"
        className={`${
          path === "/" && "bg-nav-hover text-text-primary"
        } p-4 rounded-lg text-center text-sm lg:text-base hover:bg-nav-hover transition-all ease-in-out duration-300`}
      >
        <SiGooglescholar className="text-2xl m-auto" />
        <span className="text-xs">Scholarships</span>
      </Link>
      {!donor && (
        <Link
          to="/applied"
          role="button"
          className={`${
            path === "/applied" && "bg-nav-hover text-text-primary"
          } p-4 rounded-lg text-center text-sm lg:text-base hover:bg-nav-hover transition-all ease-in-out duration-300`}
        >
          <FaInbox className="text-2xl m-auto" />
          <span className="text-xs">Applied</span>
        </Link>
      )}
      {!donor && (
        <Link
          to="/awarded"
          role="button"
          className={`${
            path === "/awarded" && "bg-nav-hover text-text-primary"
          } p-4 rounded-lg text-center text-sm lg:text-base hover:bg-nav-hover transition-all ease-in-out duration-300`}
        >
          <FaAward className="text-2xl m-auto" />
          <span className="text-xs">Awarded</span>
        </Link>
      )}
      {donor && (
        <Link
          to="/my-scholarships"
          role="button"
          className={`${
            path === "/my-scholarships" && "bg-nav-hover text-text-primary"
          } p-4 rounded-lg text-center text-sm lg:text-base hover:bg-nav-hover transition-all ease-in-out duration-300`}
        >
          <ImBooks className="text-2xl m-auto" />
          <span className="text-xs">My Scholarships</span>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
