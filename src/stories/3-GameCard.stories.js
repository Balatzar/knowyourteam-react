import React from "react";
import GameCard from "../components/GameCard";
import "../styles/tailwind.css";

export default {
  title: "GameCard",
  component: GameCard,
};

const person = {
  Gender: "F",
  "Job Description": "Project Manager",
  "Profile Pic": [
    {
      url:
        "https://dl.airtable.com/.attachments/fe9f0c176f0717017dcd90f163dd177f/e806e167/5.png",
    },
  ],
  Name: "Nathalie",
  Biography:
    "Airedale cheese on toast queso. Camembert de normandie cheese slices ricotta dolcelatte cheesy grin macaroni cheese manchego cheese and wine. Cream cheese st. agur blue cheese macaroni cheese st. agur blue cheese cheesecake macaroni cheese halloumi cheesy grin. Emmental cream cheese halloumi st. agur blue cheese cheesecake pepper jack mascarpone babybel. Stinking bishop cottage cheese cheesecake cottage cheese camembert de normandie fromage frais halloumi edam. Manchego danish fontina fondue cauliflower cheese stinking bishop cheesy grin macaroni cheese lancashire. Feta ricotta cheese triangles rubber cheese port-salut jarlsberg the big cheese melted cheese. Mozzarella squirty cheese croque monsieur cheese slices. \n\nPepper jack cheeseburger hard cheese. Cheese slices dolcelatte jarlsberg lancashire cheesy feet brie cream cheese cheese and biscuits. St. agur blue cheese caerphilly lancashire queso blue castello cheesecake paneer edam. St. agur blue cheese chalk and cheese cottage cheese monterey jack fromage frais monterey jack emmental st. agur blue cheese. The big cheese cheese strings cream cheese emmental mozzarella parmesan mozzarella cream cheese. When the cheese comes out everybody's happy fondue cow cheddar say cheese feta red leicester mascarpone. Cheese and biscuits cheeseburger parmesan paneer.",
};

export const gameCard = () => (
  <div class="bg-gray-200 w-screen h-screen border-black border-double border-8 fixed overflow-x-auto">
    <GameCard
      currentPerson={person}
      names={["Nathalie", "Ines", "Chantal"]}
      answer={() => false}
      showBio={false}
    />
  </div>
);
