import Helmet from "react-helmet";

export default function SEO() {
// {
// siteLogo,
// title,
// description,
// socialBanner,
// siteUrl,
// }
  // const location = window.location;
  return (
    <Helmet>
      {/* <title>{title}</title>
      <meta name="robots" content="index,follow" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href={siteLogo} />
      <link rel="icon" type="image/png" sizes="32x32" href={siteLogo} />
      <link rel="canonical" href={siteUrl} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta
        itemProp="image"
        content={`${siteUrl || location.origin}${socialBanner}`}
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${siteUrl || location.origin}${socialBanner}`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${siteUrl || location.origin}${socialBanner}`}
      /> */}
    </Helmet>
  );
}
