import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

const colors = ["teal", "pink", "purple", "indigo", "blue"];

export default function BioCard({ showBio, passBio, round }) {
  useEffect(() => {
    if (showBio) {
      document.querySelector(".bio-card").classList.add("show-card");
      document.querySelector(".bio-card").classList.remove("hide-card");
    } else {
      document.querySelector(".bio-card").classList.remove("show-card");
      document.querySelector(".bio-card").classList.add("hide-card");
    }
  }, [showBio]);

  useEffect(() => {
    // document.querySelector(".js-description").scrollTop = 0;
  });

  return (
    <div className="bio-card w-3/4 max-w-md rounded-lg bg-white overflow-hidden4 border p-6">
      <div className="absolute h-screen right-0 w-2/12 inset-y-0 flex -mr-12 md:-mr-24 lg:-mr-32">
        <button
          className="-ml-2"
          style={{ minWidth: "80px" }}
          onClick={passBio}
        >
          <div className="arrow">
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
          </div>
        </button>
      </div>
      <h1 className="text-lg md:text-xl font-bold text-center mb-4">
        {round.win ? "Well done!" : "Wrong!"}
      </h1>
      <div className="flex items-start">
        <img
          className="w-2/6"
          src={round.person["Profile Pic"][0].url}
          alt="Profile pic"
        />
        <div className="ml-4">
          <h2 className="text-2xl text-bold">{round.person["Name"]}</h2>
        </div>
      </div>
    </div>
  );
}
