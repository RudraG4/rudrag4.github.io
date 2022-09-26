import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";
import "./experience.scss";

export default function Experience() {
  const { Metadata, Experience } = useOutletContext();

  useEffect(() => {
    document.title = `Experience - ${Metadata.headerTitle}`;
  }, [Metadata]);

  return (
    <div className="container-fluid experience-container">
      <h1 className="experience_title fw-bold">Experience</h1>
      <div className="timeline">
        {Experience.map((_data, _id) => {
          return <ExperienceCard key={_id} {..._data} />;
        })}
      </div>
    </div>
  );
}
