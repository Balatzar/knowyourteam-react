import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 m-6 flex">
      <span className="border-black border-4 border-solid p-1 flex-no-wrap uppercase font-black text-2xl">
        Know Your Team
      </span>
      <span className="text-light text-2xl ml-4">|</span>
      <span className="font-black uppercase underline text-2xl ml-4 text-purple-700">
        <a
          href="https://github.com/Balatzar"
          rel="noopener noreferrer"
          target="_blank"
        >
          by
        </a>
      </span>
      <span className="text-light text-2xl ml-4">|</span>
      <span className="font-black uppercase underline text-2xl ml-4 text-purple-700">
        <a
          href="https://github.com/Balatzar/knowyourteam"
          rel="noopener noreferrer"
          target="_blank"
        >
          code
        </a>
      </span>
    </div>
  );
}
