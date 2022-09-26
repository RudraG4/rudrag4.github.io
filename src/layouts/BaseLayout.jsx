import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SplashScreen, Header, ContactLinks } from "components";
import Config from "config";
import "./baselayout.scss";

export default function BaseLayout() {
  const delay = 2000;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [delay]);

  return (
    <>
      <SplashScreen delay={delay}>
        <div className="d-flex gap-2 align-items-center lh-1 text-light">
          <img
            src={Config.Metadata.siteLogoLight}
            srcSet={Config.Metadata.siteLogoLight}
            alt="Logo"
            width="50"
            height="auto"
          />
          <div className="fw-bold" style={{ fontSize: "40px" }}>
            {Config.Metadata.shortTitle}
          </div>
        </div>
      </SplashScreen>
      {!isLoading && (
        <div className="position-relative">
          <Header />
          <main className="main-container">
            <div className="contact-links-container h-100">
              <ContactLinks links={Config.Contact.links} />
            </div>
            <div className="outlet-container container-xl">
              <Outlet context={Config} />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
