import { useState } from "react";
import banner from "../../assets/banner-hero/games/diablo-bg.png";
import NavBar from "./components/NavBar/navBar";
function Header() {

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <NavBar />
      <img
        src={banner}
        alt="Vite logo"
        style={{ height: "100vh", width: "100%", backgroundPosition: "right" }}
      />
    </div>
  );
}

export default Header;
