import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();
  const { Metadata } = useOutletContext();

  useEffect(() => {
    document.title = `${Metadata.headerTitle}`;
  }, [Metadata]);

  return (
    <div className="container-fluid home-container">
      <div className="content-wrap">
        <div className="content-intro" aria-label="Introduction">
          <h2 className="content-subtitle">Hey There,</h2>
          <h1 className="content-title" aria-label="Name">
            {`I’m ${Metadata.shortTitle}`}
          </h1>
          <h1 className="fw-bold">
            <span className="leftarrow">&lt;</span>
            <span style={{ color: "#d7720c", margin: "0 2px" }}>
              {Metadata.designation}
            </span>
            <span className="rightarrow">&gt;</span>
          </h1>
          <div className="content-info" aria-label="Goal">
            {Metadata.description}
          </div>
        </div>
        <div className="content-experience" aria-label="Experience">
          <div className="d-flex flex-row align-items-center">
            <h1 className="fw-bold mb-0 lh-sm" style={{ fontSize: "2.5rem" }}>
              {Metadata.experience}
            </h1>
            <div className="d-block ms-1 lh-sm">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </div>
        </div>
        <div className="content-cta" aria-label="Explore All Projects">
          <button
            className="btn btn-primary pt-2 pb-2 fs-auto"
            onClick={() => navigate("/projects")}
          >
            Explore Projects
          </button>
        </div>
      </div>
      <div className="content-img-wrap">
        <img
          className="content-img-avatar"
          alt="Hero Main Avatar"
          aria-label="Avatar"
          loading="lazy"
          src={Metadata.image}
          srcSet={Metadata.image}
        />
      </div>
    </div>
  );
}
