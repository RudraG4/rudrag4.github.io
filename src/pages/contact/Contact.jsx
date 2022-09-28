import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "components";
import "./contact.scss";

export default function Contact() {
  const { Metadata } = useOutletContext();

  useEffect(() => {
    document.title = `Contact - ${Metadata.headerTitle}`;
  }, [Metadata]);

  return (
    <div className="container-fluid contact-container row flex-column">
      <div className="contact-main row">
        <div className="col contact-main-left">
          <p className="title">Let&apos;s create something better together.</p>
          <p className="subtitle">
            <span>Start by </span>
            <span style={{ color: "#D7720C" }}>saying hi!</span>
          </p>
        </div>
        <div className="col contact-main-right">
          <ContactForm
            serviceId={Metadata.serviceId}
            templateId={Metadata.templateId}
            publicKey={Metadata.publicKey}
          />
        </div>
      </div>
      <div className="contact-footer">
        <div className="mb-3">
          <p className="fs-4 fw-normal mb-1 lh-1">Stay Connect</p>
          <p className="mb-0">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="me-1 text-danger"
            />
            Bangalore, Karnataka, India
          </p>
        </div>
        <div className="mb-3">
          <div>
            <span>Designed with </span>
            <span style={{ textAlign: "center", color: "red" }}> ❤ </span>
            <span>by RudraGowda</span>
          </div>
        </div>
      </div>
    </div>
  );
}
