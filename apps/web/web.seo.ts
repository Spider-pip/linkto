import { NextSeoProps } from "next-seo";

const seoConfig: NextSeoProps = {
  title: "Linkto — Combine your content into one short, easy link",
  description:
    "Combine all your online content into one short, easy LinkinBio. Create link in bio pages for things like blogs, merch, multimedia and so much more.",
  canonical: "https://linkto.study",
  openGraph: {
    type: "website",
    description:
      "Combine all your online content into one short, easy LinkinBio.",
    locale: "en_IE",
    url: "https://linkto.study",
    site_name: "Linkto",
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
