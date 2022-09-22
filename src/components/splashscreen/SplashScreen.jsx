import React from "react";
import "./splashscreen.scss";

export default function SplashScreen(props) {
  const { delay = 2000 } = props;

  return (
    <div
      className="splashscreen container-fluid"
      style={{ animation: `curtaintopleft 1.2s ${delay}ms 1 forwards` }}
    >
      <div
        className="splashscreen-content"
        style={{ animation: `slideInOutFromBottom ${delay}ms 500ms` }}
      >
        {React.isValidElement(props.children) && props.children}
      </div>
      <div
        className="splashscreen-bg"
        style={{ animation: `curtaintopleft 1.2s ${delay}ms 1 forwards` }}
      ></div>
    </div>
  );
}
