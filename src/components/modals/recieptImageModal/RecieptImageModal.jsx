import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function RecieptImageModal({ children, handleClose, open }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="bg-black fixed top-0 right-0 left-0 bottom-0 w-screen h-screen">
      <div className="w-full h-full relative flex justify-center items-center">
        <button
          onClick={handleClose}
          className="absolute text-white dark:text-black top-2 right-2 p-1 bg-gray-200 rounded-md"
        >
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
}

export default RecieptImageModal;
