import { Link } from "react-router-dom";

const PreviewProfile = ({ prData }) => {
  return (
    <div>
      <h4 className="text-sm">
        PROFILE - <b>{prData?.student.name}</b>
      </h4>
      <hr className="my-2" />
      {/* <p>Donors will see this as part of your applications.</p> */}
      <div className="my-4 flex flex-col gap-2">
        <div>
          <b>Bio:</b>
          {prData?.student?.bio && <p>{prData?.student?.bio}</p>}
        </div>
        <div>
          <b>Course of study:</b>
          {prData?.student?.course && <p>{prData?.student?.course}</p>}
        </div>
        <div>
          <b>Graduated:</b>
          {prData?.student?.graduated && <p>{prData?.student?.graduated}</p>}
        </div>
        <div>
          <b>Interests:</b>
          {prData?.student?.interests && <p>{prData?.student?.interests}</p>}
        </div>
        <div>
          <b>Abilities:</b>
          {prData?.student?.abilities && <p> {prData?.student?.abilities}</p>}
        </div>
        {/* <p className="md:hidden">{userData?.user.name}</p> */}
      </div>

      <div className="w-full flex justify-end items-center gap-6">
        <Link
          to="/"
          role="button"
          className="bg-overlay py-3 px-14 rounded text-white hover:opacity-80 transition-all ease-in-out duration-300"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default PreviewProfile;
