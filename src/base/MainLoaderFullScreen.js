import React from "react";

export default function MainLoaderFullScreen() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
