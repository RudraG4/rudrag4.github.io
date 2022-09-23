import { useContext } from "react";
import { DataContext } from "../../context/BuildContext";
import "./experience.scss";

function ExperienceCard(props) {
  return (
    <div className="row timeline-card">
      <div className="col timeline-left">
        <div className="timeline-content">
          <div className="timeline-left-title">{props.company}</div>
          <div className="timeline-left-date">{`${props.from} - ${props.to}`}</div>
        </div>
      </div>
      <div className="col timeline-seperator">
        <div className="bullet circle-load">
          <div className="dot"></div>
        </div>
        <div className="line"></div>
      </div>
      <div className="col timeline-right">
        <div className="timeline-content">
          <div className="timeline-right-title">{props.designation}</div>
          <p className="mb-2">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { experience_info } = useContext(DataContext);

  return (
    <div className="container-fluid experience-container">
      <h1 className="experience_title fw-bold">Experience</h1>
      <div className="timeline">
        {experience_info.map((_data, _id) => {
          return <ExperienceCard key={_id} {..._data} />;
        })}
      </div>
    </div>
  );
}
