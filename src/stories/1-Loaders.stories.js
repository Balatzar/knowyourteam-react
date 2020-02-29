import React from "react";
import MainLoaderFullScreen from "../base/MainLoaderFullScreen";
import "../styles/tailwind.css";

export default {
  title: "Main Loader",
  component: MainLoaderFullScreen,
};

export const during = () => (
  <div class="bg-gray-200 w-screen h-screen border-black border-double border-8 fixed overflow-x-auto">
    <MainLoaderFullScreen />
  </div>
);
