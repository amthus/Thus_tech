import React from "react";
import Edition from "./editor_pick/Edition";
import Thusrev from "./communication/Thusrev";
import Must_read from "./Lire/info";
import Tech_sec from "./tech_section/tech_sec";
import Gadget from "./gadget/gadget";
import Game from "./game/game";
import Apps from "./apps/apps";
import Newsletter from "./newsletter/newsletter";
import Footer from "./footer";
import Ligne1 from "./lignes/ligne1";
import Ligne2 from "./lignes/ligne2";
import Firstlay from "./firstlay/firstlay";
export default function Body() {
  return (
    <>
      <Firstlay/>
      <div className="bg-[#F5F5F5]">
        <Edition />
        <Thusrev />
        <Ligne1/>

        <Must_read />
        <Tech_sec />

        <Gadget />
        <Ligne2/>
        <Game />
        <Apps />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
