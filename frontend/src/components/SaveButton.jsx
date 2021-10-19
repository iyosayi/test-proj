import { AiOutlineStar } from "react-icons/ai";

const SaveButton = () => {
  return (
    <div className="flex items-center gap-1">
      <AiOutlineStar className="text-xl" />
      Save
    </div>
  );
};

export default SaveButton;
