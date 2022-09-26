import { SocialMediaLink } from "components";
import "./contactlinks.scss";

export default function ContactLinks({ links }) {
  return (
    <div className="contact-links h-100">
      {Object.keys(links).map((key, _id) => {
        return <SocialMediaLink key={_id} to={links[key]} type={key} />;
      })}
    </div>
  );
}
