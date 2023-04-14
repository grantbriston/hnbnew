import React from "react";

const MenuIcons = () => {

  return (
    <div className="flex items-center">
        <button
          className="text-gray-300 rounded-full outline-none focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </button>
    </div>
  );
};

export default MenuIcons;
