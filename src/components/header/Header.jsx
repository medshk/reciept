import React, { useState } from "react";
import logo from "../../images//logo.png";
import whiteLogo from "../../images/whiteLogo.png";
import { AiOutlineBarcode } from "react-icons/ai";
import Portal from "../portal/Portal";
import barcode from "../../images/barcode.png";
import mobile from "../../images/mobile.gif";
import RecieptImageModal from "../modals/recieptImageModal/RecieptImageModal";
function Header({ isDark }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <header className="">
      <div className="flex justify-between pt-4 ">
        <img
          src={isDark ? whiteLogo : logo}
          className="aspect-[4.21] object-cover object-center w-[122px] overflow-hidden max-w-full self-start"
          alt="Logo"
        />
        <button onClick={handleClose} className="">
          <AiOutlineBarcode className="w-11 h-7 dark:text-white" />
        </button>
      </div>
      <div className="sm:text-center ">
        <h1 className="  text-lg font-bold leading-7 mt-3.5 whitespace-nowrap">
          <span className="dark:text-white">Welcome To </span>
          <span className="text-primary">FTR Client</span>
        </h1>
        <p className="text-lightGray  text-xs font-medium mt-3 self-start whitespace-nowrap dark:text-white">
          Let Store Owners Scan Your Barcode
        </p>
      </div>
      {open && (
        <Portal>
          <RecieptImageModal handleClose={handleClose} open={open}>
            <div className="flex flex-col justify-around items-center h-full">
              <img src={mobile} alt="mobile gif" className="w-16 h-16" />
              <img src={barcode} alt="barcode" />
              <p className="text-white text-xs px-12 text-center">
                Let Store Owners Scan Your Barcode to get your receipts
              </p>
            </div>
          </RecieptImageModal>
        </Portal>
      )}
    </header>
  );
}

export default Header;
