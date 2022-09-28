import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  //   faMessage,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialIcons({ type }) {
  let icon, title;
  switch (type) {
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
      icon = faBox;
      title = "Contact";
  }
  return <FontAwesomeIcon icon={icon} title={title} />;
}
