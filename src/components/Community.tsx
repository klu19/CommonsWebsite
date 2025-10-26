import React, { useState } from "react";
import Projectcard from "./Projectcard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/communitydata"; // your community data
import "./Project.css";

const Community: React.FC = () => {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <div className="project-section">
        {projects.map((member, idx) => (
          <Projectcard
            key={idx}
            member={member}
            onClick={() => setSelected(member)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal
          title={selected.title}
          description={selected.description}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default Community;

