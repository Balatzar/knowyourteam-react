import React, { useEffect } from "react";

const colors = ["teal", "pink", "purple", "indigo", "blue"];

export default function BioCard({ showBio, passBio, round }) {
  useEffect(() => {
    if (showBio) {
      document.querySelector(".bio-card").classList.add("show-card");
    } else {
      document.querySelector(".bio-card").classList.remove("show-card");
    }
  }, [showBio]);

  return (
    <div className="bio-card w-3/4 max-w-md rounded-lg bg-white overflow-hidden4 border p-6">
      <div className="absolute h-screen right-0 w-2/12 inset-y-0 flex -mr-12 md:-mr-24 lg:-mr-32">
        <button className="-ml-2 min-w-4/12" onClick={passBio}>
          <div className="arrow">
            <div className="arrow-top"></div>
            <div className="arrow-bottom"></div>
          </div>
        </button>
      </div>
      <h1 className="text-6xl text-boldest text-center mb-4">
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
          <h3 className="text-xl underline">
            {round.person["Job Description"]}
          </h3>
          <div className="">
            {round.person["Projects"].map(({ Name: name }, i) => {
              const color = colors[i % colors.length];
              return (
                <span
                  key={i}
                  className={`inline-block text-xs bg-${color}-200 text-${color}-800 rounded-full px-2`}
                >
                  {name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <p className="mt-4 h-64 overflow-scroll">{round.person["Biography"]}</p>
    </div>
  );
}
