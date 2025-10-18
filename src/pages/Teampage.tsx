import React from "react";
import Hero from "../components/Hero";
import TeamTitle from "../components/TeamTitle";
import Team from "../components/Team";
import "./Teampage.css";

function Teampage() {
  return (
   <>
    <div className="page-content">
      <TeamTitle />
      <Team />
    </div>
   </>
  );
}

export default Teampage;