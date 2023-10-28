import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PiNotepadLight } from "react-icons/pi";
import { IoStatsChart } from "react-icons/io5";
import { BsCreditCard, BsPerson } from "react-icons/bs";
import { GoTag } from "react-icons/go";

const navItems = [
  {
    id: "reciept",
    title: "Reciept",
    path: "/",
    icon: PiNotepadLight,
  },
  {
    id: "statistics",
    title: "Statistics",
    path: "/statistics",
    icon: IoStatsChart,
  },
  {
    id: "cards",
    title: "Cards",
    path: "/cards",
    icon: BsCreditCard,
  },
  {
    id: "offers",
    title: "Offers",
    path: "/offers",
    icon: GoTag,
  },
  {
    id: "account",
    title: "Account",
    path: "/account",
    icon: BsPerson,
  },
];

function Navbar() {
  const location = useLocation();
  return (
    <div className="flex justify-between sm:justify-center sm:gap-16 py-2 px-5 fixed bottom-0 left-0 right-0 bg-white dark:bg-darkBg border-t border-t-[#F1F1F1] dark:border-[#424242]">
      {navItems.map(({ id, title, path, icon: Icon }) => (
        <div className="nav_item" key={id}>
          <Link
            to={path}
            className={`${
              path === location.pathname
                ? "text-primary"
                : "text-lightGray dark:text-white"
            } flex flex-col justify-center items-center  `}
          >
            <Icon className="w-3 h-3" />
            <span className="text-[7px] mt-1">{title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
