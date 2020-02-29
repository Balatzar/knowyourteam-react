import React from "react";

export default function EndScreen({ rounds }) {
  return (
    <div>
      <h1 className="text-center text-boldest text-6xl">Finished!</h1>
      <h2 className="text-center text-bolder text-4xl">
        {rounds.reduce((acc, r) => {
          if (r.win) acc += 1;
          return acc;
        }, 0)}{" "}
        wins |{" "}
        {rounds.reduce((acc, r) => {
          if (!r.win) acc += 1;
          return acc;
        }, 0)}{" "}
        loses
      </h2>
    </div>
  );
}
