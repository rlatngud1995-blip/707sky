import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getRegion,
  regions,
} from "@/data/regions";

import {
  getVehicle,
  vehicles,
} from "@/data/vehicles";

const SITE = "https://707sky.com";

const PHONE = "01094134686";
const DISPLAY_PHONE = "010-9413-4686";

type Props = {
  params: Promise<{
    province: string;
    district: string;
    vehicle: string;
  }>;
};

export function generateStaticParams() {
  return regions.flatMap((region) =>
    vehicles.map((vehicle) => ({
      province: region.province,
      district: region.slug,
      vehicle: vehicle.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {
    province,
    district,
    vehicle: vehicleSlug,
  } = await params;

  const region =
    getRegion(province, district);

  const vehicle =
    getVehicle(vehicleSlug);

  if (!region || !vehicle) {
    return {
      title:
        "페이지를 찾을 수 없습니다 | 707스카이",
    };
  }

  const title =
    `${region.name} ${vehicle.name} 스카이차 | 707스카이`;

  const description =
    `${region.name} ${vehicle.name} 스카이차 작업 안내. ` +
    `${vehicle.headline}. ` +
    `${region.provinceName} ${region.name} 간판·외벽·전기·조명·철골·시설물 고소작업 상담.`;

  const canonical =
    `${SITE}/area/${region.province}/${region.slug}/${vehicle.slug}`;

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
          url:
            `${SITE}${vehicle.image}`,

          alt:
            `${region.name} ${vehicle.name} 스카이차 작업`,
        },
      ],
    },
  };
}

export default async function RegionVehiclePage({
  params,
}: Props) {
  const {
    province,
    district,
    vehicle: vehicleSlug,
  } = await params;

  const region =
    getRegion(province, district);

  const vehicle =
    getVehicle(vehicleSlug);

  if (!region || !vehicle) {
    notFound();
  }

  const otherVehicles =
    vehicles.filter(
      (item) =>
        item.slug !== vehicle.slug
    );

  const sameProvinceRegions =
    regions
      .filter(
        (item) =>
          item.province === region.province &&
          item.slug !== region.slug
      )
      .slice(0, 12);

  const canonical =
    `${SITE}/area/${region.province}/${region.slug}/${vehicle.slug}`;

  const faq = [
    {
      q:
        `${region.name}에서 ${vehicle.name} 스카이차 작업이 가능한가요?`,

      a:
        `네. 707스카이는 ${region.name}의 ${vehicle.name} 스카이차 고소작업 상담을 진행합니다. 현장 위치와 작업 높이, 차량 진입 여건을 확인한 후 차량을 안내합니다.`,
    },

    {
      q:
        `${vehicle.name} 스카이차는 어떤 작업에 적합한가요?`,

      a:
        vehicle.description,
    },

    {
      q:
        `${region.name}에서 어떤 차량을 선택해야 하나요?`,

      a:
        `작업 높이, 작업 반경, 도로 폭, 차량 진입 공간과 주변 구조물을 확인한 후 ${vehicle.name} 또는 다른 차량을 선택하는 것이 좋습니다.`,
    },

    {
      q:
        "현장 사진으로 상담할 수 있나요?",

      a:
        "현장 위치와 작업 내용, 작업 높이를 확인할 수 있는 정보를 준비하면 차량 선택에 도움이 됩니다.",
    },
  ];

  const jsonLd = {
    "@context":
      "https://schema.org",

    "@graph": [
      {
        "@type":
          "Service",

        name:
          `${region.name} ${vehicle.name} 스카이차`,

        serviceType:
          `${vehicle.name} 스카이차 고소작업`,

        description:
          `${region.name} ${vehicle.name} 스카이차 작업 안내. ${vehicle.description}`,

        image:
          `${SITE}${vehicle.image}`,

        url:
          canonical,

        provider: {
          "@type":
            "Organization",

          name:
            "707스카이",

          url:
            SITE,

          telephone:
            DISPLAY_PHONE,
        },

        areaServed: {
          "@type":
            "AdministrativeArea",

          name:
            `${region.provinceName} ${region.name}`,
        },
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
              `${SITE}/area/${region.province}/${region.slug}`,
          },

          {
            "@type":
              "ListItem",

            position:
              4,

            name:
              `${vehicle.name} 스카이차`,

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
        .rv-intro,
        .rv-photo,
        .rv-work,
        .rv-vehicle,
        .rv-area,
        .rv-seo,
        .rv-faq {
          max-width: 1320px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        .rv-label {
          color: #74804f;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .rv-title {
          margin-top: 20px;
          font-size: clamp(44px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -5px;
          word-break: keep-all;
        }

        .rv-intro-grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 90px;
          align-items: end;
        }

        .rv-intro-grid p,
        .rv-seo p {
          margin-top: 15px;
          color: #73776d;
          font-size: 14px;
          line-height: 1.9;
          word-break: keep-all;
        }

        .rv-photo-box {
          position: relative;
          margin-top: 42px;
          height: 520px;
          overflow: hidden;
          background: #11140f;
        }

        .rv-photo-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rv-photo-shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              transparent 55%,
              rgba(5,7,4,.75)
            );
        }

        .rv-photo-caption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 22px;
          color: #fff;
        }

        .rv-photo-caption span {
          color: #acba78;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .rv-photo-caption strong {
          display: block;
          margin-top: 7px;
          font-size: 21px;
          letter-spacing: -1px;
        }

        .rv-work-grid {
          margin-top: 45px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #c5c6bc;
          border-left: 1px solid #c5c6bc;
        }

        .rv-work-grid article {
          min-height: 210px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid #c5c6bc;
          border-bottom: 1px solid #c5c6bc;
        }

        .rv-work-grid article > span {
          color: #7a8655;
          font-size: 9px;
        }

        .rv-work-grid h3 {
          font-size: 20px;
          letter-spacing: -1.5px;
        }

        .rv-work-grid p {
          margin-top: 8px;
          color: #73776d;
          font-size: 12px;
          line-height: 1.7;
          word-break: keep-all;
        }

        .rv-vehicle {
          max-width: none;
          background: #11140f;
          color: white;
        }

        .rv-vehicle-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        .rv-vehicle .rv-label {
          color: #a5b474;
        }

        .rv-vehicle-grid {
          margin-top: 45px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,.12);
        }

        .rv-vehicle-grid a {
          min-height: 150px;
          padding: 20px;
          background: #11140f;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .rv-vehicle-grid strong {
          font-size: 27px;
          letter-spacing: -2px;
        }

        .rv-vehicle-grid span {
          color: #9cab70;
          font-size: 9px;
        }

        .rv-area-grid {
          margin-top: 45px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0,1fr));
          gap: 7px;
        }

        .rv-area-grid a {
          min-height: 50px;
          padding: 0 13px;
          background: #f7f6f0;
          border: 1px solid #cecec3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          font-weight: 800;
        }

        .rv-area-grid a b {
          color: #7a8655;
          font-size: 10px;
          font-weight: 400;
        }

        .rv-area-grid a:hover {
          background: #141811;
          border-color: #141811;
          color: white;
        }

        .rv-seo {
          max-width: 900px;
        }

        .rv-faq-list {
          margin-top: 45px;
          border-top: 1px solid #c5c6bc;
        }

        .rv-faq-list article {
          padding: 27px 0;
          border-bottom: 1px solid #c5c6bc;
        }

        .rv-faq-list h3 {
          font-size: 18px;
          letter-spacing: -1px;
          word-break: keep-all;
        }

        .rv-faq-list p {
          max-width: 850px;
          margin-top: 11px;
          color: #73776d;
          font-size: 13px;
          line-height: 1.85;
          word-break: keep-all;
        }

        @media (max-width: 800px) {
          .rv-intro,
          .rv-photo,
          .rv-work,
          .rv-vehicle,
          .rv-area,
          .rv-seo,
          .rv-faq {
            padding: 72px 20px;
          }

          .rv-title {
            font-size: 39px;
            letter-spacing: -3px;
          }

          .rv-intro-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .rv-photo-box {
            height: 330px;
          }

          .rv-work-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .rv-work-grid article {
            min-height: 170px;
            padding: 17px;
          }

          .rv-vehicle-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .rv-area-grid {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .rv-area-grid a {
            min-height: 46px;
            padding: 0 10px;
            font-size: 11px;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}

      <section
        className="regionHero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(7,9,6,.95),
              rgba(7,9,6,.64),
              rgba(7,9,6,.35)
            ),
            url("${vehicle.image}")
          `,
        }}
      >
        <div className="regionHeroInner">
          <Link
            href="/"
            className="regionLogo"
          >
            <strong>
              707
            </strong>

            <span>
              SKY
            </span>
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

            <Link
              href={`/area/${region.province}/${region.slug}`}
            >
              {region.name}
            </Link>

            <span>/</span>

            <strong>
              {vehicle.name}
            </strong>
          </div>

          <div className="regionLabel">
            {region.name} · {vehicle.english}
          </div>

          <h1>
            {region.name}
            <br />

            <strong>
              {vehicle.name} 스카이차
            </strong>
          </h1>

          <p>
            {region.name}에서
            {` ${vehicle.name} `}
            스카이차가 필요한
            간판·외벽·전기·조명·철골 및
            시설물 고소작업 현장을 안내합니다.
          </p>

          <a
            href={`tel:${PHONE}`}
            style={{
              display: "inline-flex",
              marginTop: "30px",
              minHeight: "52px",
              padding: "0 22px",
              alignItems: "center",
              background: "#98a768",
              color: "#0c0f0a",
              fontSize: "12px",
              fontWeight: "900",
            }}
          >
            전화상담&nbsp;&nbsp;
            {DISPLAY_PHONE}
          </a>
        </div>
      </section>

      {/* 소개 */}

      <section className="rv-intro">
        <span className="rv-label">
          LOCAL VEHICLE SERVICE
        </span>

        <div className="rv-intro-grid">
          <h2 className="rv-title">
            {region.name}
            <br />

            {vehicle.name} 스카이차
          </h2>

          <div>
            <p>
              {vehicle.description}
            </p>

            <p>
              {region.name} 현장의
              도로 폭, 차량 진입 공간,
              작업 높이와 주변 구조물을 확인하여
              실제 작업에 적합한 차량을
              선택하는 것이 중요합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 사진 */}

      <section className="rv-photo">
        <span className="rv-label">
          WORK PHOTO
        </span>

        <h2 className="rv-title">
          실제
          <br />
          작업 현장
        </h2>

        <div className="rv-photo-box">
          <img
            src={vehicle.image}
            alt={`${region.name} ${vehicle.name} 스카이차 작업 현장`}
          />

          <div className="rv-photo-shade" />

          <div className="rv-photo-caption">
            <span>
              707 SKY · WORK SITE
            </span>

            <strong>
              {region.name} {vehicle.name} 스카이차
            </strong>
          </div>
        </div>
      </section>

      {/* 추천 작업 */}

      <section className="rv-work">
        <span className="rv-label">
          RECOMMENDED WORK
        </span>

        <h2 className="rv-title">
          {vehicle.name}
          <br />
          주요 작업
        </h2>

        <div className="rv-work-grid">
          {vehicle.suitableFor.map(
            (item, index) => (
              <article
                key={item.title}
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
                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* 다른 차량 */}

      <section className="rv-vehicle">
        <div className="rv-vehicle-inner">
          <span className="rv-label">
            OTHER VEHICLE
          </span>

          <h2 className="rv-title">
            {region.name}
            <br />
            다른 차량
          </h2>

          <div className="rv-vehicle-grid">
            {otherVehicles.map(
              (item) => (
                <Link
                  key={item.slug}
                  href={`/area/${region.province}/${region.slug}/${item.slug}`}
                >
                  <strong>
                    {item.name}
                  </strong>

                  <span>
                    {region.name} {item.name} ↗
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* 같은 권역 다른 지역 */}

      <section className="rv-area">
        <span className="rv-label">
          OTHER AREA
        </span>

        <h2 className="rv-title">
          {region.provinceName}
          <br />
          다른 지역
        </h2>

        <div className="rv-area-grid">
          {sameProvinceRegions.map(
            (item) => (
              <Link
                key={item.slug}
                href={`/area/${item.province}/${item.slug}/${vehicle.slug}`}
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

      {/* SEO 설명 */}

      <section className="rv-seo">
        <span className="rv-label">
          LOCAL GUIDE
        </span>

        <h2 className="rv-title">
          {region.name}
          <br />
          {vehicle.name} 현장 안내
        </h2>

        <p>
          {region.name}에서
          {` ${vehicle.name} `}
          스카이차가 필요한 경우
          작업 높이와 작업 반경,
          차량 진입 공간,
          도로 폭 등을 먼저
          확인하는 것이 중요합니다.
        </p>

        <p>
          {vehicle.headline}.
          간판 설치 및 철거,
          건물 외벽,
          전기·조명,
          철골 및 각종 시설물
          고소작업에 활용할 수 있습니다.
        </p>

        <p>
          현장 상황에 따라
          {` ${vehicle.name} `}
          대신 다른 톤수의
          스카이차가 더 적합할 수 있으므로
          실제 작업 조건을 확인한 후
          차량을 선택합니다.
        </p>
      </section>

      {/* FAQ */}

      <section className="rv-faq">
        <span className="rv-label">
          FAQ
        </span>

        <h2 className="rv-title">
          {region.name}
          <br />
          자주 묻는 질문
        </h2>

        <div className="rv-faq-list">
          {faq.map(
            (item) => (
              <article
                key={item.q}
              >
                <h3>
                  {item.q}
                </h3>

                <p>
                  {item.a}
                </p>
              </article>
            )
          )}
        </div>
      </section>

      <footer className="regionFooter">
        <Link href="/">
          <strong>
            707
          </strong>

          <span>
            SKY
          </span>
        </Link>

        <p>
          {region.name} {vehicle.name} 스카이차 · 707스카이
        </p>
      </footer>
    </main>
  );
}
