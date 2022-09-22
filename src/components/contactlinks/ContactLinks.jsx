import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./contactlinks.scss";

function SocialMediaLink(props) {
  return (
    <a rel="noreferrer" href={props.to} target="_blank">
      <FontAwesomeIcon icon={props.icon} title={props.title} />
    </a>
  );
}

export default function ContactLinks() {
  return (
    <div className="contact-links h-100">
      <SocialMediaLink
        to="mailto:rudragowda53@gmail.com"
        icon={faEnvelope}
        title="Mail"
      />
      <SocialMediaLink
        to="https://www.linkedin.com/in/imrudrag"
        icon={faLinkedin}
        title="LinkedIn"
      />
      <SocialMediaLink
        to="https://www.instagram.com/im_rudrag/"
        icon={faInstagram}
        title="Instagram"
      />
      <SocialMediaLink
        to="https://codepen.io/rudrag4"
        icon={faCodepen}
        title="Codepen"
      />
      <SocialMediaLink
        to="https://github.com/RudraG4"
        icon={faGithub}
        title="Github"
      />
    </div>
  );
}
