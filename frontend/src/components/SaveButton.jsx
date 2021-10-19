import { useState } from "react";
import { FiHeart } from "react-icons/fi";

const SaveButton = () => {
  const [saved, setSaved] = useState(null);

  return (
    <button
      className="flex items-center gap-1"
      onClick={() => setSaved(!saved)}
    >
      <FiHeart
        className={`text-xl ${
          saved === true
            ? "animate-save fill-current text-[#ffd700]"
            : saved === false
            ? "animate-unsave"
            : ""
        }`}
      />
      Save
    </button>
  );
};

export default SaveButton;
