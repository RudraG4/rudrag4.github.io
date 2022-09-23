import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/BuildContext";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();
  const { basic_info } = useContext(DataContext);

  useEffect(() => {
    document.title = `${basic_info.name} - ${basic_info.current_designation}`;
  }, [basic_info]);

  return (
    <div className="container-fluid home-container">
      <div className="content-wrap">
        <div className="content-intro" aria-label="Introduction">
          <h2 className="content-subtitle">Hey There,</h2>
          <h1 className="content-title" aria-label="Name">
            I'm {basic_info.short_name}
          </h1>
          <h1 className="fw-bold">
            <span className="leftarrow">&lt;</span>
            <span style={{ color: "rgb(215, 114, 12)" }}>
              {basic_info.current_designation}
            </span>
            <span className="rightarrow">&gt;</span>
          </h1>
          <div className="content-info" aria-label="Goal">
            {basic_info.goal}
          </div>
        </div>
        <div className="content-experience" aria-label="Experience">
          <div className="d-flex flex-row align-items-center">
            <h1 className="fw-bold mb-0 lh-sm" style={{ fontSize: "2.5rem" }}>
              {basic_info.experience}
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
          src="Avatar.png"
          srcSet="Avatar.png"
        />
      </div>
    </div>
  );
}
