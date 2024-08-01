import React, { useEffect, useState } from "react";
import "./signal.css";

let config = {
  red: {
    duration: 5000,
    next: "green",
  },
  green: {
    duration: 5000,
    next: "yellow",
  },
  yellow: {
    duration: 5000,
    next: "red",
  },
};

const Signal = () => {
  let initialColor = "green";
  const [currentColor, setCurrentColor] = useState(initialColor);

  const [currt, setcurrt] = useState("green");

  useEffect(() => {
    let timer = setTimeout(() => {
      if (currt === "green") {
        setcurrt("yellow");
      } else if (currt === "red") {
        setcurrt("green");
      } else {
        setcurrt("red");
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currt]);

  useEffect(() => {
    const { duration, next } = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="MainContainer">
      <div className="baseComponent"></div>
      <div className="parent">
        <div className="signalParent">
          <div
            className={`green circle ${
              currentColor === "green" ? "visible" : "hide"
            }`}
          ></div>
          <div
            className={`red circle ${
              currentColor === "red" ? "visible" : "hide"
            }`}
          ></div>
          <div
            className={`yellow circle ${
              currentColor === "yellow" ? "visible" : "hide"
            }`}
          ></div>
        </div>

        <div className="signalParent">
          <div
            className={`green circle ${currt === "green" ? "visible" : "hide"}`}
          ></div>
          <div
            className={`red circle ${currt === "red" ? "visible" : "hide"}`}
          ></div>
          <div
            className={`yellow circle ${
              currt === "yellow" ? "visible" : "hide"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signal;
