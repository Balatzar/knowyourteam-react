import React from "react";
import Footer from "../base/Footer";
import "../styles/tailwind.css";

export default {
  title: "Footer",
  component: Footer,
};

export const footer = () => (
  <div class="bg-gray-200 w-screen h-screen border-black border-double border-8 fixed overflow-x-auto">
    <Footer />
  </div>
);
