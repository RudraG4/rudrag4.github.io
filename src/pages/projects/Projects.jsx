import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { CustomLink, Card } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.scss";

export default function Projects() {
  const { Metadata, Projects, Contact } = useOutletContext();
  const [activeTabId, setActiveTabId] = useState(0);

  useEffect(() => {
    document.title = `Projects - ${Metadata.headerTitle}`;
  }, [Metadata]);

  return (
    <div className="container-fluid projects-container">
      <h1 className="fw-bold">Projects</h1>
      <div className="projects_featured mb-5">
        <div className="gray_bold_text">FEATURED PROJECT</div>
        <div className="project_content">
          {Projects.featured.map((_data, _id) => {
            const cardClassName = `${activeTabId === _id ? "active" : ""}`;
            return (
              <div key={_id} className={`row project_card ${cardClassName}`}>
                <div className="card_main col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <p className="card_title">{_data.title}</p>
                    <p className="card_description">{_data.shortDescription}</p>
                  </div>
                  <div className="d-flex flex-wrap flex-row gap-3">
                    <CustomLink
                      to={_data.deployment}
                      className="project_link"
                      target="_blank"
                    >
                      <div className="fw-bold">VIEW LIVE</div>
                      <FontAwesomeIcon icon={faCircleArrowRight} />
                    </CustomLink>
                    <CustomLink
                      to={_data.repository}
                      className="project_link"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        title="Repository Source"
                      />
                    </CustomLink>
                  </div>
                </div>
                <div className="card_image col-sm-12 col-md-12 col-lg-6">
                  <img
                    src={_data.banner}
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
            {Projects.featured.map((_data, _id) => {
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
                  <small>{_data.stack.map((_) => _.label).join(", ")}</small>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div className="projects_gallery">
        <div className="header">
          <h2 className="fw-bold mb-4">Take a look at my best works</h2>
        </div>
        <div className="content">
          <ul className="projects">
            {Projects.projects.map((_data, _id) => {
              return (
                <li className="position-relative" key={_id}>
                  <Card {..._data} />
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
              window.open(Contact.links.github, "_blank");
            }}
          >
            Explore All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
