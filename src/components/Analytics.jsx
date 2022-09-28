import Config from "config";
import useScript from "hooks/useScript";

const Analytics = () => {
  const gtagUrl = "https://www.googletagmanager.com/gtag/js";
  const analyticsId = Config.Metadata.googleAnalyticsId;

  useScript({
    src: `${gtagUrl}?id=${analyticsId}`,
    id: "gt-script",
    async: true,
  });

  useScript({
    code: `window.dataLayer = window.dataLayer || [];
           function gtag(){ dataLayer.push(arguments); }
           gtag('js', new Date());
           gtag('config', '${analyticsId}', {
              page_path: window.location.pathname
           });`,
    id: "ga-script",
  });
};

export default Analytics;

export const sendEvent = (action, category, label, value) => {
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
