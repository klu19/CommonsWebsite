import React from "react";
import "./ProjectModal.css";

interface Props {
  title: string;
  description: string;
  onClose: () => void;  // this is the function you pass from parent
}

const ProjectModal: React.FC<Props> = ({ title, description, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      {/* <button className="modal-close" onClick={onClose}>×</button> */}
        <div className="modal-title">{title}</div>
        <div className="modal-description">{description}</div>
      </div>
    </div>
  );
};

export default ProjectModal;
