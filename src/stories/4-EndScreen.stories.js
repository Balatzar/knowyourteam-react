import React from "react";
import EndScreen from "../components/EndScreen";
import "../styles/tailwind.css";

export default {
  title: "End screen",
  component: EndScreen,
};

export const TheEnd = () => (
  <div class="bg-gray-200 w-screen h-screen border-black border-double border-8 fixed overflow-x-auto">
    <EndScreen rounds={[{ win: true }, { win: false }, { win: false }]} />
  </div>
);
