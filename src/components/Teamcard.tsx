import React from "react";
import type { TeamMember } from "../types/types";
import "./Teamcard.css";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} className="card-image" />
      <div className="card-title">{member.title}</div>
      <div className="card-name">{member.name}</div>
    </div>
  );
}
