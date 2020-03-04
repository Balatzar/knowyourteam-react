import React from "react";

function Link({ link, text }) {
  return (
    <a
      className="font-black underline text-purple-700 w-1/4 text-center"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
}

export default function Footer() {
  return (
    <div className="fixed bottom-0 mb-1 w-screen p-2">
      <div className="flex justify-center">
        <span className="border-black border-4 border-solid p-1 uppercase font-black text-2xl footer-logo">
          Know Your Team
        </span>
      </div>
      <div className="flex justify-around">
        <Link
          text="made by balthazar aubard"
          link="https://github.com/Balatzar"
        />
        <Link
          text="submit a bug"
          link="https://airtable.com/tblJquHUujO27Yrt1/viw5sp6PXcD2Zix6o?blocks=hide"
        />
        <Link
          text="request a feature"
          link="https://airtable.com/tblJOwOUvaf660VI1/viwmP5B0TwcQ4rGOl?blocks=hide"
        />
      </div>
    </div>
  );
}
