import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-row justify-center fixed left-0 bottom-0 w-full p-2">
      <div>
        <p>
          Enthusiastically developed by{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://xavi-arnau.netlify.app/"
          >
            Xavi Arnau
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
