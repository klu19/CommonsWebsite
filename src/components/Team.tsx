import React from "react";
import TeamCard from "./Teamcard.tsx";
import { teamMembers } from "../data/teamdata";
import "./Team.css";

const Team: React.FC = () => {
  return (
    <div className="team-section">
      {teamMembers.map((member, idx) => (
        <TeamCard key={idx} member={member} />
      ))}
    </div>
  );
};

export default Team;
