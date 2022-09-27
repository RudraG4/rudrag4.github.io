import { createPortal } from "react-dom";
import Config from "config";

const GAScript = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${Config.Metadata.googleAnalyticsId}`}
      />

      <script id="ga-script">
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){ dataLayer.push(arguments); }
           gtag('js', new Date());
           gtag('config', '${Config.Metadata.googleAnalyticsId}', {
              page_path: window.location.pathname
           });
        `}
      </script>
    </>
  );
};

export default () => {
  /* eslint-disable-next-line */
  if (process.env.NODE_ENV != "production") return;
  const head = document.head || document.querySelector("head");
  return createPortal(<GAScript />, head);
};

export const sendEvent = (action, category, label, value) => {
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
