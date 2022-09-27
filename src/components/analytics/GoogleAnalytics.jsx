const GAnalytics = ({ analyticsId }) => {
  /* eslint-disable-next-line */
  //   if (process.env.NODE_ENV != "production") return;
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
      />

      <script id="ga-script">
        {` window.dataLayer = window.dataLayer || [];
           function gtag(){ dataLayer.push(arguments); }
           gtag('js', new Date());
           gtag('config', '${analyticsId}', {
              send_page_view: false,
              page_path: window.location.pathname
           });
        `}
      </script>
    </>
  );
};

export default GAnalytics;

export const logEvent = (action, category, label, value) => {
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
