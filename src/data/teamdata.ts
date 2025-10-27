import type { TeamMember } from "../types/types.ts";

import KevinImg from "../assets/Kevin.jpg";
import RajImg from "../assets/raj.jpg";
import AkashImg from "../assets/akash.jpg";
import tristanImg from "../assets/tristan.jpg";
import ReshubImg from "../assets/Reshub.jpg";

export const teamMembers: TeamMember[] = [
  
  { image: RajImg, name: "Raj Patel", title: "Managing Director" },
  { image: AkashImg, name: "Akash Patel", title: "Executive Director" },
  { image: tristanImg, name: "Tristan Faze", title: "Analyst Fellow" },
  { image: ReshubImg, name: "Reshub", title: "Analyst Fellow" },
  { image: KevinImg, name: "Kevin Lu", title: "Analyst Fellow" },
  // Add more members here
];