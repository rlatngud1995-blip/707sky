export type Region = {
  province: "seoul" | "gyeonggi" | "incheon";
  provinceName: string;
  slug: string;
  name: string;
  description: string;
};

export const regions: Region[] = [
  // =========================
  // 서울
  // =========================

  {
    province: "seoul",
    provinceName: "서울",
    slug: "gangnam",
    name: "강남구",
    description:
      "강남구 상가, 빌딩, 간판, 외벽, 전기·조명, 시설물 등 다양한 고소작업 현장에 맞는 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "gangdong",
    name: "강동구",
    description:
      "강동구 주거시설과 상업시설의 외벽, 간판, 시설물 작업에 필요한 스카이차를 현장 조건에 맞춰 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "gangbuk",
    name: "강북구",
    description:
      "강북구 골목과 도로 여건을 고려하여 간판, 외벽, 전기, 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "gangseo",
    name: "강서구",
    description:
      "강서구 상가와 공장, 업무시설의 간판·외벽·시설물 작업에 적합한 스카이차 배차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "gwanak",
    name: "관악구",
    description:
      "관악구 건물 외벽과 간판, 전기·조명 등 고소작업 현장에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "gwangjin",
    name: "광진구",
    description:
      "광진구 상가와 주거시설의 간판 설치, 외벽 작업, 시설물 보수에 맞는 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "guro",
    name: "구로구",
    description:
      "구로구 공장, 지식산업센터, 상가 등 다양한 현장의 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "geumcheon",
    name: "금천구",
    description:
      "금천구 공장과 산업시설, 상업시설의 철골·간판·외벽 작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "nowon",
    name: "노원구",
    description:
      "노원구 아파트와 상가, 건물 외벽 및 시설물 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "dobong",
    name: "도봉구",
    description:
      "도봉구 간판, 외벽, 전기 및 각종 시설물 작업 현장에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "dongdaemun",
    name: "동대문구",
    description:
      "동대문구 상가와 건물의 간판, 외벽, 전기·조명 고소작업에 적합한 차량을 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "dongjak",
    name: "동작구",
    description:
      "동작구 주거시설 및 상가 현장의 간판·외벽·시설물 작업에 맞는 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "mapo",
    name: "마포구",
    description:
      "마포구 상업시설과 업무시설의 간판, 외벽, 시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "seodaemun",
    name: "서대문구",
    description:
      "서대문구 건물 외벽, 간판, 조명 및 시설물 보수 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "seocho",
    name: "서초구",
    description:
      "서초구 빌딩과 상업시설의 간판, 외벽, 전기, 고소작업 현장에 필요한 차량을 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "seongdong",
    name: "성동구",
    description:
      "성동구 상가와 공장, 건물 시설물의 고소작업에 적합한 스카이차 배차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "seongbuk",
    name: "성북구",
    description:
      "성북구 주택가와 상가의 간판·외벽·전기 작업에 필요한 스카이차를 현장에 맞춰 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "songpa",
    name: "송파구",
    description:
      "송파구 상가, 업무시설, 주거시설의 간판과 외벽 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "yangcheon",
    name: "양천구",
    description:
      "양천구 건물 외벽, 간판, 시설물 보수 및 전기작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "yeongdeungpo",
    name: "영등포구",
    description:
      "영등포구 상업시설과 업무시설의 간판, 외벽, 시설물 고소작업에 필요한 차량을 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "yongsan",
    name: "용산구",
    description:
      "용산구 상가와 빌딩의 외벽, 간판, 조명 및 시설물 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "eunpyeong",
    name: "은평구",
    description:
      "은평구 주거지역과 상가의 간판·외벽·시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "jongno",
    name: "종로구",
    description:
      "종로구 도심 상가와 건물의 간판, 외벽, 시설물 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "jung",
    name: "중구",
    description:
      "서울 중구 상업시설과 빌딩의 간판, 외벽, 조명 및 시설물 작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "seoul",
    provinceName: "서울",
    slug: "jungnang",
    name: "중랑구",
    description:
      "중랑구 상가와 주거시설의 간판, 외벽, 전기 및 고소작업에 적합한 스카이차를 안내합니다.",
  },

  // =========================
  // 경기
  // =========================

  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "suwon",
    name: "수원시",
    description:
      "수원시 상가, 아파트, 공장 및 각종 시설물의 간판·외벽·고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "yongin",
    name: "용인시",
    description:
      "용인시 공장, 물류시설, 상가와 주거시설의 다양한 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "hwaseong",
    name: "화성시",
    description:
      "화성시 공장과 산업단지, 물류창고, 상업시설의 철골·외벽·시설물 작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "seongnam",
    name: "성남시",
    description:
      "성남시 빌딩, 상가, 업무시설의 간판과 외벽, 시설물 고소작업에 적합한 차량을 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "goyang",
    name: "고양시",
    description:
      "고양시 주거시설과 상업시설의 외벽, 간판, 조명 및 각종 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "bucheon",
    name: "부천시",
    description:
      "부천시 상가와 공장, 주거시설의 간판·외벽·전기 고소작업에 맞는 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "ansan",
    name: "안산시",
    description:
      "안산시 산업단지와 공장, 상업시설의 철골, 외벽, 시설물 고소작업에 필요한 차량을 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "anyang",
    name: "안양시",
    description:
      "안양시 상가, 업무시설 및 주거시설의 간판과 외벽 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "pyeongtaek",
    name: "평택시",
    description:
      "평택시 공장, 산업시설, 물류시설의 고소작업과 철골·외벽 작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "siheung",
    name: "시흥시",
    description:
      "시흥시 공장과 산업단지의 철골, 외벽, 배관, 시설물 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "gimpo",
    name: "김포시",
    description:
      "김포시 공장, 창고, 상가와 주거시설의 다양한 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "paju",
    name: "파주시",
    description:
      "파주시 공장과 창고, 상가 및 시설물의 외벽·철골·간판 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "gwangmyeong",
    name: "광명시",
    description:
      "광명시 건물 외벽과 간판, 전기·조명, 시설물 작업 현장에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "gwangju",
    name: "광주시",
    description:
      "경기 광주시 공장과 상가, 주거시설의 고소작업에 적합한 스카이차를 현장 조건에 맞춰 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "gunpo",
    name: "군포시",
    description:
      "군포시 상가와 공장, 산업시설의 간판·외벽·시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "uiwang",
    name: "의왕시",
    description:
      "의왕시 공장과 물류시설, 상가의 외벽·간판·고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "uijeongbu",
    name: "의정부시",
    description:
      "의정부시 상가와 주거시설의 외벽, 간판, 시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "namyangju",
    name: "남양주시",
    description:
      "남양주시 상가, 창고, 주거시설의 간판과 외벽, 시설물 고소작업에 적합한 차량을 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "hanam",
    name: "하남시",
    description:
      "하남시 상업시설과 물류시설, 건물 외벽의 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "osan",
    name: "오산시",
    description:
      "오산시 공장, 상가와 주거시설의 간판·외벽·시설물 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "icheon",
    name: "이천시",
    description:
      "이천시 공장, 물류창고, 산업시설의 철골과 외벽 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "anseong",
    name: "안성시",
    description:
      "안성시 공장과 산업시설, 창고의 고소작업과 외벽·시설물 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "yangju",
    name: "양주시",
    description:
      "양주시 공장과 창고, 상가의 철골·외벽·시설물 작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "guri",
    name: "구리시",
    description:
      "구리시 상가와 주거시설의 간판, 외벽, 전기 및 시설물 고소작업에 적합한 차량을 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "pocheon",
    name: "포천시",
    description:
      "포천시 공장과 창고, 산업시설의 철골 및 외벽 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "dongducheon",
    name: "동두천시",
    description:
      "동두천시 상가, 공장 및 시설물의 외벽·간판·고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "gwacheon",
    name: "과천시",
    description:
      "과천시 건물 외벽, 간판, 조명 및 각종 시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "yeoju",
    name: "여주시",
    description:
      "여주시 공장, 창고, 상가 등 다양한 현장의 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "yangpyeong",
    name: "양평군",
    description:
      "양평군 주택, 상가, 창고와 각종 시설물의 외벽 및 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "gapyeong",
    name: "가평군",
    description:
      "가평군 숙박시설, 주택, 상가와 시설물 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "gyeonggi",
    provinceName: "경기",
    slug: "yeoncheon",
    name: "연천군",
    description:
      "연천군 공장, 창고, 주택 및 시설물의 외벽과 고소작업에 필요한 스카이차를 안내합니다.",
  },

  // =========================
  // 인천
  // =========================

  {
    province: "incheon",
    provinceName: "인천",
    slug: "jung",
    name: "중구",
    description:
      "인천 중구 상업시설, 공장, 물류시설의 간판·외벽·시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "dong",
    name: "동구",
    description:
      "인천 동구 공장과 산업시설의 철골, 외벽 및 시설물 고소작업에 적합한 차량을 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "michuhol",
    name: "미추홀구",
    description:
      "미추홀구 상가와 주거시설의 간판, 외벽, 조명 및 시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "yeonsu",
    name: "연수구",
    description:
      "연수구 상업시설과 업무시설, 건물 외벽의 고소작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "namdong",
    name: "남동구",
    description:
      "남동구 산업단지, 공장, 상업시설의 철골·외벽·시설물 고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "bupyeong",
    name: "부평구",
    description:
      "부평구 상가와 공장, 주거시설의 간판·외벽·시설물 고소작업에 맞는 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "gyeyang",
    name: "계양구",
    description:
      "계양구 상가, 창고 및 주거시설의 외벽과 간판 작업에 적합한 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "seo",
    name: "서구",
    description:
      "인천 서구 공장, 산업단지, 물류시설의 철골·외벽·고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "ganghwa",
    name: "강화군",
    description:
      "강화군 주택, 상가, 창고 및 시설물의 외벽·간판·고소작업에 필요한 스카이차를 안내합니다.",
  },
  {
    province: "incheon",
    provinceName: "인천",
    slug: "ongjin",
    name: "옹진군",
    description:
      "옹진군 내 작업 가능 지역의 시설물과 건물 고소작업에 필요한 스카이차 상담을 안내합니다.",
  },
];

export function getRegion(province: string, slug: string) {
  return regions.find(
    (region) =>
      region.province === province &&
      region.slug === slug
  );
}
