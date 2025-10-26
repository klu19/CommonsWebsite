import React from "react";
import type { TeamMember } from "../types/types";
import "./Teamcard.css";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} className="teamcard-image" />
      <div className="teamcard-name">{member.name}</div>
      <div className="teamcard-title">{member.title}</div>
      
    </div>
  );
}
