import React from "react";

function DarkModeBtn({ toggleDark }) {
  return (
    <button
      onClick={toggleDark}
      className="bg-primary w-8 h-10 ml-1 inline-flex justify-center items-center rounded-md"
    >
      <svg
        width="20"
        height="11"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.41907 1.03192H19.2171M4.59729 5.48143H16.0389M8.41115 9.93094H12.225"
          stroke="white"
          stroke-width="1.27129"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}

export default DarkModeBtn;
