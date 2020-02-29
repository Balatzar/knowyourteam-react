const LOADING_PHASE = "LOADING";
const PLAYING_PHASE = "PLAYING";
const FINISHED_PHASE = "FINISHED";

const initialGameState = {
  phase: LOADING_PHASE,
  people: [],
  remainingPeople: [],
  rounds: [],
  currentPerson: null,
  names: [],
  showBio: false,
};

const LOAD_PEOPLE = "LOAD_PEOPLE";
const WIN_ROUND = "WIN_ROUND";
const LOSE_ROUND = "LOSE_ROUND";
const PASS_BIO = "PASS_BIO";

function gameReducer(state, action) {
  switch (action.type) {
    case LOAD_PEOPLE: {
      const people = [...action.people];
      const currentPerson = { ...people[0] };

      return {
        ...state,
        phase: PLAYING_PHASE,
        people,
        remainingPeople: people.slice(1),
        currentPerson,
        names: generateNames(people, currentPerson),
      };
    }
    case WIN_ROUND: {
      const nextPerson = state.remainingPeople[0];
      return {
        ...state,
        remainingPeople: state.remainingPeople.slice(1),
        currentPerson: nextPerson,
        rounds: [...state.rounds, { win: true, person: state.currentPerson }],
        names: generateNames(state.people, nextPerson),
        showBio: true,
      };
    }
    case LOSE_ROUND: {
      const nextPerson = state.remainingPeople[0];
      return {
        ...state,
        remainingPeople: state.remainingPeople.slice(1),
        currentPerson: nextPerson,
        rounds: [...state.rounds, { win: false, person: state.currentPerson }],
        names: generateNames(state.people, nextPerson),
        showBio: true,
      };
    }
    case PASS_BIO: {
      return {
        ...state,
        phase: !state.currentPerson ? FINISHED_PHASE : PLAYING_PHASE,
        showBio: false,
      };
    }
    default:
      throw new Error("Uknown State");
  }
}

function generateNames(people, currentPerson) {
  if (!currentPerson) return [];

  // FIX: refactor to use closure and not regenerate genders each function call
  const genders = people.reduce(
    (acc, people) => {
      acc[people["Gender"]].push(people);
      return acc;
    },
    { M: [], F: [] }
  );

  const names = [currentPerson["Name"]];

  while (names.length < 3) {
    const randomName =
      genders[currentPerson["Gender"]][
        Math.floor(Math.random() * genders[currentPerson["Gender"]].length)
      ]["Name"];
    if (!names.includes(randomName)) {
      names.push(randomName);
    }
  }

  return names;
}

export {
  initialGameState,
  gameReducer,
  LOADING_PHASE,
  LOAD_PEOPLE,
  WIN_ROUND,
  LOSE_ROUND,
  PASS_BIO,
};
