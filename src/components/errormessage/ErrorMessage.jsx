import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function ErrorMessage({ message }) {
  if (!message) return;

  return (
    <div className="invalid-feedback">
      <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
      {message}
    </div>
  );
}
