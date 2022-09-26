export default function ExperienceCard(props) {
  return (
    <div className="row timeline-card">
      <div className="col timeline-left">
        <div className="timeline-content">
          <div className="timeline-left-title">{props.company}</div>
          <div className="timeline-left-date">{`${props.from} - ${
            props.to || "Present"
          }`}</div>
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
          <div className="timeline-right-title">{props.title}</div>
          <p className="mb-2">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
