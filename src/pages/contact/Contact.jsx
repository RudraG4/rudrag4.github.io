import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  faLocationDot,
  faPaperPlane,
  faCircleNotch,
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.scss";

export default function Contact() {
  const _initFields = {
    fromName: "",
    replyTo: "",
    message: "",
  };
  const [formData, setFormData] = useState(_initFields);
  const [error, setError] = useState(_initFields);
  const [sendStatus, setSendStatus] = useState();

  const sendEmail = (templateParams) => {
    return emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY
    );
  };

  const validate = () => {
    let isValid = true;
    if (!formData.fromName) {
      setError((_o) => {
        return { ..._o, fromName: "Please provide a name" };
      });
      isValid = false;
    }
    if (!formData.replyTo) {
      setError((_o) => {
        return { ..._o, replyTo: "Please provide a valid email" };
      });
      isValid = false;
    }
    if (!formData.message) {
      setError((_o) => {
        return { ..._o, message: "Message cannot be empty" };
      });
      isValid = false;
    }
    return isValid;
  };

  const onValueChange = (event) => {
    const { name, value } = event.target;
    setFormData((_old) => {
      return { ..._old, [name]: value };
    });
  };

  const onFocusChange = (event) => {
    const { name } = event.target;
    setError((_o) => {
      delete _o[name];
      return { ..._o };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      if (!sendStatus) {
        setSendStatus("SENDING");
        try {
          sendEmail(formData).then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setSendStatus("SUCCESS");
            },
            (error) => {
              console.log(error.text);
              setSendStatus("FAILED");
            }
          );
        } catch (e) {
          setSendStatus("FAILED");
        }
      }
    }
  };

  useEffect(() => {
    if (["SUCCESS", "FAILED"].includes(sendStatus)) {
      setTimeout(() => {
        setSendStatus();
      }, 2000);
    }
  }, [sendStatus]);

  return (
    <div className="container-fluid contact-container row flex-column">
      <div className="contact-main row">
        <div className="col contact-main-left">
          <p className="fs-1">Let&apos;s create something better together.</p>
          <p className="fs-3">
            <span>Start by </span>
            <span style={{ color: "#D7720C" }}>saying hi!</span>
          </p>
        </div>
        <div className="col contact-main-right">
          <form className="contact_form" noValidate onSubmit={onSubmit}>
            <div className="row gap-3">
              <div className={`col${error.fromName ? ` has-validation ` : ""}`}>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fromName"
                  placeholder="Your name"
                  required
                  onChange={onValueChange}
                  onFocus={onFocusChange}
                />
                {error.name && (
                  <div className="invalid-feedback">
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="me-2"
                    />
                    {error.name}
                  </div>
                )}
              </div>
              <div className={`col${error.replyTo ? ` has-validation ` : ""}`}>
                <label htmlFor="email" className="form-label">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="replyTo"
                  placeholder="Your email to connect"
                  required
                  onChange={onValueChange}
                  onFocus={onFocusChange}
                />
                {error.email && (
                  <div className="invalid-feedback">
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="me-2"
                    />
                    {error.email}
                  </div>
                )}
              </div>
            </div>
            <div className="row gap-3">
              <div className={`col${error.message ? ` has-validation ` : ""}`}>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Leave a message..."
                  autoCorrect="autoCorrect"
                  onChange={onValueChange}
                  onFocus={onFocusChange}
                ></textarea>
                {error.message && (
                  <div className="invalid-feedback">
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className="me-2"
                    />
                    {error.message}
                  </div>
                )}
              </div>
            </div>
            <div className="row gap-3 justify-content-end">
              <button
                className="btn btn-primary contact-submit"
                disabled={sendStatus != undefined ? "disabled" : ""}
              >
                {sendStatus === "SENDING" ? (
                  <>
                    Sending
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className={`ms-2 animate-spinner`}
                    />
                  </>
                ) : sendStatus === "SUCCESS" ? (
                  <>
                    Sent
                    <FontAwesomeIcon icon={faCircleCheck} className={`ms-2`} />
                  </>
                ) : sendStatus === "FAILED" ? (
                  <>
                    Error Sending
                    <FontAwesomeIcon
                      icon={faCircleExclamation}
                      className={`ms-2`}
                    />
                  </>
                ) : (
                  <>
                    Send
                    <FontAwesomeIcon icon={faPaperPlane} className={`ms-2`} />
                  </>
                )}
              </button>
            </div>
          </form>
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
