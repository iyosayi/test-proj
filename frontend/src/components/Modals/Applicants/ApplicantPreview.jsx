import { UserContext } from "@context/user";
import { useContext } from "react";
import ModalBase from "../ModalBase";

const ApplicantPreview = ({ apData }) => {
  const { userData } = useContext(UserContext);

  const prData = apData || userData;

  return (
    <ModalBase>
      <h4 className="text-sm">YOUR PROFILE</h4>
      <hr className="my-2" />
      <p>Donors will see this as part of your applications.</p>
      <div className="my-4 flex flex-col gap-2">
        <div>
          <b>Bio:</b>
          {prData?.user?.bio && <p>{prData?.user?.bio}</p>}
        </div>
        <div>
          <b>Course of study:</b>
          {prData?.user?.course && <p>{prData?.user?.course}</p>}
        </div>
        <div>
          <b>Graduated:</b>
          {prData?.user?.graduated && <p>{prData?.user?.graduated}</p>}
        </div>
        <div>
          <b>Interests:</b>
          {prData?.user?.interests && <p>{prData?.user?.interests}</p>}
        </div>
        <div>
          <b>Abilities:</b>
          {prData?.user?.abilities && <p> {prData?.user?.abilities}</p>}
        </div>
        {/* <p className="md:hidden">{userData?.user.name}</p> */}
      </div>
    </ModalBase>
  );
};

export default ApplicantPreview;
