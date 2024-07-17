import React from "react";
import dark from "../images/dark.svg";
import light from "../images/light.svg";
import { useTheme } from "../hooks/useTheme";

const Header = () => {

  const [isDark,setisDark] = useTheme()

  function handleChange() {
    setisDark(!isDark);

    localStorage.setItem("IsDark", !isDark);
  }

  return (
    <header className={isDark ? "dark" : ""}>
      <div className="siteName">Where In the World?</div>
      <button
        className="siteMode"
        style={{
          border: "1px solid gray",
          padding: "5px 10px",
          borderRadius: "16px",
        }}
        onClick={() => handleChange()}
      >
        <img src={isDark ? light : dark} alt="ico" />
        <div className="modeText">{isDark ? "Light" : "Dark"} Mode</div>
      </button>
    </header>
  );
};

export default Header;
