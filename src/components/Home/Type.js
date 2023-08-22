import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome to my Website",
          "I'm a Full Stack Developer",
          "Using React & Laravel",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0,
      }}
    />
  );
}

export default Type;
