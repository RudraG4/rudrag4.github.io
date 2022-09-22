import { SplashScreen, Header, ContactLinks } from "../components";
import { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import DataProvider from "../context/DataProvider";
import { DataContext } from "../context/BuildContext";
import "./baselayout.scss";

function SplashContent() {
  const { basic_info } = useContext(DataContext);
  return (
    <div className="d-flex gap-2 align-items-center lh-1 text-light">
      <img
        src="/logo-light.png"
        alt="Logo"
        loading="eager"
        width="50"
        height="auto"
      />
      <div className="fw-bold" style={{ fontSize: "40px" }}>
        {basic_info.name}
      </div>
    </div>
  );
}

export default function BaseLayout() {
  const delay = 2000;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [delay]);

  return (
    <DataProvider>
      <SplashScreen delay={delay}>
        <SplashContent />
      </SplashScreen>
      {!isLoading && (
        <>
          <Header />
          <main className="main-container">
            <div className="outlet-container container-xl">
              <Outlet />
            </div>
            <div className="contact-links-container h-100">
              <ContactLinks />
            </div>
          </main>
        </>
      )}
    </DataProvider>
  );
}
