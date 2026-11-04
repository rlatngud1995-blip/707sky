import type { Metadata } from "next";
import "./globals.css";

import CallBar from "./components/CallBar";

const SITE = "https://707sky.com";

const FAVICON =
  "/46E73DAA-C762-45EE-A1F4-6FD884C8C199.png";

const PHONE =
  "010-9413-4686";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),

  title: {
    default:
      "707스카이 | 서울·경기·인천 스카이차",

    template:
      "%s | 707스카이",
  },

  description:
    "서울·경기·인천 스카이차 전문 707스카이. 1톤부터 5톤까지 간판·외벽·철골·시설물 고소작업 상담.",

  keywords: [
    "707스카이",
    "스카이차",
    "서울 스카이차",
    "경기 스카이차",
    "경기도 스카이차",
    "인천 스카이차",
    "1톤 스카이차",
    "2.5톤 스카이차",
    "3.5톤 스카이차",
    "4.5톤 스카이차",
    "5톤 스카이차",
    "고소작업차",
    "간판 스카이차",
    "외벽 스카이차",
    "철골 스카이차",
    "공장 스카이차",
  ],

  authors: [
    {
      name: "707스카이",
    },
  ],

  creator:
    "707스카이",

  publisher:
    "707스카이",

  category:
    "스카이차 고소작업",

  alternates: {
    canonical:
      SITE,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],

    shortcut:
      FAVICON,

    apple: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type:
      "website",

    locale:
      "ko_KR",

    url:
      SITE,

    siteName:
      "707스카이",

    title:
      "707스카이 | 서울·경기·인천 스카이차",

    description:
      "서울·경기·인천 스카이차 전문 707스카이. 1톤부터 5톤까지 고소작업 상담.",

    images: [
      {
        url:
          "/IMG_2251.jpeg",

        width:
          1200,

        height:
          630,

        alt:
          "707스카이 스카이차 작업 현장",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "707스카이 | 서울·경기·인천 스카이차",

    description:
      "서울·경기·인천 스카이차 전문 707스카이. 1톤부터 5톤까지 고소작업 상담.",

    images: [
      "/IMG_2251.jpeg",
    ],
  },

  other: {
    "format-detection":
      "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "Organization",

    name:
      "707스카이",

    url:
      SITE,

    logo:
      `${SITE}${FAVICON}`,

    image:
      `${SITE}${FAVICON}`,

    telephone:
      PHONE,

    description:
      "서울·경기·인천 스카이차 전문 707스카이. 1톤부터 5톤까지 고소작업 상담.",

    areaServed: [
      {
        "@type":
          "AdministrativeArea",

        name:
          "서울",
      },

      {
        "@type":
          "AdministrativeArea",

        name:
          "경기도",
      },

      {
        "@type":
          "AdministrativeArea",

        name:
          "인천",
      },
    ],
  };

  const websiteJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "WebSite",

    name:
      "707스카이",

    url:
      SITE,

    inLanguage:
      "ko-KR",

    publisher: {
      "@type":
        "Organization",

      name:
        "707스카이",

      logo: {
        "@type":
          "ImageObject",

        url:
          `${SITE}${FAVICON}`,
      },
    },
  };

  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="48713f453b8fe896e4b882e755a6a3a6868d3fba"
        />

        <meta
          name="theme-color"
          content="#0d100b"
        />

        <meta
          name="format-detection"
          content="telephone=yes"
        />

        <link
          rel="icon"
          href={FAVICON}
          type="image/png"
        />

        <link
          rel="shortcut icon"
          href={FAVICON}
          type="image/png"
        />

        <link
          rel="apple-touch-icon"
          href={FAVICON}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                organizationJsonLd
              ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                websiteJsonLd
              ),
          }}
        />
      </head>

      <body>
        {children}

        <CallBar />
      </body>
    </html>
  );
}
