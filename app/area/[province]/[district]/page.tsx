import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getRegion,
  regions,
} from "@/data/regions";

import {
  vehicles,
} from "@/data/vehicles";

const SITE = "https://707sky.com";

const WORK_IMAGE = "/IMG_2251.jpeg";

type Props = {
  params: Promise<{
    province: string;
    district: string;
  }>;
};

export function generateStaticParams() {
  return regions.map((region) => ({
    province: region.province,
    district: region.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { province, district } = await params;

  const region =
    getRegion(province, district);

  if (!region) {
    return {
      title: "지역을 찾을 수 없습니다 | 707스카이",
    };
  }

  const title =
    `${region.name} 스카이차 | 1톤·2.5톤·3.5톤·4.5톤·5톤 | 707스카이`;

  const description =
    `${region.name} 스카이차 전문 707스카이. ${region.description} ` +
    `1톤·2.5톤·3.5톤·4.5톤·5톤 스카이차 작업 및 실제 작업 현장 안내.`;

  const canonical =
    `${SITE}/area/${region.province}/${region.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "707스카이",
      locale: "ko_KR",
      type: "website",

      images: [
        {
          url: `${SITE}${WORK_IMAGE}`,
          alt: `${region.name} 스카이차 작업 현장`,
        },
      ],
    },
  };
}

export default async function RegionPage({
  params,
}: Props) {
  const { province, district } = await params;

  const region =
    getRegion(province, district);

  if (!region) {
    notFound();
  }

  const sameProvinceRegions =
    regions.filter(
      (item) =>
        item.province === region.province &&
        item.slug !== region.slug
    );

  const canonical =
    `${SITE}/area/${region.province}/${region.slug}`;

  const faq = [
    {
      q:
        `${region.name}에서 스카이차 작업이 가능한가요?`,

      a:
        `네. 707스카이는 ${region.name}의 간판, 외벽, 전기·조명, 철골, 공장 및 각종 시설물 고소작업 상담을 진행합니다.`,
    },

    {
      q:
        `${region.name}에서는 몇 톤 스카이차를 이용할 수 있나요?`,

      a:
        "현장 조건에 따라 1톤, 2.5톤, 3.5톤, 4.5톤, 5톤 스카이차를 안내합니다.",
    },

    {
      q:
        "어떤 작업에 스카이차를 사용할 수 있나요?",

      a:
        "간판 설치 및 철거, 건물 외벽, 전기·조명, 철골, 공장, 창고 및 각종 시설물 고소작업에 활용할 수 있습니다.",
    },

    {
      q:
        "어떤 차량이 필요한지 몰라도 괜찮나요?",

      a:
        "현장 위치, 작업 높이, 작업 내용과 차량 진입 여건을 확인한 후 현장에 적합한 차량을 안내합니다.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Service",

        name:
          `${region.name} 스카이차`,

        serviceType:
          "스카이차 고소작업",

        description:
          region.description,

        areaServed: {
          "@type":
            "AdministrativeArea",

          name:
            `${region.provinceName} ${region.name}`,
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

        image:
          `${SITE}${WORK_IMAGE}`,
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
              region.provinceName,

            item:
              `${SITE}/area/${region.province}`,
          },

          {
            "@type":
              "ListItem",

            position:
              3,

            name:
              region.name,

            item:
              canonical,
          },
        ],
      },

      {
        "@type":
          "FAQPage",

        mainEntity:
          faq.map((item) => ({
            "@type":
              "Question",

            name:
              item.q,

            acceptedAnswer: {
              "@type":
                "Answer",

              text:
                item.a,
            },
          })),
      },
    ],
  };

  return (
    <main className="regionPage">
      <style>{`
        .region-single-work {
          max-width: 1320px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        .region-single-work-label {
          color: #74804f;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .region-single-work-title {
          margin-top: 20px;
          font-size: clamp(45px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -5px;
          word-break: keep-all;
        }

        .region-single-work-desc {
          max-width: 620px;
          margin-top: 22px;
          color: #73776d;
          font-size: 14px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .region-single-work-photo {
          position: relative;
          margin-top: 45px;
          min-height: 520px;
          overflow: hidden;
          background: #11140f;
        }

        .region-single-work-photo img {
          width: 100%;
          height: 520px;
          object-fit: cover;
        }

        .region-single-work-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              transparent 55%,
              rgba(7,9,6,.72) 100%
            );
        }

        .region-single-work-caption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 22px;
          color: white;
        }

        .region-single-work-caption span {
          display: block;
          color: #b2c080;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .region-single-work-caption strong {
          display: block;
          margin-top: 7px;
          font-size: 20px;
          letter-spacing: -1px;
        }

        .local-vehicle-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 8px;
        }

        .local-vehicle-button {
          min-height: 90px;
          padding: 18px;

          background: #f7f6f0;
          border: 1px solid #cecec3;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          transition: .2s ease;
        }

        .local-vehicle-button strong {
          font-size: 24px;
          letter-spacing: -2px;
        }

        .local-vehicle-button span {
          color: #798553;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .local-vehicle-button:hover {
          background: #141811;
          border-color: #141811;
          color: white;
        }

        .local-area-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 7px;
        }

        .local-area-button {
          min-width: 0;
          min-height: 50px;
          padding: 0 13px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;

          background: #f7f6f0;
          border: 1px solid #cecec3;

          font-size: 12px;
          font-weight: 800;
        }

        .local-area-button span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .local-area-button b {
          color: #7a8655;
          font-size: 10px;
          font-weight: 400;
        }

        .region-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);

          border-top: 1px solid #c5c6bc;
          border-left: 1px solid #c5c6bc;
        }

        .region-info-grid article {
          min-height: 200px;
          padding: 22px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          border-right: 1px solid #c5c6bc;
          border-bottom: 1px solid #c5c6bc;
        }

        .region-info-grid article > span {
          color: #7a8655;
          font-size: 9px;
        }

        .region-info-grid h3 {
          font-size: 20px;
          letter-spacing: -1px;
        }

        .region-info-grid p {
          margin-top: 9px;
          color: #73776d;
          font-size: 12px;
          line-height: 1.7;
          word-break: keep-all;
        }

        @media (max-width: 800px) {
          .region-single-work {
            padding: 75px 20px;
          }

          .region-single-work-title {
            font-size: 40px;
            letter-spacing: -3px;
          }

          .region-single-work-photo {
            min-height: 380px;
          }

          .region-single-work-photo img {
            height: 380px;
          }

          .local-vehicle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .local-area-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .region-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 430px) {
          .region-single-work-photo {
            min-height: 320px;
          }

          .region-single-work-photo img {
            height: 320px;
          }

          .region-single-work-caption {
            left: 16px;
            bottom: 16px;
          }

          .region-single-work-caption strong {
            font-size: 17px;
          }

          .local-vehicle-button {
            min-height: 80px;
            padding: 15px;
          }

          .local-vehicle-button strong {
            font-size: 21px;
          }

          .local-area-button {
            min-height: 46px;
            padding: 0 10px;
            font-size: 11px;
          }

          .region-info-grid article {
            min-height: 170px;
            padding: 17px;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}

      <section
        className="regionHero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(7,9,6,.93),
              rgba(7,9,6,.60),
              rgba(7,9,6,.38)
            ),
            url("${WORK_IMAGE}")
          `,
        }}
      >
        <div className="regionHeroInner">
          <Link
            href="/"
            className="regionLogo"
          >
            <strong>707</strong>
            <span>SKY</span>
          </Link>

          <div className="regionBreadcrumb">
            <Link href="/">
              HOME
            </Link>

            <span>/</span>

            <Link
              href={`/area/${region.province}`}
            >
              {region.provinceName}
            </Link>

            <span>/</span>

            <strong>
              {region.name}
            </strong>
          </div>

          <div className="regionLabel">
            {region.provinceName} · SKY TRUCK
          </div>

          <h1>
            {region.name}
            <br />
            <strong>
              스카이차
            </strong>
          </h1>

          <p>
            {region.description}
          </p>

          <div className="regionVehicleTags">
            <span>1톤</span>
            <span>2.5톤</span>
            <span>3.5톤</span>
            <span>4.5톤</span>
            <span>5톤</span>
          </div>
        </div>
      </section>

      {/* 지역 소개 */}

      <section className="regionIntro">
        <span className="regionSmallTitle">
          707 SKY · {region.name}
        </span>

        <div className="regionIntroGrid">
          <h2>
            {region.name}
            <br />
            스카이차 작업
          </h2>

          <div>
            <p>
              707스카이는 {region.name}의
              상가, 건물, 공장, 창고 및
              각종 시설물의 고소작업에
              필요한 스카이차를 안내합니다.
            </p>

            <p>
              현장 위치와 작업 높이,
              차량 진입 공간과 작업 내용을 확인하여
              1톤부터 5톤까지 현장 조건에
              적합한 차량을 안내합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 실제 작업사진 1장 */}

      <section className="region-single-work">
        <span className="region-single-work-label">
          WORK PHOTO
        </span>

        <h2 className="region-single-work-title">
          {region.name}
          <br />
          실제 작업 현장
        </h2>

        <p className="region-single-work-desc">
          707스카이의 스카이차 작업 현장 사진입니다.
          실제 현장에서는 작업 높이와 진입 여건,
          주변 환경을 확인하여 작업에 적합한 차량을
          안내합니다.
        </p>

        <div className="region-single-work-photo">
          <img
            src={WORK_IMAGE}
            alt={`${region.name} 스카이차 실제 작업 현장`}
          />

          <div className="region-single-work-overlay" />

          <div className="region-single-work-caption">
            <span>
              707 SKY · WORK SITE
            </span>

            <strong>
              {region.name} 스카이차 작업
            </strong>
          </div>
        </div>
      </section>

      {/* 주요 작업 */}

      <section className="regionServices">
        <div className="regionSectionHead">
          <span>
            WORK FIELD
          </span>

          <h2>
            {region.name}
            <br />
            주요 작업
          </h2>
        </div>

        <div className="regionServiceGrid">
          <article>
            <span>01</span>

            <div>
              <h3>
                간판 작업
              </h3>

              <p>
                상가와 건물의
                간판 설치·철거 및 보수 작업
              </p>
            </div>
          </article>

          <article>
            <span>02</span>

            <div>
              <h3>
                외벽 작업
              </h3>

              <p>
                건물 외벽과
                고층부 시설물 작업
              </p>
            </div>
          </article>

          <article>
            <span>03</span>

            <div>
              <h3>
                전기 · 조명
              </h3>

              <p>
                외부 조명과
                전기시설 설치 및 유지보수
              </p>
            </div>
          </article>

          <article>
            <span>04</span>

            <div>
              <h3>
                철골 · 시설물
              </h3>

              <p>
                공장, 창고,
                철골 및 구조물 고소작업
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 차량 선택 */}

      <section className="regionVehicleSection">
        <div className="regionSectionHead">
          <span>
            VEHICLE
          </span>

          <h2>
            {region.name}
            <br />
            차량 안내
          </h2>
        </div>

        <div className="local-vehicle-grid">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.slug}
              href={`/vehicles/${vehicle.slug}`}
              className="local-vehicle-button"
            >
              <strong>
                {vehicle.name}
              </strong>

              <span>
                SKY TRUCK ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO 콘텐츠 */}

      <section className="regionSeoSection">
        <span>
          LOCAL SERVICE
        </span>

        <h2>
          {region.name}
          <br />
          스카이차 현장 안내
        </h2>

        <p>
          {region.name}에서 스카이차가 필요한 경우
          현장 주소, 작업 위치, 작업 높이와 차량 진입 조건을
          확인하여 적합한 차량을 안내합니다.
        </p>

        <p>
          상가 간판 설치 및 철거,
          건물 외벽 작업, 전기·조명,
          공장과 창고의 철골 작업,
          각종 시설물 유지보수 등
          다양한 고소작업에 활용할 수 있습니다.
        </p>
      </section>

      {/* 다른 지역 */}

      <section className="regionNearby">
        <div className="regionSectionHead">
          <span>
            OTHER AREA
          </span>

          <h2>
            {region.provinceName}
            <br />
            다른 작업지역
          </h2>
        </div>

        <div className="local-area-grid">
          {sameProvinceRegions.map(
            (item) => (
              <Link
                key={`${item.province}-${item.slug}`}
                href={`/area/${item.province}/${item.slug}`}
                className="local-area-button"
              >
                <span>
                  {item.name}
                </span>

                <b>
                  ↗
                </b>
              </Link>
            )
          )}
        </div>
      </section>

      {/* FAQ */}

      <section className="regionServices">
        <div className="regionSectionHead">
          <span>
            FAQ
          </span>

          <h2>
            {region.name}
            <br />
            자주 묻는 질문
          </h2>
        </div>

        <div
          style={{
            borderTop:
              "1px solid #c5c6bc",
          }}
        >
          {faq.map((item) => (
            <article
              key={item.q}
              style={{
                padding: "28px 0",

                borderBottom:
                  "1px solid #c5c6bc",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  letterSpacing: "-1px",
                  wordBreak: "keep-all",
                }}
              >
                {item.q}
              </h3>

              <p
                style={{
                  maxWidth: "850px",
                  marginTop: "12px",
                  color: "#73776d",
                  fontSize: "13px",
                  lineHeight: "1.85",
                  wordBreak: "keep-all",
                }}
              >
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="regionFooter">
        <Link href="/">
          <strong>707</strong>
          <span>SKY</span>
        </Link>

        <p>
          {region.name} 스카이차 · 707스카이
        </p>
      </footer>
    </main>
  );
}
