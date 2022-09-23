import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { DataContext } from "../../context/BuildContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./projects.scss";

export default function Projects() {
  const { basic_info, projects_info } = useContext(DataContext);
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <div className="container-fluid projects-container">
      <h1 className="fw-bold">Projects</h1>
      <div className="projects_featured mb-5">
        <div className="gray_bold_text">FEATURED PROJECT</div>
        <div className="project_content">
          {projects_info.featured.map((_data, _id) => {
            const cardClassName = `${activeTabId === _id ? "active" : ""}`;
            return (
              <div key={_id} className={`row project_card ${cardClassName}`}>
                <div className="card_main col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <p className="card_title">{_data.title}</p>
                    <p className="card_description">{_data.description}</p>
                  </div>
                  <div className="d-flex flex-wrap flex-row gap-3">
                    <Link
                      to={_data.live_link}
                      target="_blank"
                      className="project_link"
                    >
                      <div className="fw-bold">VIEW LIVE</div>
                      <FontAwesomeIcon icon={faCircleArrowRight} />
                    </Link>
                    <a
                      href={_data.project_link}
                      target="_blank"
                      rel="noreferrer"
                      className="project_link"
                    >
                      <FontAwesomeIcon icon={faGithub} title="Source" />
                    </a>
                  </div>
                </div>
                <div className="card_image col-sm-12 col-md-12 col-lg-6">
                  <img
                    src={_data.picture}
                    alt={_data.title}
                    loading="lazy"
                    className="image"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="projects_featured_nav">
          <ul className="featured_projects nav">
            {projects_info.featured.map((_data, _id) => {
              const cardClassName = `project ${
                activeTabId === _id ? "active" : ""
              }`;
              return (
                <li
                  key={_id}
                  className={cardClassName}
                  onClick={() => setActiveTabId(_id)}
                >
                  <div className="fs-5 fw-bold mb-2">{_data.title}</div>
                  <small>{_data.languages}</small>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div className="projects_gallery">
        <div className="gallery_header">
          <h2 className="fw-bold mb-4">Take a look at my best work</h2>
        </div>
        <div className="gallery_content">
          <ul className="gallery_projects">
            {projects_info.best.map((_data, _id) => {
              return (
                <li className="gallery_card" key={_id}>
                  <div className="d-flex flex-column">
                    <div className="card_image">
                      <img
                        src={_data.picture}
                        srcSet={_data.picture}
                        alt={_data.title}
                      />
                    </div>
                    <div className="card_details">
                      <div className="card_title">{_data.title}</div>
                      <div className="card_links">
                        <a
                          href={_data.project_link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} title="Source" />
                        </a>
                        <a
                          href={_data.live_link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            title="View Live"
                          />
                        </a>
                      </div>
                      <div className="card_tags">{_data.languages}</div>
                      <div className="card_description">
                        {_data.description}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="projects_footer">
        <div className="text-center">
          <h2 className="fw-bold mb-4">Check out my other projects</h2>
          <button
            className="btn btn-primary pt-2 pb-2 fs-auto"
            onClick={() => {
              window.open(basic_info.links.github, "_blank");
            }}
          >
            Explore All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
