import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getVehicle, vehicles } from "@/data/vehicles";
import { regions } from "@/data/regions";

const SITE = "https://707sky.com";

type Props = {
  params: Promise<{
    vehicle: string;
  }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    vehicle: vehicle.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { vehicle: slug } = await params;

  const vehicle = getVehicle(slug);

  if (!vehicle) {
    return {
      title: "차량을 찾을 수 없습니다 | 707스카이",
    };
  }

  const title =
    `${vehicle.title} | 서울·경기·인천 스카이차 | 707스카이`;

  const description =
    `${vehicle.title} 작업 안내. ${vehicle.description} 서울·경기·인천 간판, 외벽, 전기·조명, 철골, 시설물 고소작업 상담.`;

  const canonical =
    `${SITE}/vehicles/${vehicle.slug}`;

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
          url: `${SITE}${vehicle.image}`,
          alt: `${vehicle.title} 작업 현장`,
        },
      ],
    },
  };
}

export default async function VehiclePage({
  params,
}: Props) {
  const { vehicle: slug } = await params;

  const vehicle = getVehicle(slug);

  if (!vehicle) {
    notFound();
  }

  const otherVehicles =
    vehicles.filter(
      (item) => item.slug !== vehicle.slug
    );

  const seoulRegions =
    regions.filter(
      (region) => region.province === "seoul"
    );

  const gyeonggiRegions =
    regions.filter(
      (region) => region.province === "gyeonggi"
    );

  const incheonRegions =
    regions.filter(
      (region) => region.province === "incheon"
    );

  const faq = [
    {
      q: `${vehicle.name} 스카이차는 어떤 작업에 사용하나요?`,
      a:
        `${vehicle.name} 스카이차는 간판 설치·철거, 외벽, 전기·조명, 철골, 공장 및 각종 시설물 고소작업에 활용할 수 있습니다.`,
    },

    {
      q: "어떤 차량이 필요한지 몰라도 상담할 수 있나요?",
      a:
        "가능합니다. 현장 위치와 작업 높이, 작업 내용, 차량 진입 여건 등을 확인하여 적합한 차량을 안내합니다.",
    },

    {
      q: "서울·경기·인천 작업이 가능한가요?",
      a:
        "707스카이는 서울·경기·인천 지역을 중심으로 스카이차 작업 상담을 진행합니다.",
    },

    {
      q: "작업 전에 무엇을 알려주면 되나요?",
      a:
        "현장 주소, 작업 종류, 예상 작업 높이, 도로 폭과 차량 진입 상황을 알려주시면 차량 안내에 도움이 됩니다.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Service",

        name: vehicle.title,

        serviceType:
          `${vehicle.name} 스카이차 고소작업`,

        description:
          vehicle.description,

        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "서울",
          },
          {
            "@type": "AdministrativeArea",
            name: "경기도",
          },
          {
            "@type": "AdministrativeArea",
            name: "인천",
          },
        ],

        provider: {
          "@type": "Organization",
          name: "707스카이",
          url: SITE,
        },

        url:
          `${SITE}/vehicles/${vehicle.slug}`,
      },

      {
        "@type": "FAQPage",

        mainEntity:
          faq.map((item) => ({
            "@type": "Question",

            name: item.q,

            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
      },
    ],
  };

  return (
    <main className="vehiclePage">
      <style>{`
        .area-selector {
          max-width: 1320px;
          margin: 0 auto;
          padding: 110px 40px;
        }

        .area-selector-label {
          color: #778354;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 3px;
        }

        .area-selector-title {
          margin-top: 18px;
          font-size: clamp(44px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -5px;
          word-break: keep-all;
        }

        .area-selector-desc {
          max-width: 600px;
          margin-top: 25px;
          color: #73776d;
          font-size: 14px;
          line-height: 1.8;
          word-break: keep-all;
        }

        .area-group {
          margin-top: 65px;
        }

        .area-group-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 16px;
        }

        .area-group-eng {
          display: block;
          color: #7a8654;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .area-group-name {
          margin-top: 4px;
          font-size: 28px;
          line-height: 1;
          letter-spacing: -2px;
        }

        .area-all-link {
          color: #6f7369;
          font-size: 11px;
          font-weight: 700;
        }

        .area-button-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 7px;
        }

        .area-button {
          min-width: 0;
          min-height: 52px;
          padding: 0 14px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;

          background: #f7f6f0;
          border: 1px solid #cecec3;

          font-size: 13px;
          font-weight: 800;

          transition: .2s ease;
        }

        .area-button span {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .area-button b {
          flex: 0 0 auto;
          color: #7c8856;
          font-size: 10px;
          font-weight: 400;
        }

        .area-button:hover {
          background: #141811;
          border-color: #141811;
          color: white;
        }

        .area-button:hover b {
          color: #a7b776;
        }

        @media (max-width: 900px) {
          .area-button-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .area-selector {
            padding: 75px 20px;
          }

          .area-selector-title {
            font-size: 39px;
            letter-spacing: -3px;
          }

          .area-selector-desc {
            margin-top: 20px;
            font-size: 13px;
          }

          .area-group {
            margin-top: 48px;
          }

          .area-group-header {
            margin-bottom: 12px;
          }

          .area-group-name {
            font-size: 23px;
            letter-spacing: -1.5px;
          }

          .area-all-link {
            font-size: 10px;
          }

          .area-button-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 6px;
          }

          .area-button {
            min-height: 46px;
            padding: 0 11px;
            font-size: 12px;
            border-radius: 2px;
          }

          .area-button b {
            font-size: 9px;
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
        className="vehicleDetailHero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(7,9,6,.94) 0%,
              rgba(7,9,6,.72) 42%,
              rgba(7,9,6,.30) 100%
            ),
            url("${vehicle.image}")
          `,
        }}
      >
        <div className="vehicleDetailHeroInner">
          <Link
            href="/"
            className="vehicleDetailLogo"
          >
            <strong>
              707
            </strong>

            <span>
              SKY
            </span>
          </Link>

          <div className="vehicleBreadcrumb">
            <Link href="/">
              HOME
            </Link>

            <span>/</span>

            <span>
              VEHICLE
            </span>

            <span>/</span>

            <strong>
              {vehicle.name}
            </strong>
          </div>

          <div className="vehicleDetailLabel">
            SEOUL · GYEONGGI · INCHEON
          </div>

          <h1>
            {vehicle.name}
            <br />

            <strong>
              스카이차
            </strong>
          </h1>

          <p>
            {vehicle.description}
          </p>

          <div className="vehicleWorkTags">
            <span>간판</span>
            <span>외벽</span>
            <span>전기·조명</span>
            <span>철골</span>
            <span>시설물</span>
          </div>
        </div>
      </section>

      {/* 소개 */}

      <section className="vehicleDetailIntro">
        <span>
          {vehicle.name} SKY TRUCK
        </span>

        <div className="vehicleDetailIntroGrid">
          <h2>
            현장 조건에 맞는
            <br />
            {vehicle.name} 스카이차
          </h2>

          <div>
            <p>
              스카이차는 차량 톤수뿐 아니라
              작업 높이, 차량 진입 공간,
              도로 폭과 주변 장애물을
              함께 확인해야 합니다.
            </p>

            <p>
              707스카이는 현장 정보를
              확인하여 작업 조건에 적합한
              차량을 안내합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 작업 */}

      <section className="vehicleSuitable">
        <div className="vehicleDetailHeading">
          <span>
            WORK FIELD
          </span>

          <h2>
            {vehicle.name}
            <br />
            주요 작업
          </h2>
        </div>

        <div className="vehicleSuitableGrid">
          {vehicle.suitableFor.map(
            (item, index) => (
              <article key={item}>
                <span>
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>

                <h3>
                  {item}
                </h3>
              </article>
            )
          )}
        </div>
      </section>

      {/* 작업 사진 */}

      <section className="vehicleDetailIntro">
        <span>
          WORK PHOTO
        </span>

        <div className="vehicleDetailIntroGrid">
          <div>
            <h2>
              실제
              <br />
              작업 현장
            </h2>

            <p>
              현장 환경에 따라
              작업 반경과 차량 위치를
              고려하여 작업합니다.
            </p>
          </div>

          <div className="vehicleWorkPhoto">
            <img
              src={vehicle.image}
              alt={`${vehicle.name} 스카이차 실제 작업 현장`}
            />
          </div>
        </div>
      </section>

      {/* 체크포인트 */}

      <section className="vehicleSuitable">
        <div className="vehicleDetailHeading">
          <span>
            CHECK POINT
          </span>

          <h2>
            배차 전
            <br />
            확인 사항
          </h2>
        </div>

        <div className="vehicleSuitableGrid">
          <article>
            <span>01</span>

            <div>
              <h3>
                작업 높이
              </h3>

              <p>
                필요한 작업 높이를
                확인합니다.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>

            <div>
              <h3>
                차량 진입
              </h3>

              <p>
                골목과 도로 폭,
                진입 공간을 확인합니다.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>

            <div>
              <h3>
                주변 환경
              </h3>

              <p>
                전선과 구조물 등
                주변 장애물을 확인합니다.
              </p>
            </div>
          </article>

          <article>
            <span>04</span>

            <div>
              <h3>
                작업 종류
              </h3>

              <p>
                간판, 외벽, 철골 등
                작업 내용을 확인합니다.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* 지역 선택 */}

      <section className="area-selector">
        <span className="area-selector-label">
          SERVICE AREA
        </span>

        <h2 className="area-selector-title">
          지역별
          <br />
          스카이차
        </h2>

        <p className="area-selector-desc">
          원하는 지역을 선택하면
          해당 지역의 스카이차 상세페이지로
          바로 이동합니다.
        </p>

        {/* 서울 */}

        <div className="area-group">
          <div className="area-group-header">
            <div>
              <span className="area-group-eng">
                SEOUL
              </span>

              <h3 className="area-group-name">
                서울
              </h3>
            </div>

            <Link
              href="/area/seoul"
              className="area-all-link"
            >
              전체보기 ↗
            </Link>
          </div>

          <div className="area-button-grid">
            {seoulRegions.map((region) => (
              <Link
                key={`seoul-${region.slug}`}
                href={`/area/seoul/${region.slug}`}
                className="area-button"
              >
                <span>
                  {region.name}
                </span>

                <b>
                  ↗
                </b>
              </Link>
            ))}
          </div>
        </div>

        {/* 경기 */}

        <div className="area-group">
          <div className="area-group-header">
            <div>
              <span className="area-group-eng">
                GYEONGGI
              </span>

              <h3 className="area-group-name">
                경기
              </h3>
            </div>

            <Link
              href="/area/gyeonggi"
              className="area-all-link"
            >
              전체보기 ↗
            </Link>
          </div>

          <div className="area-button-grid">
            {gyeonggiRegions.map((region) => (
              <Link
                key={`gyeonggi-${region.slug}`}
                href={`/area/gyeonggi/${region.slug}`}
                className="area-button"
              >
                <span>
                  {region.name}
                </span>

                <b>
                  ↗
                </b>
              </Link>
            ))}
          </div>
        </div>

        {/* 인천 */}

        <div className="area-group">
          <div className="area-group-header">
            <div>
              <span className="area-group-eng">
                INCHEON
              </span>

              <h3 className="area-group-name">
                인천
              </h3>
            </div>

            <Link
              href="/area/incheon"
              className="area-all-link"
            >
              전체보기 ↗
            </Link>
          </div>

          <div className="area-button-grid">
            {incheonRegions.map((region) => (
              <Link
                key={`incheon-${region.slug}`}
                href={`/area/incheon/${region.slug}`}
                className="area-button"
              >
                <span>
                  {region.name}
                </span>

                <b>
                  ↗
                </b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 다른 차량 */}

      <section className="otherVehicleSection">
        <div className="vehicleDetailHeading">
          <span>
            OTHER VEHICLE
          </span>

          <h2>
            다른 차량
            <br />
            확인하기
          </h2>
        </div>

        <div className="otherVehicleGrid">
          {otherVehicles.map((item) => (
            <Link
              key={item.slug}
              href={`/vehicles/${item.slug}`}
            >
              <div className="otherVehicleImage">
                <img
                  src={item.image}
                  alt={`${item.name} 스카이차`}
                />
              </div>

              <div className="otherVehicleInfo">
                <strong>
                  {item.name}
                </strong>

                <span>
                  SKY TRUCK ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO */}

      <section className="vehicleSeo">
        <span>
          707 SKY SERVICE
        </span>

        <h2>
          {vehicle.name} 스카이차
          <br />
          작업 안내
        </h2>

        <p>
          {vehicle.name} 스카이차는
          작업 위치와 높이,
          차량 진입 여건과 주변 환경에 따라
          다양한 고소작업에 활용됩니다.
        </p>

        <p>
          서울·경기·인천 지역에서
          간판 설치 및 철거, 건물 외벽,
          전기·조명, 공장과 창고의 철골,
          시설물 작업 등에 필요한 차량을
          안내합니다.
        </p>
      </section>

      {/* FAQ */}

      <section className="vehicleFaqSection">
        <div className="vehicleDetailHeading">
          <span>
            FAQ
          </span>

          <h2>
            자주 묻는
            <br />
            질문
          </h2>
        </div>

        <div className="vehicleFaqList">
          {faq.map((item) => (
            <article key={item.q}>
              <h3>
                {item.q}
              </h3>

              <p>
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="vehicleDetailFooter">
        <Link href="/">
          <strong>
            707
          </strong>

          <span>
            SKY
          </span>
        </Link>

        <p>
          서울 · 경기 · 인천 스카이차
        </p>
      </footer>
    </main>
  );
}
