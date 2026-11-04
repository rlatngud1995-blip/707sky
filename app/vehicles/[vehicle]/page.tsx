import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getVehicle,
  vehicles,
} from "@/data/vehicles";

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
    `${vehicle.title} | 서울·경기·인천 | 707스카이`;

  const description =
    `${vehicle.title} 작업 상담. ${vehicle.description} 서울·경기·인천 스카이차 전문 707스카이.`;

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
          alt: vehicle.title,
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
            name: "경기",
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
            item:
              `${SITE}/vehicles/${vehicle.slug}`,
          },
        ],
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

      {/* 상단 */}
      <section
        className="vehicleDetailHero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(7,9,6,.92),
              rgba(7,9,6,.42)
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
            707 SKY · SKY TRUCK
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
        </div>
      </section>

      {/* 차량 설명 */}
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
              707스카이는 서울·경기·인천을
              중심으로 다양한 고소작업 현장에
              필요한 스카이차를 안내합니다.
            </p>

            <p>
              작업 높이와 현장 진입 여건,
              작업 내용을 확인하여
              현장 조건에 적합한 차량을
              선택할 수 있도록 안내합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 추천 작업 */}
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

      {/* 작업 사진 */}
      <section className="vehicleDetailIntro">
        <span>
          WORK PHOTO
        </span>

        <div className="vehicleDetailIntroGrid">
          <h2>
            실제
            <br />
            작업 현장
          </h2>

          <div>
            <img
              src={vehicle.image}
              alt={`${vehicle.name} 스카이차 실제 작업 현장`}
              style={{
                width: "100%",
                borderRadius: "2px",
              }}
            />
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

      {/* 지역 */}
      <section className="vehicleRegionSection">
        <div className="vehicleDetailHeading">
          <span>
            SERVICE AREA
          </span>

          <h2>
            서울 · 경기 · 인천
            <br />
            작업지역
          </h2>
        </div>

        <div className="vehicleRegionGrid">
          <Link href="/area/seoul">
            <span>SEOUL</span>
            <strong>
              서울 스카이차
            </strong>
            <b>↗</b>
          </Link>

          <Link href="/area/gyeonggi">
            <span>GYEONGGI</span>
            <strong>
              경기 스카이차
            </strong>
            <b>↗</b>
          </Link>

          <Link href="/area/incheon">
            <span>INCHEON</span>
            <strong>
              인천 스카이차
            </strong>
            <b>↗</b>
          </Link>
        </div>
      </section>

      {/* SEO 본문 */}
      <section className="vehicleSeo">
        <span>
          707 SKY SERVICE
        </span>

        <h2>
          {vehicle.name} 스카이차
          <br />
          현장 상담
        </h2>

        <p>
          {vehicle.name} 스카이차는
          작업 높이와 현장 진입 조건,
          작업 종류 등을 고려하여
          다양한 고소작업 현장에
          활용할 수 있습니다.
        </p>

        <p>
          서울·경기·인천 지역의
          간판 설치·철거, 건물 외벽,
          전기·조명, 공장, 창고,
          철골 및 시설물 작업 등
          현장 조건에 맞는 스카이차를
          안내합니다.
        </p>
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
