import Contact from "./contact";

function calculateDuration(date1, date2) {
  let totalmonths = Math.ceil(
    (new Date(date2.getFullYear(), date2.getMonth() + 1) - date1) /
      ((1000 * 60 * 60 * 24 * 365) / 12)
  );
  let years = parseInt(totalmonths / 12, 10);
  let months = totalmonths % 12;
  return [years, months].join(".");
}

/* eslint-disable */
export default {
  title: "Rudra Gowda M Patil",
  shortTitle: "Rudra",
  firstName: "Rudra Gowda",
  headerTitle: "Rudra Gowda M Patil",
  description:
    "Software Engineer based in Bengaluru. I'm focused on expanding my experience in designing and developing high-performing websites.",
  designation: "Software Engineer",
  company: "Huawei Technologies India",
  experience: calculateDuration(new Date(2018, 8), new Date()),
  siteUrl: "https://rudrag4.github.io",
  siteRepo: "https://github.com/RudraG4",
  siteLogo: "/assets/logo-dark.png",
  siteLogoLight: "/assets/logo-light.png",
  image: "/assets/Avatar-Rudra-BW.png",
  socialBanner: "/assets/banner.png",
  ...Contact.links,
  serviceId: process.env.REACT_APP_SERVICE_ID,
  templateId: process.env.REACT_APP_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
};
