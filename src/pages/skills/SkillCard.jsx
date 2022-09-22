import "./skillcard.scss";

export default function SkillCard(props) {
  const { transition, direction = "left", duration = 100, delay = 0 } = props;
  const cardStyle = {};
  if (transition) {
    cardStyle["animation"] = `${getSlideInByDirection(
      direction
    )} ${duration}s ${delay}s forwards`;
  }

  function getSlideInByDirection(direction) {
    switch (direction) {
      case "top":
        return "slideInFromTop";
      case "bottom":
        return "slideInFromBottom";
      case "right":
        return "slideInFromRight";
      default:
        return "slideInFromLeft";
    }
  }

  return (
    <div className="skill-card" style={cardStyle}>
      <img
        className="skill-img"
        src={props.image}
        aria-label={props.label}
        alt={props.label}
        srcSet={props.image}
      />
      <div className="skill-label">{props.label}</div>
    </div>
  );
}
