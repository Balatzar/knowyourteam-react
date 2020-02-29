import React from "react";
import GameCard from "./GameCard";
import BioCard from "./BioCard";

export default function Game({ gameState, winRound, loseRound, passBio }) {
  return (
    <div>
      {!!gameState.currentPerson && (
        <GameCard
          currentPerson={gameState.currentPerson}
          names={gameState.names}
          showBio={gameState.showBio}
          answer={name => {
            if (name === gameState.currentPerson["Name"]) {
              winRound();
            } else {
              loseRound();
            }
          }}
        />
      )}

      {!!gameState.rounds.length && (
        <BioCard
          showBio={gameState.showBio}
          round={{ ...gameState.rounds[gameState.rounds.length - 1] }}
          passBio={passBio}
        />
      )}
    </div>
  );
}
