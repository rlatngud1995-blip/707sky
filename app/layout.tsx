import type { Metadata } from "next";
import "./globals.css";

const SITE = "https://707sky.com";

const FAVICON =
  "/46E73DAA-C762-45EE-A1F4-6FD884C8C199.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),

  title: {
    default:
      "707스카이 | 서울·경기·인천 스카이차",
    template:
      "%s | 707스카이",
  },

  description:
    "서울·경기·인천 스카이차 전문 707스카이. 1톤·2.5톤·3.5톤·4.5톤·5톤 스카이차. 간판, 외벽, 전기·조명, 철골, 공장, 창고 및 각종 시설물 고소작업 안내.",

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
    canonical: SITE,
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
      {
        url: FAVICON,
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: FAVICON,
        sizes: "192x192",
        type: "image/png",
      },
    ],

    shortcut:
      FAVICON,

    apple: [
      {
        url: FAVICON,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest:
    undefined,

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
      "서울·경기·인천 스카이차 전문. 1톤부터 5톤까지 간판, 외벽, 전기·조명, 철골 및 각종 고소작업 현장에 맞는 차량을 안내합니다.",

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
      "서울·경기·인천 스카이차 전문 707스카이. 1톤·2.5톤·3.5톤·4.5톤·5톤 고소작업 안내.",

    images: [
      "/IMG_2251.jpeg",
    ],
  },

  other: {
    "format-detection":
      "telephone=yes",

    "msapplication-TileImage":
      FAVICON,

    "msapplication-TileColor":
      "#0d100b",
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

    description:
      "서울·경기·인천 지역을 중심으로 1톤·2.5톤·3.5톤·4.5톤·5톤 스카이차 고소작업을 안내하는 707스카이.",

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

  const webSiteJsonLd = {
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

        {/*
          네이버 서치어드바이저에서
          소유확인 코드를 받으면 아래에 추가

          <meta
            name="naver-site-verification"
            content="네이버에서 받은 코드"
          />
        */}

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
                webSiteJsonLd
              ),
          }}
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
