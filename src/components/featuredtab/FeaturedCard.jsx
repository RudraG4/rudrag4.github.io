import { CustomLink } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function FeaturedCard(props) {
  const { isActive } = props;
  return (
    <div className={`featured-card row ${isActive ? "active" : ""}`}>
      <div className="card-details col-sm-12 col-md-12 col-lg-6">
        <div>
          <p className="card-title">{props.title}</p>
          <p className="card-description">{props.shortDescription}</p>
        </div>
        <div className="card-links d-flex flex-wrap flex-row gap-3">
          <CustomLink
            to={props.links.source}
            className="card-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} title="Source" />
          </CustomLink>
          <CustomLink
            to={props.links.deployment}
            className="card-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faCircleArrowRight} title="View Live" />
          </CustomLink>
        </div>
      </div>
      <div className="card-image col-sm-12 col-md-12 col-lg-6">
        <img
          src={props.banner}
          alt={props.title}
          loading="lazy"
          className="image"
        />
      </div>
    </div>
  );
}
