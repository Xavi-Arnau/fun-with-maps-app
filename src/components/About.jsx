import React from "react";

const About = () => {
  return (
    <div className="w-8/12 mx-auto bg-white min-h-[92vh] p-8">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-3xl font-bold">About</h1>
        <p>
          Welcome to Fun with Maps. This app was developed for learning purposes
          using React.js, Tailwind and MapLibre.js. You can find the repository
          here.
        </p>
      </div>
    </div>
  );
};

export default About;
