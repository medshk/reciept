import React from "react";
import { Link } from "react-router-dom";
function RecieptCard({ title, price, date, items, newItem }) {
  return (
    <Link
      to="/reciept/2"
      className={`flex items-center border  p-2 rounded-md ${
        newItem
          ? "border-primary shadow-xl border-2"
          : "border-[#F8F8F8] dark:border-[#424242]"
      } `}
    >
      <div className="w-full">
        <div className="flex w-full text-xs font-semibold dark:text-white">
          <h3 className="">{title} </h3>
          <p className="ml-auto">{price}</p>
        </div>
        <div className="mt-[6px] flex w-full text-[9px] font-normal text-lighterGray">
          <h3 className="">{date}</h3>
          <p className="ml-auto">{items} items</p>
        </div>
      </div>
      <span className="bg-purple-200 ml-4 w-4 h-4 flex items-center justify-center rounded-sm dark:bg-purple-950">
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.42735 4.00033C4.30129 4.12624 4.1304 4.19696 3.95223 4.19696C3.77406 4.19696 3.60318 4.12624 3.47711 4.00033L0.941064 1.46518C0.814995 1.33905 0.744195 1.16801 0.744236 0.989678C0.744279 0.811349 0.81516 0.64034 0.941288 0.514271C1.06742 0.388203 1.23846 0.317402 1.41679 0.317444C1.59512 0.317486 1.76613 0.388367 1.8922 0.514495L3.95223 2.57453L6.01227 0.514495C6.13902 0.391963 6.30882 0.324114 6.4851 0.325562C6.66139 0.32701 6.83005 0.39764 6.95477 0.522238C7.07949 0.646836 7.15027 0.815434 7.15189 0.991718C7.1535 1.168 7.08581 1.33787 6.9634 1.46473L4.4278 4.00078L4.42735 4.00033Z"
            fill="#594EF1"
          />
        </svg>
      </span>
    </Link>
  );
}

export default RecieptCard;
