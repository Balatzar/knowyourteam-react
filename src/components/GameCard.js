import React, { useEffect } from "react";
import shuffle from "lodash.shuffle";

export default function GameCard({ currentPerson, names, answer, showBio }) {
  useEffect(() => {
    if (showBio) {
      document.querySelector(".game-card").classList.add("hide-card");
    } else {
      document.querySelector(".game-card").classList.remove("hide-card");
    }
  }, [showBio]);

  return (
    <div className="game-card w-3/4 max-w-md rounded-lg bg-white overflow-hidden4 border p-4">
      <div className="flex justify-center">
        <img
          className="w-3/4 border-black border-dashed border-4"
          src={currentPerson["Profile Pic"][0].url}
          alt="Profile pic"
        />
      </div>
      <div className="flex flex-col p-4">
        {shuffle(names).map((name, i) => (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            key={i}
            onClick={() => answer(name)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
