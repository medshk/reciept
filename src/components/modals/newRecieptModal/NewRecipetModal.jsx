import React, { useState } from "react";
import { Link } from "react-router-dom";
import congrats from "../../../images/congrats.png";
import blackCongrats from "../../../images/blackCongrats.png";

import { AiOutlineClose } from "react-icons/ai";

function NewRecipetModal({ isDark, handleModalDisplay }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleclose = () => {
    setIsOpen(false);
    handleModalDisplay(false);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-shadow w-screen h-screen flex items-center justify-center">
          <div className="bg-white dark:bg-darkBg w-56  flex flex-col  items-center relative">
            <button
              onClick={handleclose}
              className="absolute text-white dark:text-black top-2 right-2 p-1 bg-gray-200 rounded-md"
            >
              <AiOutlineClose />
            </button>
            <div className="mt-6">
              <img
                src={isDark ? blackCongrats : congrats}
                alt="congratulation "
              />
            </div>
            <p className="text-xs font-semibold mx-11 mt-4 text-center dark:text-white">
              There's a fresh receipt in your inbox!
            </p>
            <Link
              onClick={handleclose}
              to="/reciept/2"
              className="bg-primary bold text-white text-sm px-16 py-3 mt-4 mx-3 rounded-md"
            >
              Check it
            </Link>
            <button
              onClick={handleclose}
              className="text-[#C4C4C4] text-xs mt-3 mb-6 dark:text-[#BDBDBD] hover:text-primary"
            >
              Remind me later
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default NewRecipetModal;
