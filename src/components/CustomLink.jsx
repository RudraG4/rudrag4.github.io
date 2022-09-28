import { useHref, useLinkClickHandler } from "react-router-dom";
import { sendEvent } from "components/Analytics";
const CustomLink = ({ to, className, title, children, target }) => {
  const _href = useHref(to);
  const href = to.startsWith("/") ? _href : to;
  const handleClick = useLinkClickHandler(to, {
    target,
  });
  const onClick = (event) => {
    sendEvent("link_click", "link", "Link", title);
    handleClick(event);
  };

  return (
    <a
      title={title}
      href={href}
      className={className}
      rel="noreferror"
      target={target || "_self"}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default CustomLink;
