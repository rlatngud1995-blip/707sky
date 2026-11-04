import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getVehicle,
  vehicles,
} from "@/data/vehicles";

import {
  regions,
} from "@/data/regions";

const SITE =
  "https://707sky.com";

const PHONE =
  "01094134686";

const DISPLAY_PHONE =
  "010-9413-4686";

type Props = {
  params: Promise<{
    vehicle: string;
  }>;
};

export const dynamicParams =
  true;

export function generateStaticParams() {
  return vehicles.map(
    (vehicle) => ({
      vehicle:
        vehicle.slug,
    })
  );
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { vehicle: slug } =
    await params;

  const vehicle =
    getVehicle(slug);

  if (!vehicle) {
    return {
      title:
        "차량을 찾을 수 없습니다 | 707스카이",
    };
  }

  const canonical =
    `${SITE}/vehicles/${vehicle.slug}`;

  return {
    title:
      vehicle.seoTitle,

    description:
      vehicle.seoDescription,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title:
        vehicle.seoTitle,

      description:
        vehicle.seoDescription,

      url:
        canonical,

      siteName:
        "707스카이",

      locale:
        "ko_KR",

      type:
        "website",

      images: [
        {
          url:
            `${SITE}${vehicle.image}`,

          alt:
            `${vehicle.name} 스카이차 작업 현장`,
        },
      ],
    },
  };
}

export default async function VehiclePage({
  params,
}: Props) {
  const { vehicle: slug } =
    await params;

  const vehicle =
    getVehicle(slug);

  if (!vehicle) {
    notFound();
  }

  const otherVehicles =
    vehicles.filter(
      (item) =>
        item.slug !==
        vehicle.slug
    );

  const seoulRegions =
    regions.filter(
      (region) =>
        region.province ===
        "seoul"
    );

  const gyeonggiRegions =
    regions.filter(
      (region) =>
        region.province ===
        "gyeonggi"
    );

  const incheonRegions =
    regions.filter(
      (region) =>
        region.province ===
        "incheon"
    );

  const canonical =
    `${SITE}/vehicles/${vehicle.slug}`;

  const faq = [
    {
      q:
        `${vehicle.name} 스카이차는 어떤 현장에 적합한가요?`,

      a:
        `${vehicle.headline}. 실제 차량 선택은 작업 높이, 현장 진입 조건, 주변 구조물과 작업 내용을 확인한 후 결정하는 것이 좋습니다.`,
    },

    {
      q:
        `${vehicle.name} 스카이차를 서울·경기·인천에서 이용할 수 있나요?`,

      a:
        `네. 707스카이는 서울·경기·인천 지역의 ${vehicle.name} 스카이차 작업 상담을 진행합니다.`,
    },

    {
      q:
        "차량을 어떤 기준으로 선택하나요?",

      a:
        "작업 높이, 작업 반경, 도로 폭, 차량 진입 공간, 전선과 주변 구조물 등을 확인하여 적합한 차량을 안내합니다.",
    },

    {
      q:
        "현장 사진으로 상담할 수 있나요?",

      a:
        "현장 위치와 작업 내용을 확인할 수 있는 정보를 준비하면 차량 선택과 작업 상담에 도움이 됩니다.",
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
          `${vehicle.name} 스카이차`,

        serviceType:
          `${vehicle.name} 스카이차 고소작업`,

        description:
          vehicle.description,

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
              "차량 안내",

            item:
              `${SITE}/#vehicles`,
          },

          {
            "@type":
              "ListItem",

            position:
              3,

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
          faq.map(
            (item) => ({
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
            })
          ),
      },
    ],
  };

  return (
    <main className="vehiclePage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              jsonLd
            ),
        }}
      />

      {/* HERO */}

      <section
        className="vehicleDetailHero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(7,9,6,.94),
              rgba(7,9,6,.65),
              rgba(7,9,6,.32)
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
            {vehicle.english}
          </div>

          <h1>
            {vehicle.name}
            <br />

            <strong>
              스카이차
            </strong>
          </h1>

          <p>
            {vehicle.heroDescription}
          </p>

          <div className="vehicleWorkTags">
            {vehicle.suitableFor.map(
              (item) => (
                <span
                  key={
                    item.title
                  }
                >
                  {
                    item.title
                  }
                </span>
              )
            )}
          </div>

          <a
            href={`tel:${PHONE}`}
            style={{
              display:
                "inline-flex",

              marginTop:
                "30px",

              minHeight:
                "52px",

              padding:
                "0 22px",

              alignItems:
                "center",

              justifyContent:
                "center",

              background:
                "#98a768",

              color:
                "#0c0f0a",

              fontSize:
                "12px",

              fontWeight:
                "900",
            }}
          >
            전화상담&nbsp;&nbsp;
            {
              DISPLAY_PHONE
            }
          </a>
        </div>
      </section>

      {/* 차량 소개 */}

      <section className="vehicleDetailIntro">
        <span>
          VEHICLE INFO
        </span>

        <div className="vehicleDetailIntroGrid">
          <h2>
            {vehicle.name}
            <br />

            작업 안내
          </h2>

          <div>
            <p>
              {
                vehicle.description
              }
            </p>

            <p>
              현장마다 작업 높이와
              차량 진입 공간,
              작업 반경이 다르기 때문에
              현장 조건을 확인한 뒤
              적합한 차량을 선택하는 것이
              중요합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 작업사진 */}

      <section className="vehicleSuitable">
        <div className="vehicleDetailHeading">
          <span>
            WORK PHOTO
          </span>

          <h2>
            {vehicle.name}
            <br />

            실제 작업 현장
          </h2>
        </div>

        <div className="vehicleWorkPhoto">
          <img
            src={
              vehicle.image
            }
            alt={`${vehicle.name} 스카이차 실제 작업 현장`}
          />
        </div>
      </section>

      {/* 추천 작업 */}

      <section className="vehicleSuitable">
        <div className="vehicleDetailHeading">
          <span>
            RECOMMENDED WORK
          </span>

          <h2>
            이런 현장에
            <br />

            활용합니다.
          </h2>
        </div>

        <div className="vehicleSuitableGrid">
          {vehicle.suitableFor.map(
            (
              item,
              index
            ) => (
              <article
                key={
                  item.title
                }
              >
                <span>
                  {String(
                    index +
                      1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <div>
                  <h3>
                    {
                      item.title
                    }
                  </h3>

                  <p>
                    {
                      item.description
                    }
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* 특징 */}

      <section className="vehicleProcessSection">
        <div className="vehicleDetailHeading">
          <span>
            VEHICLE POINT
          </span>

          <h2>
            {vehicle.name}
            <br />

            주요 특징
          </h2>
        </div>

        <div className="vehicleProcessGrid">
          {vehicle.features.map(
            (
              feature,
              index
            ) => (
              <article
                key={
                  feature.title
                }
              >
                <span>
                  {String(
                    index +
                      1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <strong>
                  {
                    feature.title
                  }
                </strong>

                <p>
                  {
                    feature.description
                  }
                </p>
              </article>
            )
          )}
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

          {vehicle.name} 스카이차
        </h2>

        <p className="area-selector-desc">
          원하는 지역을 선택하면
          해당 지역의
          {` ${vehicle.name} `}
          스카이차 전용페이지로
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
              서울 전체보기 ↗
            </Link>
          </div>

          <div className="area-button-grid">
            {seoulRegions.map(
              (region) => (
                <Link
                  key={`seoul-${region.slug}`}
                  href={`/area/seoul/${region.slug}/${vehicle.slug}`}
                  className="area-button"
                >
                  <span>
                    {
                      region.name
                    }
                  </span>

                  <b>
                    ↗
                  </b>
                </Link>
              )
            )}
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
              경기 전체보기 ↗
            </Link>
          </div>

          <div className="area-button-grid">
            {gyeonggiRegions.map(
              (region) => (
                <Link
                  key={`gyeonggi-${region.slug}`}
                  href={`/area/gyeonggi/${region.slug}/${vehicle.slug}`}
                  className="area-button"
                >
                  <span>
                    {
                      region.name
                    }
                  </span>

                  <b>
                    ↗
                  </b>
                </Link>
              )
            )}
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
              인천 전체보기 ↗
            </Link>
          </div>

          <div className="area-button-grid">
            {incheonRegions.map(
              (region) => (
                <Link
                  key={`incheon-${region.slug}`}
                  href={`/area/incheon/${region.slug}/${vehicle.slug}`}
                  className="area-button"
                >
                  <span>
                    {
                      region.name
                    }
                  </span>

                  <b>
                    ↗
                  </b>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* SEO 설명 */}

      <section className="vehicleSeo">
        <span>
          707 SKY
        </span>

        <h2>
          {vehicle.name}
          <br />

          스카이차 현장 안내
        </h2>

        <p>
          {
            vehicle.headline
          }.
        </p>

        <p>
          707스카이는 서울,
          경기, 인천 지역에서
          {` ${vehicle.name} `}
          스카이차가 필요한
          현장의 작업 위치와
          작업 높이,
          차량 진입 조건을 확인하여
          적합한 차량을 안내합니다.
        </p>

        <p>
          간판 설치 및 철거,
          건물 외벽,
          전기·조명,
          철골과 공장,
          각종 시설물의
          고소작업 등
          현장 조건에 따라
          차량 선택이 달라질 수 있습니다.
        </p>
      </section>

      {/* 다른 차량 */}

      <section className="otherVehicleSection">
        <div className="vehicleDetailHeading">
          <span>
            OTHER VEHICLE
          </span>

          <h2>
            다른
            <br />

            스카이차
          </h2>
        </div>

        <div className="otherVehicleGrid">
          {otherVehicles.map(
            (item) => (
              <Link
                href={`/vehicles/${item.slug}`}
                key={
                  item.slug
                }
              >
                <div className="otherVehicleImage">
                  <img
                    src={
                      item.image
                    }
                    alt={`${item.name} 스카이차`}
                  />
                </div>

                <div className="otherVehicleInfo">
                  <strong>
                    {
                      item.name
                    }
                  </strong>

                  <span>
                    자세히 보기 ↗
                  </span>
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      {/* FAQ */}

      <section className="vehicleFaqSection">
        <div className="vehicleDetailHeading">
          <span>
            FAQ
          </span>

          <h2>
            {vehicle.name}
            <br />

            자주 묻는 질문
          </h2>
        </div>

        <div className="vehicleFaqList">
          {faq.map(
            (item) => (
              <article
                key={
                  item.q
                }
              >
                <h3>
                  {
                    item.q
                  }
                </h3>

                <p>
                  {
                    item.a
                  }
                </p>
              </article>
            )
          )}
        </div>
      </section>

      {/* 상담 */}

      <section
        style={{
          padding:
            "90px 40px",

          background:
            "#98a768",
        }}
      >
        <div
          style={{
            maxWidth:
              "1320px",

            margin:
              "0 auto",
          }}
        >
          <span
            style={{
              fontSize:
                "9px",

              fontWeight:
                "900",

              letterSpacing:
                "3px",
            }}
          >
            CONTACT
          </span>

          <h2
            style={{
              marginTop:
                "20px",

              fontSize:
                "clamp(40px,6vw,72px)",

              lineHeight:
                "1.05",

              letterSpacing:
                "-5px",

              wordBreak:
                "keep-all",
            }}
          >
            {vehicle.name}
            스카이차가
            <br />

            필요한 현장
          </h2>

          <p
            style={{
              marginTop:
                "22px",

              fontSize:
                "14px",

              lineHeight:
                "1.8",
            }}
          >
            현장 위치와
            작업 내용을 알려주시면
            작업 조건에 맞는
            차량을 안내합니다.
          </p>

          <a
            href={`tel:${PHONE}`}
            style={{
              display:
                "inline-flex",

              marginTop:
                "30px",

              minHeight:
                "54px",

              padding:
                "0 24px",

              alignItems:
                "center",

              background:
                "#0d100b",

              color:
                "#fff",

              fontSize:
                "13px",

              fontWeight:
                "900",
            }}
          >
            전화상담&nbsp;&nbsp;
            {
              DISPLAY_PHONE
            }
          </a>
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
          {vehicle.name}
          {" "}
          스카이차 ·
          707스카이
        </p>
      </footer>
    </main>
  );
}
