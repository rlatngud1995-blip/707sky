import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { regions } from "@/data/regions";

const SITE = "https://707sky.com";

const provinceInfo = {
  seoul: {
    name: "서울",
    title: "서울 스카이차",
    description:
      "서울 전 지역 스카이차 전문 707스카이. 강남구, 송파구, 서초구, 영등포구 등 서울 25개 구 지역별 스카이차 작업 정보를 확인하세요.",
  },

  gyeonggi: {
    name: "경기",
    title: "경기 스카이차",
    description:
      "경기도 전 지역 스카이차 전문 707스카이. 수원, 용인, 화성, 평택, 안산, 시흥 등 경기 시·군별 스카이차 작업 정보를 확인하세요.",
  },

  incheon: {
    name: "인천",
    title: "인천 스카이차",
    description:
      "인천 전 지역 스카이차 전문 707스카이. 남동구, 부평구, 서구, 연수구 등 인천 구·군별 스카이차 작업 정보를 확인하세요.",
  },
};

type ProvinceKey = keyof typeof provinceInfo;

type Props = {
  params: Promise<{
    province: string;
  }>;
};

export function generateStaticParams() {
  return [
    { province: "seoul" },
    { province: "gyeonggi" },
    { province: "incheon" },
  ];
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { province } = await params;

  if (!(province in provinceInfo)) {
    return {};
  }

  const info =
    provinceInfo[province as ProvinceKey];

  const canonical =
    `${SITE}/area/${province}`;

  return {
    title:
      `${info.title} | 지역별 1톤·2.5톤·3.5톤·4.5톤·5톤 | 707스카이`,

    description:
      info.description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title:
        `${info.title} | 707스카이`,

      description:
        info.description,

      url:
        canonical,

      siteName:
        "707스카이",

      type:
        "website",

      locale:
        "ko_KR",

      images: [
        {
          url:
            `${SITE}/IMG_2251.jpeg`,

          width: 1200,

          height: 630,

          alt:
            `${info.name} 스카이차 707스카이`,
        },
      ],
    },
  };
}

export default async function ProvincePage({
  params,
}: Props) {
  const { province } = await params;

  if (!(province in provinceInfo)) {
    notFound();
  }

  const info =
    provinceInfo[province as ProvinceKey];

  const provinceRegions =
    regions.filter(
      (region) =>
        region.province === province
    );

  const canonical =
    `${SITE}/area/${province}`;

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@graph": [
      {
        "@type":
          "Service",

        name:
          `${info.name} 스카이차`,

        serviceType:
          "스카이차 고소작업",

        areaServed: {
          "@type":
            "AdministrativeArea",

          name:
            info.name,
        },

        provider: {
          "@type":
            "Organization",

          name:
            "707스카이",

          url:
            SITE,
        },

        url:
          canonical,

        description:
          info.description,
      },

      {
        "@type":
          "BreadcrumbList",

        itemListElement: [
          {
            "@type":
              "ListItem",

            position:
              1,

            name:
              "707스카이",

            item:
              SITE,
          },

          {
            "@type":
              "ListItem",

            position:
              2,

            name:
              info.name,

            item:
              canonical,
          },
        ],
      },
    ],
  };

  return (
    <main className="provincePage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}

      <section
        className="provinceHero"
        style={{
          backgroundImage:
            'linear-gradient(rgba(7,9,6,.75), rgba(7,9,6,.88)), url("/IMG_2251.jpeg")',
        }}
      >
        <div className="provinceHeroInner">
          <Link
            href="/"
            className="provinceLogo"
          >
            <strong>
              707
            </strong>

            <span>
              SKY
            </span>
          </Link>

          <div className="provinceBreadcrumb">
            <Link href="/">
              HOME
            </Link>

            <span>/</span>

            <strong>
              {info.name}
            </strong>
          </div>

          <span className="provinceLabel">
            SERVICE AREA
          </span>

          <h1>
            {info.name}
            <br />

            <strong>
              스카이차
            </strong>
          </h1>

          <p>
            {info.description}
          </p>
        </div>
      </section>

      {/* REGION LIST */}

      <section className="provinceRegionSection">
        <div className="provinceSectionHead">
          <span>
            LOCAL AREA
          </span>

          <h2>
            {info.name}
            <br />
            작업지역
          </h2>

          <p>
            지역을 선택하면
            해당 지역 스카이차
            상세페이지로 이동합니다.
          </p>
        </div>

        <div className="provinceRegionGrid">
          {provinceRegions.map(
            (region, index) => (
              <Link
                key={`${region.province}-${region.slug}`}
                href={`/area/${region.province}/${region.slug}`}
              >
                <span>
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div>
                  <strong>
                    {region.name}
                  </strong>

                  <p>
                    {region.name}
                    {" "}
                    스카이차
                  </p>
                </div>

                <b>
                  ↗
                </b>
              </Link>
            )
          )}
        </div>
      </section>

      {/* VEHICLES */}

      <section className="provinceVehicleSection">
        <div className="provinceSectionHead light">
          <span>
            VEHICLE
          </span>

          <h2>
            차량
            <br />
            안내
          </h2>
        </div>

        <div className="provinceVehicleGrid">
          <Link href="/vehicles/1ton">
            <strong>
              1톤
            </strong>

            <span>
              SKY TRUCK ↗
            </span>
          </Link>

          <Link href="/vehicles/2-5ton">
            <strong>
              2.5톤
            </strong>

            <span>
              SKY TRUCK ↗
            </span>
          </Link>

          <Link href="/vehicles/3-5ton">
            <strong>
              3.5톤
            </strong>

            <span>
              SKY TRUCK ↗
            </span>
          </Link>

          <Link href="/vehicles/4-5ton">
            <strong>
              4.5톤
            </strong>

            <span>
              SKY TRUCK ↗
            </span>
          </Link>

          <Link href="/vehicles/5ton">
            <strong>
              5톤
            </strong>

            <span>
              SKY TRUCK ↗
            </span>
          </Link>
        </div>
      </section>

      {/* SEO TEXT */}

      <section className="provinceSeo">
        <span>
          707 SKY SERVICE
        </span>

        <h2>
          {info.name}
          <br />
          스카이차 작업
        </h2>

        <p>
          707스카이는
          {info.name} 지역의
          상가, 건물, 공장,
          창고 및 각종 시설물
          고소작업에 필요한
          스카이차를 안내합니다.
        </p>

        <p>
          작업 위치와 작업 높이,
          진입 조건을 확인하여
          1톤, 2.5톤, 3.5톤,
          4.5톤, 5톤 차량 중
          현장에 적합한 장비를
          안내합니다.
        </p>
      </section>

      <footer className="provinceFooter">
        <Link href="/">
          <strong>
            707
          </strong>

          <span>
            SKY
          </span>
        </Link>

        <p>
          서울 · 경기 · 인천
          스카이차
        </p>
      </footer>
    </main>
  );
}
