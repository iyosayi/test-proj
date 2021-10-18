import { Link, useLocation } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { FaInbox } from "react-icons/fa";

const Nav = () => {
  const path = useLocation().pathname;

  return (
    <nav className="fixed flex justify-center p-4 bottom-0 bg-[#f8f8fd] w-full xl:w-auto xl:top-32 xl:bottom-auto xl:flex-col">
      <Link
        to="/"
        role="button"
        className={`${
          path === "/" && "bg-overlay text-white"
        } p-4 rounded-lg text-center text-sm lg:text-base`}
      >
        <ImBooks className="lg:text-4xl m-auto" />
        Scholarships
      </Link>
      <Link
        to="/applied"
        role="button"
        className={`${
          path === "/applied" && "bg-overlay text-white"
        } p-4 rounded-lg text-center text-sm lg:text-base`}
      >
        <FaInbox className="lg:text-4xl m-auto" />
        Applied
      </Link>
    </nav>
  );
};

export default Nav;
