import React, { useEffect, useReducer } from "react";

import { fetchPeople } from "./services/airtable";

import MainLoaderFullScreen from "./base/MainLoaderFullScreen";
import Footer from "./base/Footer";

import GameStats from "./components/GameStats";
import EndScreen from "./components/EndScreen";
import Game from "./components/Game";

import {
  LOADING_PHASE,
  gameReducer,
  initialGameState,
  LOAD_PEOPLE,
  WIN_ROUND,
  LOSE_ROUND,
  PASS_BIO,
} from "./reducers/gameReducer";

function App() {
  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);

  useEffect(() => {
    fetchPeople(people => dispatch({ type: LOAD_PEOPLE, people }));
  }, []);

  if (gameState.phase === LOADING_PHASE) {
    return <MainLoaderFullScreen />;
  }

  return (
    <div className="w-full">
      <GameStats rounds={gameState.rounds} people={gameState.people} />
      {gameState.phase === "FINISHED" ? (
        <EndScreen rounds={gameState.rounds} />
      ) : (
        <Game
          gameState={gameState}
          winRound={() => dispatch({ type: WIN_ROUND })}
          loseRound={() => dispatch({ type: LOSE_ROUND })}
          passBio={() => dispatch({ type: PASS_BIO })}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
