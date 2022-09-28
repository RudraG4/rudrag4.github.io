import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CustomLink } from "components";
import "./card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <div className="d-flex flex-column">
        <div className="card_image">
          <img src={props.banner} srcSet={props.banner} alt={props.title} />
        </div>
        <div className="card_details">
          <div className="card_title">{props.title}</div>
          <div className="card_links">
            {props.links.repository && (
              <CustomLink to={props.links.repository} target="_blank">
                <FontAwesomeIcon icon={faGithub} title="Source" />
              </CustomLink>
            )}
            {props.links.deployment && (
              <CustomLink to={props.links.deployment} target="_blank">
                <FontAwesomeIcon icon={faCircleArrowRight} title="View Live" />
              </CustomLink>
            )}
          </div>
          <div className="card_description">{props.description}</div>
        </div>
      </div>
    </div>
  );
}
