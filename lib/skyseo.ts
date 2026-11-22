import { LOCAL, type LocalInfo } from "@/data/local";

/* =====================================
   지역·차량 페이지 고유 문구 생성기
   - 같은 지역·차량이면 항상 같은 결과
   - 지역이나 차량이 다르면 제목·설명·본문 조합이 달라집니다.
   문장 안 {d} = 지역 이름, {dong} = 대표 동네
===================================== */

export const COMPANY = "707스카이";
export const PHONE = "01094134686";
export const DISPLAY_PHONE = "010-9413-4686";

export function smsHref(text = "") {
  const body = `[707스카이 문의]\n작업 주소(동까지):\n작업 내용(간판/외벽/철골 등):\n작업 높이(층수):\n희망 날짜·시간:${text ? `\n${text}` : ""}\n※ 현장 사진을 함께 보내 주시면 차량을 정확히 안내해 드립니다.`;
  return `sms:${PHONE}?&body=${encodeURIComponent(body)}`;
}

type Faq = { q: string; a: string };

const DISTRICT_SUBS = ["간판·외벽 고소작업", "1톤~5톤 스카이차 대여", "스카이차 임대·당일 배차 상담", "고소작업차 출장"];

const VEHICLE_SUBS: Record<string, string[]> = {
  "1ton": ["골목 상가 간판 작업", "소형 고소작업", "좁은 현장 스카이차"],
  "2-5ton": ["간판·외벽 작업", "현수막·조명 작업", "중층 건물 외벽 보수"],
  "3-5ton": ["공장·철골 작업", "창고 지붕·설비 작업", "시설물 설치·보수"],
  "4-5ton": ["고층 외벽 작업", "대형 간판 설치", "높은 시설물 작업"],
  "5ton": ["고층 외벽·대형 간판", "높은 작업 위치 대응", "대형 현장 고소작업"],
};

const HOOKS = [
  "작업 높이와 진입로를 확인해 맞는 차량을 배차합니다.",
  "현장 사진을 보내 주시면 필요한 톤수를 먼저 안내해 드립니다.",
  "전국 스카이협회 표준 단가표 기준으로 요금을 안내합니다.",
];

const INTRO = [
  "{d}에서 스카이차를 부를 때 가장 먼저 확인하는 것은 작업 높이와 차량을 세울 자리입니다. 건물 층수와 앞 도로 폭을 알려 주시면 1톤부터 5톤 중 맞는 차량을 안내해 드립니다.",
  "{d} 현장은 골목 상가부터 큰 건물까지 조건이 다양합니다. 같은 간판 작업이라도 전선·가로수 간섭, 주차 공간에 따라 필요한 차량이 달라 사진으로 먼저 확인합니다.",
  "{d}에서는 간판 설치·철거, 외벽 보수, 전기·조명, 공장 철골 작업 등 고소작업 의뢰를 받고 있습니다. 작업 시간은 1시간 기본, 오전·오후, 하루 단위로 상담합니다.",
];

const SITUATIONS = [
  "{dong} 상가 간판을 교체하거나 철거해야 할 때",
  "{dong} 건물 외벽 균열·실리콘 보수가 필요할 때",
  "{dong} 외부 조명이나 CCTV를 높은 곳에 달아야 할 때",
  "{dong} 공장·창고 지붕이나 철골 구조물을 보수할 때",
  "{dong} 건물에 현수막을 걸거나 내려야 할 때",
  "{dong} 높은 창호·유리 교체 작업이 필요할 때",
  "{dong} 가로수·조경수 가지를 정리해야 할 때",
  "{dong} 건물 외벽 사인물·채널 간판을 새로 달 때",
];

const VEHICLE_TIPS: Record<string, string> = {
  "1ton": "1톤은 차체가 작아 골목, 이면도로, 상가 앞처럼 공간이 좁은 곳에서 쓰기 좋습니다.",
  "2-5ton": "2.5톤은 간판·외벽·조명 등 일반적인 상가 건물 작업에 두루 쓰이는 차량입니다.",
  "3-5ton": "3.5톤은 공장·창고 철골, 실내외 시설물처럼 작업 반경이 필요한 현장에 맞습니다.",
  "4-5ton": "4.5톤은 중대형 건물과 높은 작업 위치가 있는 현장에 대응하는 차량입니다.",
  "5ton": "5톤은 높은 작업 높이가 필요한 대형 현장에 쓰이며, 차량을 세울 공간을 먼저 확인합니다.",
};

export const FAQ: Faq[] = [
  { q: "스카이차 요금은 어떻게 되나요?", a: "전국 스카이협회 표준 단가표를 기준으로 1시간 기본, 오전·오후(4시간), 하루(8시간) 단위로 안내합니다. 1~3.5톤 기본 30만원, 하루 60만원이며 현장 조건에 따라 달라질 수 있습니다." },
  { q: "몇 톤 차량을 불러야 할지 모르겠어요.", a: "작업할 위치의 층수(높이)와 차량을 세울 도로 폭, 전선·가로수 같은 장애물을 알려 주시면 맞는 톤수를 안내해 드립니다." },
  { q: "당일 배차도 되나요?", a: "차량 일정에 따라 가능합니다. 작업 주소와 시간을 알려 주시면 바로 확인해 드립니다." },
  { q: "기사님이 함께 오나요?", a: "네, 스카이차는 운전과 장비 조작을 함께 하는 기사님이 배차됩니다." },
  { q: "비가 오면 작업이 되나요?", a: "강풍·우천 시에는 안전을 위해 작업 일정을 조정할 수 있습니다. 전날 기상 상황을 보고 다시 안내해 드립니다." },
  { q: "도로에 차를 세워도 되나요?", a: "작업 위치와 도로 상황에 따라 다릅니다. 필요한 경우 관할 기관 신고나 신호수 배치가 필요할 수 있어 미리 확인합니다." },
  { q: "사진으로 견적을 받을 수 있나요?", a: "네, 작업할 곳 사진과 주소를 문자로 보내 주시면 차량과 예상 시간을 먼저 안내해 드립니다." },
];

const KEYWORDS = ["스카이차", "스카이차대여", "스카이차임대", "고소작업차", "간판스카이", "스카이차요금"];

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function pick<T>(arr: readonly T[], seed: number, count: number): T[] {
  const n = arr.length;
  let stride = (seed % (n - 1)) + 1;
  while (gcd(stride, n) !== 1) stride++;
  const out: T[] = [];
  for (let i = 0; i < Math.min(count, n); i++) out.push(arr[(seed + i * stride) % n]);
  return out;
}

export function getLocal(province: string, slug: string): LocalInfo | null {
  return LOCAL[`${province}/${slug}`] ?? null;
}

export type SkyContent = {
  title: string;
  description: string;
  heading: string;
  lead: string;
  localNote: string;
  vehicleTip: string | null;
  situations: string[];
  faq: Faq[];
  tags: string[];
};

/** vehicleSlug 를 주면 차량별 지역 페이지, 없으면 지역 페이지용 */
export function skyContent(
  region: { province: string; provinceName: string; slug: string; name: string },
  vehicle?: { slug: string; name: string },
): SkyContent {
  const seed = hash(`${region.province}|${region.slug}|${vehicle?.slug ?? "all"}`);
  const local = getLocal(region.province, region.slug);
  const dongs = local ? [local[0], local[1], local[2]] : [region.name, region.name, region.name];
  const place = `${region.provinceName} ${region.name}`;
  const fill = (t: string, dong = dongs[0]) => t.replaceAll("{d}", region.name).replaceAll("{dong}", dong);

  const subs = vehicle ? VEHICLE_SUBS[vehicle.slug] ?? DISTRICT_SUBS : DISTRICT_SUBS;
  const sub = subs[seed % subs.length];
  const hook = HOOKS[(seed >>> 3) % HOOKS.length];
  const what = vehicle ? `${vehicle.name} 스카이차` : "스카이차";

  return {
    title: `${place} ${what} · ${sub} | ${COMPANY}`,
    description: `${place}(${dongs.join("·")}) ${what} 출장. ${hook} 간판·외벽·전기·철골 고소작업 상담 ${DISPLAY_PHONE}.`,
    heading: `${region.name} ${what} 현장 안내`,
    lead: fill(INTRO[(seed >>> 5) % INTRO.length]),
    localNote: local
      ? `${local[3]} ${dongs.join(", ")} 등 ${region.name} 전 지역으로 출동합니다.`
      : `${place} 전 지역으로 출동합니다.`,
    vehicleTip: vehicle ? VEHICLE_TIPS[vehicle.slug] ?? null : null,
    situations: pick(SITUATIONS, seed >>> 7, 3).map((t, i) => fill(t, dongs[i])),
    faq: pick(FAQ, seed >>> 11, 3),
    tags: pick(KEYWORDS, seed >>> 13, 4).map((k) => `${region.name} ${vehicle ? `${vehicle.name}${k}` : k}`),
  };
}
