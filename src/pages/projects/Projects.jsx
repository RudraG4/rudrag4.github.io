import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Card, FeaturedTab } from "components";
import "./projects.scss";

export default function Projects() {
  const { Metadata, Projects, Contact } = useOutletContext();

  useEffect(() => {
    document.title = `Projects - ${Metadata.headerTitle}`;
  }, [Metadata]);

  return (
    <div className="container-fluid projects-container">
      <h1 className="fw-bold">Projects</h1>
      <FeaturedTab title="FEATURED PROJECT" dataList={Projects.featured} />
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
