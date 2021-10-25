import { Link } from "react-router-dom";
import { UserContext } from "@context/user";
import { useContext, useState } from "react";

const PreviewProfile = () => {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <div>
      <h4 className="text-sm">
        YOUR PROFILE - <b>PREVIEW</b>
      </h4>
      <hr className="my-2" />
      <p>Donors will see this as part of your applications.</p>
      <div className="my-4 flex flex-col gap-2">
        <div>
          <b>Bio:</b>
          {userData?.user?.bio && <p>{userData?.user?.bio}</p>}
        </div>
        <div>
          <b>Course of study:</b>
          {userData?.user?.course && <p>{userData?.user?.course}</p>}
        </div>
        <div>
          <b>Graduated:</b>
          {userData?.user?.graduated && <p>{userData?.user?.graduated}</p>}
        </div>
        <div>
          <b>Interests:</b>
          {userData?.user?.interests && <p>{userData?.user?.interests}</p>}
        </div>
        <div>
          <b>Abilities:</b>
          {userData?.user?.abilities && <p> {userData?.user?.abilities}</p>}
        </div>
        {/* <p className="md:hidden">{userData?.user.name}</p> */}
      </div>

      <div className="w-full flex justify-end items-center gap-6">
        <Link
          to="/edit"
          role="button"
          className="bg-overlay py-3 px-14 rounded text-white hover:opacity-80 transition-all ease-in-out duration-300"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default PreviewProfile;
