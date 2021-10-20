import { Link, useLocation } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { FaAward, FaInbox } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

const Nav = ({ donor }) => {
  const path = useLocation().pathname;

  return (
    <nav className="fixed flex justify-center p-4 bottom-0 w-full xl:w-auto xl:top-32 xl:bottom-auto xl:flex-col">
      <Link
        to="/"
        role="button"
        className={`${
          path === "/" && "bg-hover text-text-primary"
        } p-4 rounded-lg text-center text-sm lg:text-base`}
      >
        <SiGooglescholar className="text-2xl m-auto" />
        <span className="text-xs">Scholarships</span>
      </Link>
      {!donor && (
        <Link
          to="/applied"
          role="button"
          className={`${
            path === "/applied" && "bg-hover text-text-primary"
          } p-4 rounded-lg text-center text-sm lg:text-base`}
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
            path === "/awarded" && "bg-hover text-text-primary"
          } p-4 rounded-lg text-center text-sm lg:text-base`}
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
            path === "/my-scholarships" && "bg-hover text-text-primary"
          } p-4 rounded-lg text-center text-sm lg:text-base`}
        >
          <ImBooks className="text-2xl m-auto" />
          <span className="text-xs">My Scholarships</span>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
