import { createPortal } from "react-dom";
import Analytics from "components/analytics/GoogleAnalytics";

export default function SEO(metadata) {
  const head = document.head || document.querySelector("head");
  return createPortal(
    <Analytics analyticsId={metadata.googleAnalyticsId} />,
    head
  );
}
