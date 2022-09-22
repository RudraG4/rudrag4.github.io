import { useContext } from "react";
import { DataContext } from "../../context/BuildContext";
import SkillCard from "./SkillCard";
import "./skills.scss";

export default function Skills() {
  const { skills_info } = useContext(DataContext);

  return (
    <div className="container-fluid skills-container">
      <div className="skills_title">
        <h1 className="fw-bold">Skills</h1>
        <p>
          These are the technical skills I possess and expertise and am
          constantly working to expand my area of expertise.
        </p>
      </div>
      <div className="skills_wrapper">
        {skills_info.skills.map((_skill, _id) => (
          <SkillCard
            key={_id}
            {..._skill}
            transition="slideIn"
            direction="bottom"
            duration={0.6}
            delay={(_id + 5) * 0.05}
          />
        ))}
      </div>
    </div>
  );
}
