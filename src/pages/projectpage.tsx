import ProjectTitle from "../components/ProjectTitle";
import Projects from "../components/Projects";
import Sectionbar from "../components/Sectionbar"
import CommunityTitle from "../components/CommunityTitle";
import Community from "../components/Community";
import "./Projectpage.css";

function Projectpage() {
  return (
   <>
    <div className = "page-content">

      
      <ProjectTitle />
      <Projects />
      <Sectionbar />   
      <CommunityTitle />
      <Community />
    </div>
   </>
  );
}

export default Projectpage;