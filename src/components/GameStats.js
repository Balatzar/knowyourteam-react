import React from "react";

export default function GameStats({ rounds, people }) {
  return (
    <div className="p-5 text-lg font-bold tracking-wider text-center">
      <p>
        {rounds.length} / {people.length}
      </p>
    </div>
  );
}
