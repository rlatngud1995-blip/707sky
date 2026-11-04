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
    `${vehicle.title} 작업 안내. ${vehicle.description} ` +
    `서울·경기·인천 지역 스카이차 현장 상담. 간판, 외벽, 전기·조명, 철골, 시설물 고소작업.`;

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

  const canonical =
    `${SITE}/vehicles/${vehicle.slug}`;

  const faq = [
    {
      q: `${vehicle.name} 스카이차는 어떤 작업에 사용하나요?`,
      a:
        `${vehicle.name} 스카이차는 현장 조건에 따라 간판 설치 및 철거, 건물 외벽, 전기·조명, 철골, 공장 및 각종 시설물 고소작업에 활용할 수 있습니다.`,
    },
    {
      q: "현장에 어떤 차량이 필요한지 몰라도 상담할 수 있나요?",
      a:
        "가능합니다. 현장 위치, 작업 높이, 작업 내용, 차량 진입 여건 등을 확인한 뒤 현장에 적합한 차량을 안내합니다.",
    },
    {
      q: "서울·경기·인천 지역 작업이 가능한가요?",
      a:
        "707스카이는 서울, 경기, 인천을 중심으로 지역별 스카이차 작업 상담을 진행합니다.",
    },
    {
      q: "작업 전에 어떤 정보를 알려주면 되나요?",
      a:
        "현장 주소, 작업 종류, 예상 작업 높이, 작업 위치 주변의 도로 및 진입 상황 등을 알려주시면 차량 안내에 도움이 됩니다.",
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

        url: canonical,
      },

      {
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "707스카이",
            item: SITE,
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "차량안내",
            item: `${SITE}/#vehicles`,
          },

          {
            "@type": "ListItem",
            position: 3,
            name: vehicle.title,
            item: canonical,
          },
        ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* ==============================
          HERO
      ============================== */}

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
            <strong>707</strong>
            <span>SKY</span>
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

          <div className="regionVehicleTags">
            <span>간판</span>
            <span>외벽</span>
            <span>전기·조명</span>
            <span>철골</span>
            <span>시설물</span>
          </div>
        </div>
      </section>

      {/* ==============================
          INTRO
      ============================== */}

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
              스카이차는 단순히 차량 톤수만 보고
              선택하는 것이 아니라 작업 높이,
              작업 위치, 도로 폭, 차량 진입 공간과
              주변 장애물 등을 함께 확인해야 합니다.
            </p>

            <p>
              707스카이는 현장 정보를 확인한 뒤
              작업 조건에 적합한 차량을 안내합니다.
              차량 선택이 어려운 경우에도
              작업 내용을 알려주시면 상담할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================
          추천 작업
      ============================== */}

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
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <h3>
                  {item}
                </h3>
              </article>
            )
          )}
        </div>
      </section>

      {/* ==============================
          작업사진
      ============================== */}

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
              현장 환경에 따라 붐의 위치와
              작업 반경을 고려해 작업을 진행합니다.
            </p>
          </div>

          <div>
            <img
              src={vehicle.image}
              alt={`${vehicle.name} 스카이차 실제 작업 현장`}
            />
          </div>
        </div>
      </section>

      {/* ==============================
          배차 기준
      ============================== */}

      <section className="vehicleSuitable">
        <div className="vehicleDetailHeading">
          <span>
            CHECK POINT
          </span>

          <h2>
            차량 선택 전
            <br />
            확인 사항
          </h2>
        </div>

        <div className="vehicleSuitableGrid">
          <article>
            <span>01</span>

            <h3>
              작업 높이
            </h3>

            <p>
              작업 대상의 높이와
              작업자의 실제 접근 위치를 확인합니다.
            </p>
          </article>

          <article>
            <span>02</span>

            <h3>
              차량 진입
            </h3>

            <p>
              골목, 주차장,
              출입구 등 차량 진입 공간을 확인합니다.
            </p>
          </article>

          <article>
            <span>03</span>

            <h3>
              주변 장애물
            </h3>

            <p>
              전선, 건물, 구조물 등
              작업 반경 주변 환경을 확인합니다.
            </p>
          </article>

          <article>
            <span>04</span>

            <h3>
              작업 내용
            </h3>

            <p>
              간판, 외벽, 철골,
              전기 등 작업 종류를 확인합니다.
            </p>
          </article>
        </div>
      </section>

      {/* ==============================
          진행 절차
      ============================== */}

      <section className="vehicleSeo">
        <span>
          WORK PROCESS
        </span>

        <h2>
          현장 상담부터
          <br />
          작업까지
        </h2>

        <div
          style={{
            marginTop: "45px",
            display: "grid",
            gap: "1px",
            background: "#c5c6bc",
            border: "1px solid #c5c6bc",
          }}
        >
          {[
            [
              "01",
              "현장 정보 확인",
              "현장 위치와 작업 내용을 확인합니다.",
            ],
            [
              "02",
              "작업 조건 확인",
              "작업 높이와 차량 진입 여건을 확인합니다.",
            ],
            [
              "03",
              "차량 안내",
              "현장 조건에 적합한 스카이차를 안내합니다.",
            ],
            [
              "04",
              "현장 작업",
              "현장 상황을 확인하고 고소작업을 진행합니다.",
            ],
          ].map((item) => (
            <div
              key={item[0]}
              style={{
                background: "#ecebe4",
                padding: "24px",
              }}
            >
              <span
                style={{
                  color: "#7c8758",
                  fontSize: "9px",
                }}
              >
                {item[0]}
              </span>

              <strong
                style={{
                  display: "block",
                  marginTop: "15px",
                  fontSize: "21px",
                }}
              >
                {item[1]}
              </strong>

              <p>
                {item[2]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==============================
          지역 선택
      ============================== */}

      <section className="vehicleRegionSection">
        <div className="vehicleDetailHeading">
          <span>
            SERVICE AREA
          </span>

          <h2>
            서울 · 경기 · 인천
            <br />
            지역별 스카이차
          </h2>
        </div>

        <p
          style={{
            maxWidth: "650px",
            marginBottom: "55px",
            color: "#73776d",
            fontSize: "14px",
            lineHeight: "1.9",
          }}
        >
          작업지역을 선택하면 해당 지역의
          스카이차 상세페이지로 이동합니다.
          지역별 현장 특성과 작업 내용을 확인할 수 있습니다.
        </p>

        {/* 서울 */}

        <div
          style={{
            marginBottom: "70px",
          }}
        >
          <div
            style={{
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                color: "#788252",
                fontSize: "9px",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
            >
              SEOUL
            </span>

            <h3
              style={{
                marginTop: "8px",
                fontSize: "32px",
                letterSpacing: "-2px",
              }}
            >
              서울 스카이차
            </h3>
          </div>

          <div className="vehicleRegionGrid">
            {seoulRegions.map(
              (region) => (
                <Link
                  key={`seoul-${region.slug}`}
                  href={`/area/seoul/${region.slug}`}
                >
                  <span>
                    서울
                  </span>

                  <strong>
                    {region.name}
                  </strong>

                  <b>
                    ↗
                  </b>
                </Link>
              )
            )}
          </div>
        </div>

        {/* 경기 */}

        <div
          style={{
            marginBottom: "70px",
          }}
        >
          <div
            style={{
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                color: "#788252",
                fontSize: "9px",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
            >
              GYEONGGI
            </span>

            <h3
              style={{
                marginTop: "8px",
                fontSize: "32px",
                letterSpacing: "-2px",
              }}
            >
              경기 스카이차
            </h3>
          </div>

          <div className="vehicleRegionGrid">
            {gyeonggiRegions.map(
              (region) => (
                <Link
                  key={`gyeonggi-${region.slug}`}
                  href={`/area/gyeonggi/${region.slug}`}
                >
                  <span>
                    경기
                  </span>

                  <strong>
                    {region.name}
                  </strong>

                  <b>
                    ↗
                  </b>
                </Link>
              )
            )}
          </div>
        </div>

        {/* 인천 */}

        <div>
          <div
            style={{
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                color: "#788252",
                fontSize: "9px",
                fontWeight: "900",
                letterSpacing: "3px",
              }}
            >
              INCHEON
            </span>

            <h3
              style={{
                marginTop: "8px",
                fontSize: "32px",
                letterSpacing: "-2px",
              }}
            >
              인천 스카이차
            </h3>
          </div>

          <div className="vehicleRegionGrid">
            {incheonRegions.map(
              (region) => (
                <Link
                  key={`incheon-${region.slug}`}
                  href={`/area/incheon/${region.slug}`}
                >
                  <span>
                    인천
                  </span>

                  <strong>
                    {region.name}
                  </strong>

                  <b>
                    ↗
                  </b>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* ==============================
          다른 차량
      ============================== */}

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
                  alt={`${item.name} 스카이차 작업`}
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

      {/* ==============================
          SEO CONTENT
      ============================== */}

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
          작업 위치와 작업 높이,
          차량 진입 여건, 주변 환경에 따라
          다양한 고소작업에 활용됩니다.
        </p>

        <p>
          서울·경기·인천 지역의
          상가 간판 설치 및 철거,
          건물 외벽 작업, 전기·조명,
          공장과 창고의 철골 및 시설물 작업 등
          다양한 현장에 필요한 스카이차를
          안내합니다.
        </p>

        <p>
          같은 {vehicle.name} 차량이라도
          현장 조건과 작업 범위에 따라
          적합 여부가 달라질 수 있으므로
          실제 작업 전에는 현장 정보를
          확인하는 것이 중요합니다.
        </p>
      </section>

      {/* ==============================
          FAQ
      ============================== */}

      <section className="vehicleSuitable">
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

        <div
          style={{
            borderTop: "1px solid #c5c6bc",
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
                  fontSize: "20px",
                  letterSpacing: "-1px",
                  wordBreak: "keep-all",
                }}
              >
                {item.q}
              </h3>

              <p
                style={{
                  marginTop: "13px",
                  color: "#73776d",
                  fontSize: "14px",
                  lineHeight: "1.9",
                  wordBreak: "keep-all",
                }}
              >
                {item.a}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}

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
