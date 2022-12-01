// Import React
import React, { useEffect, useState } from "react";

// Import Icons
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonFill } from "react-icons/bs";

const Button = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (document.querySelector("html").classList.contains("dark")) {
      const darkButton = document.getElementById("dark-button");
      darkButton.classList.remove("visible");
      darkButton.classList.add("invisible");

      const lightButton = document.getElementById("light-button");
      lightButton.classList.remove("invisible");
      lightButton.classList.add("visible");
    } else {
      const lightButton = document.getElementById("light-button");
      lightButton.classList.remove("visible");
      lightButton.classList.add("invisible");

      const darkButton = document.getElementById("dark-button");
      darkButton.classList.remove("invisible");
      darkButton.classList.add("visible");
    }
  });

  // Função que troca o tema dark para light
  function toggleThemeMode() {
    if (document.querySelector("html").classList.contains("dark")) {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
      setTheme("light");

      const lightButton = document.getElementById("light-button");
      lightButton.classList.remove("visible");
      lightButton.classList.add("invisible");

      const darkButton = document.getElementById("dark-button");
      darkButton.classList.remove("invisible");
      darkButton.classList.add("visible");
    } else {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.remove("light");
      setTheme("dark");

      const darkButton = document.getElementById("dark-button");
      darkButton.classList.remove("visible");
      darkButton.classList.add("invisible");

      const lightButton = document.getElementById("light-button");
      lightButton.classList.remove("invisible");
      lightButton.classList.add("visible");
    }
  }

  return (
    // Dois botões para trocar o tema
    <>
      <IoMdSunny
        id="light-button"
        className="visible"
        onClick={toggleThemeMode}
      />
      <BsFillMoonFill
        id="dark-button"
        className="invisible"
        onClick={toggleThemeMode}
      />
    </>
  );
};

export default Button;
