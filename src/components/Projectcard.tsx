import React from "react";
import "./Projectcard.css";

interface Props {
  member: {
    title: string;
    description: string;
  };
  onClick: () => void; // new prop for click
}

const Projectcard: React.FC<Props> = ({ member, onClick }) => {
  return (
    <div className="projectcard-container" onClick={onClick}>
      <div className="projectcard-title">{member.title}</div>
      <div className="project-card">
        <div className="projectcard-description">{member.description}</div>
      </div>
    </div>
  );
};

export default Projectcard;
