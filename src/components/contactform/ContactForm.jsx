import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCircleNotch,
  faCircleExclamation,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage } from "components";
import emailjs from "@emailjs/browser";
import "./contactform.scss";

export default function ContactForm({ serviceId, templateId, publicKey }) {
  const _initFields = { fromName: "", replyTo: "", message: "" };
  const [formData, setFormData] = useState(_initFields);
  const [error, setError] = useState(_initFields);
  const [sendStatus, setSendStatus] = useState();
  const formNameRef = useRef(null);

  const sendEmail = (templateParams) => {
    return emailjs.send(serviceId, templateId, templateParams, publicKey);
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
            () => {
              setSendStatus("SUCCESS");
            },
            () => {
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

  useEffect(() => {
    formNameRef.current && formNameRef.current.focus();
  }, []);

  return (
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
            ref={formNameRef}
          />
          <ErrorMessage message={error.fromName} />
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
          <ErrorMessage message={error.replyTo} />
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
          <ErrorMessage message={error.message} />
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
              <FontAwesomeIcon icon={faCircleExclamation} className={`ms-2`} />
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
  );
}
