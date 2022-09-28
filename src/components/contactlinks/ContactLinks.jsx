import { SocialIcons } from "components";
import "./contactlinks.scss";

export default function ContactLinks({ links }) {
  return (
    <div className="contact-links h-100">
      {Object.keys(links).map((key, _id) => {
        return (
          <a key={_id} rel="noreferrer" href={links[key]} target="_blank">
            <SocialIcons type={key} />
          </a>
        );
      })}
    </div>
  );
}
