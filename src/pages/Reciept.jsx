import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import RecieptCard from "../components/cards/recieptCard/RecieptCard";
import RecieptImageModal from "../components/modals/recieptImageModal/RecieptImageModal";
import Portal from "../components/portal/Portal";
import reciept_img from "../images/reciept.png";

function Reciept() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  const reciept = {
    id: 9,
    title: "choco land",
    price: 60.0,
    items: 7,
    date: "08-09-2023 at 23:20:05",
  };
  return (
    <div>
      <section className=" mt-5 flex">
        <h2 className="text-black text-center text-sm font-semibold self-stretch dark:text-white">
          My Receipts
        </h2>
        <Link
          href="/"
          className="text-black text-center text-xs font-semibold self-center ml-auto   dark:text-white"
        >
          See all <MdNavigateNext className="inline-block" />
        </Link>
      </section>
      <section className="mt-5 pb-12">
        <RecieptCard {...reciept} />
        <div className="border border-[#F8F8F8] dark:border-[#424242] mt-4  py-3  px-2 ">
          <div className=" flex ">
            <h2 className="text-xs font-semibold dark:text-white">
              choco land
            </h2>
            <button className="bg-[#49D806] rounded-sm text-white text-[10px] py-1 px-4 ml-auto">
              Paid
            </button>
          </div>
          <p className="text-[9px] text-lightGray mb-3">choco.land@gmail.com</p>
          <div onClick={handleClose} className="cursor-pointer">
            <img src={reciept_img} alt="reciept" />
          </div>
        </div>
      </section>
      {open && (
        <Portal>
          <RecieptImageModal handleClose={handleClose} open={open}>
            <img src={reciept_img} alt="reciept" />
          </RecieptImageModal>
        </Portal>
      )}
    </div>
  );
}

export default Reciept;
