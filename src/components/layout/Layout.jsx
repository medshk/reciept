import React from "react";
import Header from "../header/Header";
import DarkModeBtn from "../buttons/darkModeBtn/DarkModeBtn";
import SearchBar from "../searchBar/SearchBar";
import Navbar from "../navbar/Navbar";

function Layout({ children, isDark, toggleDark, searchResult }) {
  return (
    <div className="">
      <div className=" px-4">
        <div className="sticky top-0 bg-white dark:bg-darkBg pb-5">
          <Header isDark={isDark} />
          <div className="mt-5 flex sm:text-center sm:w-fit sm:mx-auto">
            <SearchBar searchResult={searchResult} />
            <DarkModeBtn toggleDark={toggleDark} />
          </div>
        </div>
        {children}
      </div>

      <Navbar />
    </div>
  );
}

export default Layout;
