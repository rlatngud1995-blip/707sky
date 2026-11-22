import { skyContent, smsHref, PHONE, DISPLAY_PHONE } from "@/lib/skyseo";

/* =====================================
   지역·차량 페이지 고유 안내 블록
===================================== */

type RegionLike = { province: string; provinceName: string; slug: string; name: string };
type VehicleLike = { slug: string; name: string };

const wrap: React.CSSProperties = { maxWidth: 1180, margin: "0 auto", padding: "56px 20px 8px", color: "#141811" };
const card: React.CSSProperties = { background: "#fff", border: "1px solid #dcddd4", padding: "26px 24px", marginTop: 14 };
const eyebrow: React.CSSProperties = { fontSize: 11, fontWeight: 900, letterSpacing: 2, color: "#74804f" };
const h2: React.CSSProperties = { margin: "8px 0 12px", fontSize: 24, letterSpacing: -0.8, fontWeight: 900 };
const p: React.CSSProperties = { margin: "0 0 10px", lineHeight: 1.85, fontSize: 15, color: "#3d4137" };
const tag: React.CSSProperties = { display: "inline-block", border: "1px solid #c5c6bc", padding: "6px 11px", fontSize: 12, margin: "0 6px 6px 0", color: "#4a4f43" };
const btn: React.CSSProperties = { display: "inline-flex", alignItems: "center", minHeight: 50, padding: "0 20px", fontWeight: 900, fontSize: 14, textDecoration: "none", marginRight: 8, marginTop: 10 };

export default function LocalSky({ region, vehicle }: { region: RegionLike; vehicle?: VehicleLike }) {
  const c = skyContent(region, vehicle);
  const sms = `지역: ${region.provinceName} ${region.name}${vehicle ? `\n차량: ${vehicle.name}` : ""}`;

  return (
    <section style={wrap} aria-label={c.heading}>
      <div style={card}>
        <span style={eyebrow}>LOCAL FIELD</span>
        <h2 style={h2}>{c.heading}</h2>
        <p style={p}>{c.lead}</p>
        <p style={p}>{c.localNote}</p>
        {c.vehicleTip && <p style={p}>{c.vehicleTip}</p>}
        <div style={{ marginTop: 6 }}>
          {c.tags.map((t) => (
            <span key={t} style={tag}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={card}>
        <span style={eyebrow}>REQUEST</span>
        <h2 style={h2}>{region.name}에서 이런 작업을 많이 합니다</h2>
        <ul style={{ ...p, paddingLeft: 20 }}>
          {c.situations.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a href={`tel:${PHONE}`} style={{ ...btn, background: "#141811", color: "#fff" }}>
          전화 상담 {DISPLAY_PHONE}
        </a>
        <a href={smsHref(sms)} style={{ ...btn, background: "#a4b274", color: "#141811" }}>
          문자로 현장 사진 보내기
        </a>
      </div>

      <div style={card}>
        <span style={eyebrow}>FAQ</span>
        <h2 style={h2}>자주 묻는 질문</h2>
        {c.faq.map((f) => (
          <details key={f.q} style={{ borderTop: "1px solid #e4e5dd", padding: "13px 0" }}>
            <summary style={{ fontWeight: 800, cursor: "pointer" }}>{f.q}</summary>
            <p style={{ ...p, margin: "8px 0 0" }}>{f.a}</p>
          </details>
        ))}
        <p style={{ ...p, marginTop: 12, fontSize: 13 }}>
          요금 기준은 <a href="/#price">707스카이 단가 안내</a>에서 확인하실 수 있습니다.
        </p>
      </div>
    </section>
  );
}
