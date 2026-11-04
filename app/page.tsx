import Link from "next/link";

const heroSlides = [
  {
    image: "/IMG_2251.jpeg",
    eyebrow: "SEOUL · GYEONGGI · INCHEON",
    title1: "현장에 필요한",
    title2: "스카이차를 정확하게.",
  },
];

const vehicles = [
  {
    name: "1톤",
    slug: "1ton",
    image: "/IMG_2254.jpeg",
    desc: "좁은 도로와 소규모 현장에 유리한 기동성 중심 스카이차",
  },
  {
    name: "2.5톤",
    slug: "2-5ton",
    image: "/IMG_2253.jpeg",
    desc: "간판·철골·외벽 등 다양한 고소작업 현장에서 활용",
  },
  {
    name: "3.5톤",
    slug: "3-5ton",
    image: "/IMG_2252.jpeg",
    desc: "공장 및 실내외 시설물 고소작업에 적합한 스카이차",
  },
  {
    name: "4.5톤",
    slug: "4-5ton",
    image: "/IMG_2249.jpeg",
    desc: "중대형 현장과 높은 작업 위치에 대응하는 장비",
  },
  {
    name: "5톤",
    slug: "5ton",
    image: "/IMG_2248.jpeg",
    desc: "높은 작업 높이가 필요한 대형 고소작업 현장 대응",
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
  const hero = heroSlides[0];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div
          className="heroPhoto"
          style={{
            backgroundImage: `url("${hero.image}")`,
          }}
        />

        <div className="heroShade" />
        <div className="heroGrid" />

        <header className="header">
          <Link href="/" className="logo">
            <span className="logo707">707</span>
            <span className="logoSky">SKY</span>
          </Link>

          <nav className="nav">
            <a href="#vehicles">차량안내</a>
            <a href="#work">작업안내</a>
            <a href="#area">작업지역</a>
          </nav>
        </header>

        <div className="heroInner">
          <div className="heroLabel">{hero.eyebrow}</div>

          <h1>
            {hero.title1}
            <br />
            <strong>{hero.title2}</strong>
          </h1>

          <p className="heroDescription">
            서울 · 경기 · 인천 스카이차 전문
            <br />
            1톤부터 5톤까지 현장 조건에 맞는 차량을 배차합니다.
          </p>

          <div className="heroButtons">
            <a href="#vehicles" className="mainButton">
              차량 안내
              <span>↗</span>
            </a>

            <a href="#area" className="subButton">
              작업지역 확인
            </a>
          </div>
        </div>

        <div className="heroStatus">
          <div>
            <span>01</span>
            <strong>현장 맞춤 배차</strong>
          </div>

          <div>
            <span>02</span>
            <strong>1톤 ~ 5톤</strong>
          </div>

          <div>
            <span>03</span>
            <strong>서울 · 경기 · 인천</strong>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="smallTitle">707 SKY SERVICE</div>

        <div className="introLayout">
          <h2>
            필요한 현장에
            <br />
            필요한 장비를.
          </h2>

          <div className="introText">
            <strong>707스카이</strong>

            <p>
              작업 높이와 현장 진입 조건,
              작업 환경을 확인하여 적합한 스카이차를 안내합니다.
            </p>

            <p>
              건물 외벽, 간판, 공장, 철골, 전기,
              시설물 등 다양한 고소작업 현장에 대응합니다.
            </p>
          </div>
        </div>
      </section>

      {/* VEHICLES */}
      <section id="vehicles" className="vehicleSection">
        <div className="sectionHeader">
          <div>
            <span className="smallTitle">VEHICLE</span>
            <h2>차량 안내</h2>
          </div>

          <p>
            작업 환경과 높이에 따라
            <br />
            적합한 차량을 선택하세요.
          </p>
        </div>

        <div className="vehicleGrid">
          {vehicles.map((vehicle, index) => (
            <Link
              href={`/vehicles/${vehicle.slug}`}
              className="vehicleCard"
              key={vehicle.slug}
            >
              <div className="vehiclePhoto">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} 스카이차 작업`}
                />

                <div className="vehiclePhotoShade" />

                <span className="vehicleIndex">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="vehicleLink">↗</span>
              </div>

              <div className="vehicleInfo">
                <div>
                  <h3>{vehicle.name}</h3>
                  <span>SKY TRUCK</span>
                </div>

                <p>{vehicle.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="workSection">
        <div className="workInner">
          <div className="smallTitle light">MISSION</div>

          <div className="workHeading">
            <h2>
              다양한 현장,
              <br />
              하나의 기준.
            </h2>

            <p>
              작업 조건을 확인한 후
              <br />
              현장에 적합한 장비를 배차합니다.
            </p>
          </div>

          <div className="workGrid">
            {workTypes.map((work) => (
              <div className="workCard" key={work.number}>
                <span>{work.number}</span>

                <div>
                  <strong>{work.title}</strong>
                  <p>{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREA */}
      <section id="area" className="areaSection">
        <div className="sectionHeader">
          <div>
            <span className="smallTitle">SERVICE AREA</span>

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
          {areas.map((area) => (
            <Link
              href={area.href}
              className="areaCard"
              key={area.name}
            >
              <div className="areaTop">
                <span>{area.number}</span>
                <span>↗</span>
              </div>

              <div>
                <span className="areaEnglish">
                  {area.english}
                </span>

                <h3>{area.name}</h3>

                <p>{area.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BRAND */}
      <section className="brandSection">
        <div className="brandNumber">707</div>

        <div className="brandContent">
          <span>SKY TRUCK SERVICE</span>

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
      </section>

      {/* FOOTER */}
      <footer>
        <Link href="/" className="footerLogo">
          <strong>707</strong>
          <span>SKY</span>
        </Link>

        <div className="footerCenter">
          <p>서울 · 경기 · 인천 스카이차</p>
          <p>1톤 · 2.5톤 · 3.5톤 · 4.5톤 · 5톤</p>
        </div>

        <p className="copyright">
          © 707 SKY. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}
