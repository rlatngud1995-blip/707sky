import Link from "next/link";

const vehicles = [
  {
    name: "1톤",
    slug: "1ton",
    desc: "좁은 현장과 소규모 고소작업에 적합한 스카이차",
  },
  {
    name: "2.5톤",
    slug: "2-5ton",
    desc: "간판·외벽·시설물 작업에 활용도가 높은 차량",
  },
  {
    name: "3.5톤",
    slug: "3-5ton",
    desc: "작업성과 안정성을 모두 고려한 현장형 스카이차",
  },
  {
    name: "4.5톤",
    slug: "4-5ton",
    desc: "중대형 고소작업과 다양한 현장에 대응",
  },
  {
    name: "5톤",
    slug: "5ton",
    desc: "높은 작업 높이가 필요한 현장에 적합한 대형 차량",
  },
];

const workTypes = [
  "간판 작업",
  "외벽 작업",
  "전기·조명 작업",
  "시설물 작업",
  "고소 작업",
  "기타 현장 작업",
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <header className="header">
          <Link href="/" className="logo">
            <strong>707</strong>
            <span>SKY</span>
          </Link>

          <nav>
            <a href="#vehicles">차량안내</a>
            <a href="#work">작업안내</a>
            <a href="#area">작업지역</a>
          </nav>
        </header>

        <div className="heroInner">
          <div className="heroTag">SEOUL · GYEONGGI · INCHEON</div>

          <h1>
            707
            <span>SKY</span>
          </h1>

          <h2>
            현장에 맞는 장비,
            <br />
            빠르고 정확하게.
          </h2>

          <p>
            서울 · 경기 · 인천 스카이차 전문
            <br />
            1톤부터 5톤까지 현장에 맞는 차량을 안내합니다.
          </p>

          <div className="heroButtons">
            <a href="#vehicles" className="primaryBtn">
              차량 확인
            </a>

            <a href="#area" className="outlineBtn">
              작업지역
            </a>
          </div>
        </div>

        <div className="heroInfo">
          <div>
            <span>01</span>
            <strong>빠른 배차</strong>
          </div>

          <div>
            <span>02</span>
            <strong>현장 맞춤 차량</strong>
          </div>

          <div>
            <span>03</span>
            <strong>수도권 전문</strong>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="sectionTag">707 SKY</div>

        <h2>
          현장 조건에 맞는
          <br />
          스카이차를 안내합니다.
        </h2>

        <p>
          작업 위치, 높이, 현장 진입 조건을 확인하여
          적합한 차량을 안내하고 안전한 작업을 진행합니다.
        </p>
      </section>

      <section id="vehicles" className="vehicleSection">
        <div className="sectionHead">
          <div>
            <div className="sectionTag">VEHICLE</div>
            <h2>차량 안내</h2>
          </div>

          <p>
            현장 규모와 작업 조건에 따라
            <br />
            필요한 차량을 선택하세요.
          </p>
        </div>

        <div className="vehicleGrid">
          {vehicles.map((vehicle, index) => (
            <Link
              key={vehicle.slug}
              href={`/vehicles/${vehicle.slug}`}
              className="vehicleCard"
            >
              <div className="vehicleNumber">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div>
                <strong>{vehicle.name}</strong>
                <span>SKY TRUCK</span>

                <p>{vehicle.desc}</p>
              </div>

              <div className="vehicleArrow">↗</div>
            </Link>
          ))}
        </div>
      </section>

      <section id="work" className="workSection">
        <div className="workInner">
          <div className="sectionTag light">MISSION</div>

          <h2>
            다양한 고소작업 현장에
            <br />
            대응합니다.
          </h2>

          <div className="workGrid">
            {workTypes.map((work, index) => (
              <div key={work}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{work}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="area" className="areaSection">
        <div className="sectionHead">
          <div>
            <div className="sectionTag">SERVICE AREA</div>

            <h2>
              서울 · 경기 · 인천
              <br />
              현장 출동
            </h2>
          </div>

          <p>
            지역별 페이지를 통해
            <br />
            자세한 작업 내용을 확인할 수 있습니다.
          </p>
        </div>

        <div className="areaGrid">
          <div>
            <span>01</span>
            <h3>서울</h3>
            <p>서울 전 지역 스카이차 작업</p>
          </div>

          <div>
            <span>02</span>
            <h3>경기</h3>
            <p>경기도 전 지역 스카이차 작업</p>
          </div>

          <div>
            <span>03</span>
            <h3>인천</h3>
            <p>인천 전 지역 스카이차 작업</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <span>707 SKY</span>

        <h2>
          스카이차가 필요한 현장,
          <br />
          707스카이.
        </h2>

        <p>
          현장 위치와 작업 내용을 알려주시면
          적합한 차량을 안내해드립니다.
        </p>
      </section>

      <footer>
        <div className="footerLogo">
          <strong>707</strong>
          <span>SKY</span>
        </div>

        <p>서울 · 경기 · 인천 스카이차</p>
        <p>© 707 SKY. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
