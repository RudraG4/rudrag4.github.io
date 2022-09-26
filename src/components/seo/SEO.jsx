import Helmet from "react-helmet";

export default function SEO({ title, description, socialBanner, siteUrl }) {
  const location = window.location;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta
        itemProp="image"
        content={`${location.origin || siteUrl}${socialBanner}`}
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${location.origin || siteUrl}${socialBanner}`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${location.origin || siteUrl}${socialBanner}`}
      />
    </Helmet>
  );
}
