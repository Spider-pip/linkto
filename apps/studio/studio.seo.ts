import { NextSeoProps } from "next-seo";

const seoConfig: NextSeoProps = {
  title: "Dashboard",
  titleTemplate: "%s — Linkto Studio",
  description:
    "Combine all your online content into one short, easy LinkinBio. Create link in bio pages for things like blogs, merch, multimedia and so much more.",
  canonical: "https://app.linkto.study",
  openGraph: {
    type: "website",
    description:
      "Combine all your online content into one short, easy LinkinBio.",
    locale: "en_IE",
    url: "https://app.linkto.study",
    site_name: "Linkto Studio",
  },
  twitter: {
    handle: "@zaidmukaddam",
    site: "@zaidmukaddam",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      property: "dc:creator",
      content: "Zaid Mukaddam",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
};

export default seoConfig;
