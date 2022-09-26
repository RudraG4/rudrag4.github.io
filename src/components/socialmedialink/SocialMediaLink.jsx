import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaLink(props) {
  let icon, title;
  switch (props.type) {
    case "email":
      icon = faEnvelope;
      title = "Mail";
      break;
    case "linkedin":
      icon = faLinkedin;
      title = "LinkedIn";
      break;
    case "github":
      icon = faGithub;
      title = "Github";
      break;
    case "codepen":
      icon = faCodepen;
      title = "Codepen";
      break;
    case "instagram":
      icon = faInstagram;
      title = "Instagram";
      break;
    case "tel":
      icon = faPhone;
      title = "Call";
      break;
    default:
      icon = faMessage;
      title = "Message";
  }
  return (
    <a rel="noreferrer" href={props.to} target="_blank">
      <FontAwesomeIcon icon={icon} title={title} />
    </a>
  );
}
