import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
function SearchBar({ searchResult }) {
  return (
    <div className="relative w-full sm:w-96 ">
      <div className="absolute text-lightGray inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <AiOutlineSearch />
      </div>
      <input
        onChange={searchResult}
        type="search"
        id="default-search"
        className="w-full pl-9 pr-16 py-[14px] text-[10px] h-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#212121] dark:border-[#424242] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos..."
        required
      />
    </div>
  );
}

export default SearchBar;
