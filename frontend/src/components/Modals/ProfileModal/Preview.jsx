import { Link } from "react-router-dom";

const PreviewProfile = () => {
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
          <p>
            Livepeer is building the world's open video infrastructure.
            Developers building video streaming applications can use Livepeer's
            network to encode live streaming video with high reliability, at a
            fraction of the price of traditional cloud providers.
          </p>
        </div>

        <div>
          <b>Course of study:</b>
          <p>B. Tech</p>
        </div>
        <div>
          <b>Graduated:</b>
          <p>October 31st 2021</p>
        </div>

        <div>
          <b>Interests:</b>
          <p> Livepeer is building the world's open video infrastructure.</p>
        </div>

        <div>
          <b>Abilities:</b>
          <p>
            {" "}
            Livepeer is building the world's open video infrastructure.
            Developers building video streaming applications can use Livepeer's
            network to encode live streaming video with high reliability, at a
            fraction of the price of traditional cloud providers. Livepeer
            enables this by creating an open marketplace for excess GPU
            computing power to compete to encode video, and settles payments
            through an Ethereum blockchain based system.
          </p>
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
