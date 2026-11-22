import Link from "next/link";
import PricePopup from "./components/PricePopup";
import { regions } from "@/data/regions";
import { vehicles as vehicleData } from "@/data/vehicles";
import { FAQ, smsHref } from "@/lib/skyseo";

const PHONE = "01094134686";
const DISPLAY_PHONE = "010-9413-4686";

const vehicles = [
  {
    name: "1톤",
    slug: "1ton",
    image: "/IMG_2254.jpeg",
    desc:
      "좁은 도로와 소규모 현장에 유리한 기동성 중심 스카이차",
  },
  {
    name: "2.5톤",
    slug: "2-5ton",
    image: "/IMG_2253.jpeg",
    desc:
      "간판·철골·외벽 등 다양한 고소작업 현장에서 활용",
  },
  {
    name: "3.5톤",
    slug: "3-5ton",
    image: "/IMG_2252.jpeg",
    desc:
      "공장 및 실내외 시설물 고소작업에 적합한 스카이차",
  },
  {
    name: "4.5톤",
    slug: "4-5ton",
    image: "/IMG_2249.jpeg",
    desc:
      "중대형 현장과 높은 작업 위치에 대응하는 장비",
  },
  {
    name: "5톤",
    slug: "5ton",
    image: "/IMG_2248.jpeg",
    desc:
      "높은 작업 높이가 필요한 대형 고소작업 현장 대응",
  },
];

const workTypes = [
  {
    number: "01",
    title: "간판 작업",
    desc: "간판 설치·철거 및 유지보수",
  },
  {
    number: "02",
    title: "외벽 작업",
    desc: "건물 외벽 및 고층부 작업",
  },
  {
    number: "03",
    title: "전기·조명",
    desc: "외부 조명 및 전기 시설 작업",
  },
  {
    number: "04",
    title: "철골 작업",
    desc: "공장·창고 철골 및 구조물 작업",
  },
  {
    number: "05",
    title: "시설물 작업",
    desc: "각종 고소 시설물 설치·보수",
  },
  {
    number: "06",
    title: "기타 고소작업",
    desc: "현장 조건에 맞춘 스카이차 배차",
  },
];

const priceRows = [
  { car: "1~3.5톤", base: "30만원", half: "40만원", day: "60만원" },
  { car: "5톤 (45M)", base: "40만원", half: "50만원", day: "70만원" },
  { car: "5톤 (54M)", base: "50만원", half: "70만원", day: "90만원" },
  { car: "17.5톤 (58M)", base: "-", half: "90만원", day: "120만원" },
  { car: "19.5톤 (75M)", base: "-", half: "130만원", day: "180만원" },
];

const steps = [
  { no: "01", title: "문의", desc: "작업 주소, 작업 내용, 작업 높이(층수), 희망 날짜를 알려 주세요." },
  { no: "02", title: "현장 확인", desc: "현장 사진으로 진입로·주차 공간·전선 같은 장애물을 확인합니다." },
  { no: "03", title: "차량·일정 확정", desc: "높이와 현장 조건에 맞는 톤수와 이용 시간을 정해 배차합니다." },
  { no: "04", title: "작업", desc: "기사님이 장비를 고정하고 안전 확인 후 작업을 진행합니다." },
];

const safety = [
  { title: "지반·장애물 확인", desc: "차량을 세울 바닥 상태와 전선·가로수 간섭을 작업 전에 확인합니다." },
  { title: "아웃트리거 고정", desc: "장비 지지대를 펼쳐 차체를 고정한 뒤 붐을 올립니다." },
  { title: "기상 확인", desc: "강풍·우천 시에는 안전을 위해 일정을 조정합니다." },
  { title: "도로 사용 안내", desc: "도로에 차량을 세워야 하는 현장은 필요한 절차를 미리 안내합니다." },
];

const gallery = [
  { src: "/IMG_2251.jpeg", alt: "상가 건물 외벽 스카이차 고소작업 현장" },
  { src: "/IMG_2254.jpeg", alt: "1톤 스카이차 상가 간판 작업" },
  { src: "/IMG_2253.jpeg", alt: "철골 구조물 스카이차 작업" },
  { src: "/IMG_2249.jpeg", alt: "공장 천장 설비 고소작업" },
  { src: "/IMG_2252.jpeg", alt: "공장 내부 설비 스카이차 작업" },
  { src: "/IMG_2248.jpeg", alt: "건물 외벽 스카이차 붐 작업" },
];

const provinceNames: Record<string, string> = { seoul: "서울", gyeonggi: "경기", incheon: "인천" };

const areas = [
  {
    number: "01",
    name: "서울",
    english: "SEOUL",
    desc: "서울 25개 구 스카이차",
    href: "/area/seoul",
  },
  {
    number: "02",
    name: "경기",
    english: "GYEONGGI",
    desc: "경기도 시·군 스카이차",
    href: "/area/gyeonggi",
  },
  {
    number: "03",
    name: "인천",
    english: "INCHEON",
    desc: "인천 구·군 스카이차",
    href: "/area/incheon",
  },
];

export default function Home() {
  return (
    <main>
      {/* 단가표 팝업 */}
      <PricePopup />

      {/* HERO */}

      <section className="hero">
        <div
          className="heroPhoto"
          style={{
            backgroundImage:
              'url("/IMG_2251.jpeg")',
          }}
        />

        <div className="heroShade" />
        <div className="heroGrid" />

        <header className="header">
          <Link
            href="/"
            className="logo"
          >
            <span className="logo707">
              707
            </span>

            <span className="logoSky">
              SKY
            </span>
          </Link>

          <nav className="nav">
            <a href="#vehicles">
              차량안내
            </a>

            <a href="#work">
              작업안내
            </a>

            <a href="#price">
              요금안내
            </a>

            <a href="#area">
              작업지역
            </a>

            <a
              href={`tel:${PHONE}`}
            >
              전화상담
            </a>
          </nav>
        </header>

        <div className="heroInner">
          <div className="heroLabel">
            SEOUL · GYEONGGI · INCHEON
          </div>

          <h1>
            서울·경기·인천 스카이차,
            <br />

            <strong>
              현장에 맞게 정확하게.
            </strong>
          </h1>

          <p className="heroDescription">
            서울 · 경기 · 인천
            스카이차 전문
            <br />
            1톤부터 5톤까지
            현장 조건에 맞는 차량을
            안내합니다.
          </p>

          <div className="heroButtons">
            <a
              href={`tel:${PHONE}`}
              className="mainButton"
            >
              전화 상담

              <span>
                ↗
              </span>
            </a>

            <a
              href={smsHref()}
              className="subButton"
            >
              문자로 사진 견적
            </a>

            <a
              href="#price"
              className="subButton"
            >
              요금 안내
            </a>
          </div>

          <div
            style={{
              marginTop: "18px",
              color:
                "rgba(255,255,255,.65)",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            {DISPLAY_PHONE}
          </div>
        </div>

        <div className="heroStatus">
          <div>
            <span>01</span>

            <strong>
              현장 맞춤 배차
            </strong>
          </div>

          <div>
            <span>02</span>

            <strong>
              1톤 ~ 5톤
            </strong>
          </div>

          <div>
            <span>03</span>

            <strong>
              서울 · 경기 · 인천
            </strong>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="intro">
        <div className="smallTitle">
          707 SKY SERVICE
        </div>

        <div className="introLayout">
          <h2>
            필요한 현장에
            <br />
            필요한 장비를.
          </h2>

          <div className="introText">
            <strong>
              707스카이
            </strong>

            <p>
              작업 높이와 현장 진입 조건,
              작업 환경을 확인하여
              적합한 스카이차를 안내합니다.
            </p>

            <p>
              건물 외벽, 간판, 공장,
              철골, 전기, 시설물 등
              다양한 고소작업 현장에 대응합니다.
            </p>
          </div>
        </div>
      </section>

      {/* VEHICLES */}

      <section
        id="vehicles"
        className="vehicleSection"
      >
        <div className="sectionHeader">
          <div>
            <span className="smallTitle">
              VEHICLE
            </span>

            <h2>
              차량 안내
            </h2>
          </div>

          <p>
            작업 환경과 높이에 따라
            <br />
            적합한 차량을 선택하세요.
          </p>
        </div>

        <div className="vehicleGrid">
          {vehicles.map(
            (
              vehicle,
              index
            ) => (
              <Link
                href={`/vehicles/${vehicle.slug}`}
                className="vehicleCard"
                key={vehicle.slug}
              >
                <div className="vehiclePhoto">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} 스카이차 고소작업 현장`}
                  />

                  <div className="vehiclePhotoShade" />

                  <span className="vehicleIndex">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <span className="vehicleLink">
                    ↗
                  </span>
                </div>

                <div className="vehicleInfo">
                  <div>
                    <h3>
                      {vehicle.name}
                    </h3>

                    <span>
                      SKY TRUCK
                    </span>
                  </div>

                  <p>
                    {vehicle.desc}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      {/* VEHICLE GUIDE TABLE */}

      <section className="proSection">
        <div className="proInner">
          <span className="smallTitle">
            VEHICLE GUIDE
          </span>

          <h2 className="proTitle">
            차량 선택 가이드
          </h2>

          <p className="proLead">
            작업 높이와 차량을 세울 공간에 따라 맞는 톤수가 달라집니다.
            건물 층수와 앞 도로 폭을 알려 주시면 정확히 안내해 드립니다.
          </p>

          <div className="proTableWrap">
            <table className="proTable">
              <thead>
                <tr>
                  <th>차량</th>
                  <th>이런 현장에 맞습니다</th>
                  <th>주요 작업</th>
                </tr>
              </thead>
              <tbody>
                {vehicleData.map((v) => (
                  <tr key={v.slug}>
                    <td>
                      <Link href={`/vehicles/${v.slug}`}>
                        {v.name} 스카이차
                      </Link>
                    </td>
                    <td>{v.headline}</td>
                    <td>
                      {v.suitableFor
                        .map((x) => x.title)
                        .join(" · ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRICE */}

      <section
        id="price"
        className="proSection proDark"
      >
        <div className="proInner">
          <span className="smallTitle light">
            PRICE
          </span>

          <h2 className="proTitle">
            스카이차 요금 안내
          </h2>

          <p className="proLead">
            전국 스카이협회 표준 단가표 기준입니다. 오전·오후는 4시간,
            하루는 8시간 기준이며 현장 조건과 거리에 따라 달라질 수 있어
            상담 시 정확히 안내해 드립니다.
          </p>

          <div className="proTableWrap">
            <table className="proTable">
              <thead>
                <tr>
                  <th>차종</th>
                  <th>기본 (1시간)</th>
                  <th>오전 / 오후</th>
                  <th>하루 (8시간)</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r) => (
                  <tr key={r.car}>
                    <td>{r.car}</td>
                    <td>{r.base}</td>
                    <td>{r.half}</td>
                    <td>{r.day}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="proSection">
        <div className="proInner">
          <span className="smallTitle">
            PROCESS
          </span>

          <h2 className="proTitle">
            배차 진행 절차
          </h2>

          <div className="proGrid4">
            {steps.map((st) => (
              <div
                className="proCard"
                key={st.no}
              >
                <b>{st.no}</b>
                <strong>{st.title}</strong>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}

      <section
        id="work"
        className="workSection"
      >
        <div className="workInner">
          <div className="smallTitle light">
            MISSION
          </div>

          <div className="workHeading">
            <h2>
              다양한 현장,
              <br />
              하나의 기준.
            </h2>

            <p>
              작업 조건을 확인한 후
              <br />
              현장에 적합한 장비를
              배차합니다.
            </p>
          </div>

          <div className="workGrid">
            {workTypes.map(
              (work) => (
                <div
                  className="workCard"
                  key={work.number}
                >
                  <span>
                    {work.number}
                  </span>

                  <div>
                    <strong>
                      {work.title}
                    </strong>

                    <p>
                      {work.desc}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* AREA */}

      <section
        id="area"
        className="areaSection"
      >
        <div className="sectionHeader">
          <div>
            <span className="smallTitle">
              SERVICE AREA
            </span>

            <h2>
              수도권 중심
              <br />
              현장 출동
            </h2>
          </div>

          <p>
            서울 · 경기 · 인천
            <br />
            지역별 개별 페이지 운영
          </p>
        </div>

        <div className="areaGrid">
          {areas.map(
            (area) => (
              <Link
                href={area.href}
                className="areaCard"
                key={area.name}
              >
                <div className="areaTop">
                  <span>
                    {area.number}
                  </span>

                  <span>
                    ↗
                  </span>
                </div>

                <div>
                  <span className="areaEnglish">
                    {area.english}
                  </span>

                  <h3>
                    {area.name}
                  </h3>

                  <p>
                    {area.desc}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </section>

      {/* AREA LINKS */}

      <section className="proSection">
        <div className="proInner">
          <span className="smallTitle">
            LOCAL PAGE
          </span>

          <h2 className="proTitle">
            지역별 스카이차 안내
          </h2>

          {(["seoul", "gyeonggi", "incheon"] as const).map((prov) => (
            <div
              className="proAreaBlock"
              key={prov}
            >
              <h3>
                <Link href={`/area/${prov}`}>
                  {provinceNames[prov]} 스카이차
                </Link>
              </h3>

              <div className="proAreaLinks">
                {regions
                  .filter((r) => r.province === prov)
                  .map((r) => (
                    <Link
                      key={r.slug}
                      href={`/area/${r.province}/${r.slug}`}
                    >
                      {r.name}
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SAFETY */}

      <section className="proSection proDark">
        <div className="proInner">
          <span className="smallTitle light">
            SAFETY
          </span>

          <h2 className="proTitle">
            작업 전 안전 확인
          </h2>

          <div className="proGrid4">
            {safety.map((sf) => (
              <div
                className="proCard"
                key={sf.title}
              >
                <strong>{sf.title}</strong>
                <p>{sf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section className="proSection">
        <div className="proInner">
          <span className="smallTitle">
            FIELD
          </span>

          <h2 className="proTitle">
            작업 현장
          </h2>

          <div className="proGallery">
            {gallery.map((g) => (
              <figure key={g.src}>
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                />
                <figcaption>{g.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="proSection">
        <div className="proInner">
          <span className="smallTitle">
            FAQ
          </span>

          <h2 className="proTitle">
            자주 묻는 질문
          </h2>

          <div className="proFaq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* BRAND */}

      <section className="brandSection">
        <div className="brandNumber">
          707
        </div>

        <div className="brandContent">
          <span>
            SKY TRUCK SERVICE
          </span>

          <h2>
            현장은 다르지만
            <br />
            작업의 기준은 같습니다.
          </h2>

          <p>
            서울 · 경기 · 인천
            <br />
            스카이차 전문 707스카이
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <span className="smallTitle dark">
          CONTACT
        </span>

        <h2>
          스카이차가 필요한 현장,
          <br />
          707스카이.
        </h2>

        <p>
          현장 위치와 작업 내용을 알려주시면
          <br />
          필요한 차량을 안내해드립니다.
        </p>

        <a
          href={`tel:${PHONE}`}
          style={{
            display:
              "inline-flex",
            alignItems:
              "center",
            justifyContent:
              "center",
            minWidth:
              "180px",
            minHeight:
              "56px",
            marginTop:
              "32px",
            padding:
              "0 24px",
            background:
              "#10130d",
            color:
              "#fff",
            fontWeight:
              "900",
            fontSize:
              "13px",
          }}
        >
          {DISPLAY_PHONE}
        </a>

        <a
          href={smsHref()}
          className="proSmsLink"
        >
          문자로 현장 사진 보내기 →
        </a>
      </section>

      {/* FOOTER */}

      <footer>
        <Link
          href="/"
          className="footerLogo"
        >
          <strong>
            707
          </strong>

          <span>
            SKY
          </span>
        </Link>

        <div className="footerCenter">
          <p>
            서울 · 경기 · 인천 스카이차
          </p>

          <p>
            1톤 · 2.5톤 · 3.5톤 · 4.5톤 · 5톤
          </p>

          <p>
            대표번호 {DISPLAY_PHONE}
          </p>
        </div>

        <p className="copyright">
          © 707 SKY. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
