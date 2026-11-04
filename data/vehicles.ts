export type Vehicle = {
  slug: string;
  name: string;
  english: string;
  image: string;

  title: string;
  headline: string;
  description: string;

  heroDescription: string;

  suitableFor: {
    title: string;
    description: string;
  }[];

  features: {
    title: string;
    description: string;
  }[];

  seoTitle: string;
  seoDescription: string;
};

export const vehicles: Vehicle[] = [
  {
    slug: "1ton",

    name: "1톤",

    english: "1 TON SKY TRUCK",

    image: "/IMG_2254.jpeg",

    title: "1톤 스카이차",

    headline:
      "좁은 현장과 골목 작업에 유리한 기동성 중심 스카이차",

    description:
      "1톤 스카이차는 비교적 작은 차체를 활용하여 좁은 도로, 상가 주변, 골목 등 차량 진입 공간이 제한적인 현장에서 활용하기 좋은 장비입니다.",

    heroDescription:
      "상가 간판, 외벽, 전기·조명 등 기동성이 필요한 작업 현장에서 활용하기 좋은 1톤 스카이차입니다.",

    suitableFor: [
      {
        title: "상가 간판",
        description:
          "상가 간판 설치·철거 및 유지보수 작업",
      },

      {
        title: "좁은 골목",
        description:
          "대형 차량 진입이 어려운 골목과 이면도로 작업",
      },

      {
        title: "전기 · 조명",
        description:
          "외부 조명과 전기 시설 설치 및 보수",
      },

      {
        title: "외벽 보수",
        description:
          "저층·중층 건물 외벽 및 시설물 작업",
      },
    ],

    features: [
      {
        title: "기동성",
        description:
          "비교적 작은 차량 크기로 좁은 현장에 접근하기 좋습니다.",
      },

      {
        title: "현장 접근",
        description:
          "상가, 주택가, 골목 등 제한된 공간에서 활용하기 좋습니다.",
      },

      {
        title: "빠른 배차",
        description:
          "소규모 고소작업과 단시간 작업에 효율적으로 활용할 수 있습니다.",
      },

      {
        title: "다양한 작업",
        description:
          "간판, 전기, 외벽, 시설물 등 여러 작업에 활용 가능합니다.",
      },
    ],

    seoTitle:
      "1톤 스카이차 | 서울·경기·인천 1톤 스카이차 | 707스카이",

    seoDescription:
      "서울·경기·인천 1톤 스카이차. 좁은 골목, 상가 간판, 외벽, 전기·조명 및 각종 고소작업 현장에 적합한 차량 안내.",
  },

  {
    slug: "2-5ton",

    name: "2.5톤",

    english: "2.5 TON SKY TRUCK",

    image: "/IMG_2253.jpeg",

    title: "2.5톤 스카이차",

    headline:
      "간판부터 외벽까지 활용도가 높은 다목적 스카이차",

    description:
      "2.5톤 스카이차는 간판, 건물 외벽, 전기·조명, 시설물 등 다양한 고소작업 현장에서 활용도가 높은 차량입니다.",

    heroDescription:
      "기동성과 작업 범위의 균형이 좋아 상가, 건물, 시설물 등 다양한 현장에서 활용할 수 있는 2.5톤 스카이차입니다.",

    suitableFor: [
      {
        title: "간판 작업",
        description:
          "중소형 간판 설치·철거 및 유지보수",
      },

      {
        title: "건물 외벽",
        description:
          "외벽 보수 및 외부 시설물 작업",
      },

      {
        title: "전기 · 조명",
        description:
          "외부 전기 시설과 조명 작업",
      },

      {
        title: "시설물 작업",
        description:
          "각종 구조물과 고소 시설물 설치·보수",
      },
    ],

    features: [
      {
        title: "활용도",
        description:
          "상업시설부터 일반 건물까지 폭넓게 활용할 수 있습니다.",
      },

      {
        title: "작업 범위",
        description:
          "1톤보다 넓은 작업 범위를 확보할 수 있습니다.",
      },

      {
        title: "현장 대응",
        description:
          "간판·외벽·전기 등 다양한 작업 조건에 대응하기 좋습니다.",
      },

      {
        title: "균형",
        description:
          "차량 크기와 작업 성능의 균형이 좋은 장비입니다.",
      },
    ],

    seoTitle:
      "2.5톤 스카이차 | 서울·경기·인천 2.5톤 스카이차 | 707스카이",

    seoDescription:
      "서울·경기·인천 2.5톤 스카이차. 간판, 외벽, 전기·조명, 시설물 등 다양한 고소작업 현장 차량 안내.",
  },

  {
    slug: "3-5ton",

    name: "3.5톤",

    english: "3.5 TON SKY TRUCK",

    image: "/IMG_2252.jpeg",

    title: "3.5톤 스카이차",

    headline:
      "공장·창고·상업시설 등 중형 현장에 적합한 스카이차",

    description:
      "3.5톤 스카이차는 공장, 창고, 상업시설, 철골 구조물 등 비교적 작업 범위가 넓은 중형 고소작업 현장에서 활용하기 좋은 차량입니다.",

    heroDescription:
      "공장·창고·상업시설·철골 구조물 등 중형 고소작업에 적합한 3.5톤 스카이차입니다.",

    suitableFor: [
      {
        title: "공장 작업",
        description:
          "공장 내부 및 외부 시설물 고소작업",
      },

      {
        title: "창고 작업",
        description:
          "대형 창고 및 물류시설 고소작업",
      },

      {
        title: "철골 작업",
        description:
          "철골 구조물 설치 및 보수",
      },

      {
        title: "외벽 작업",
        description:
          "건물 외벽과 중층부 시설물 작업",
      },
    ],

    features: [
      {
        title: "중형 현장",
        description:
          "공장과 창고 등 비교적 규모가 있는 현장에 적합합니다.",
      },

      {
        title: "넓은 작업범위",
        description:
          "다양한 중층 고소작업에 활용할 수 있습니다.",
      },

      {
        title: "철골 대응",
        description:
          "철골 및 구조물 작업에 활용하기 좋습니다.",
      },

      {
        title: "시설물 대응",
        description:
          "산업시설과 상업시설 유지보수에도 활용할 수 있습니다.",
      },
    ],

    seoTitle:
      "3.5톤 스카이차 | 서울·경기·인천 3.5톤 스카이차 | 707스카이",

    seoDescription:
      "서울·경기·인천 3.5톤 스카이차. 공장, 창고, 철골, 외벽 및 중형 고소작업 현장 차량 안내.",
  },

  {
    slug: "4-5ton",

    name: "4.5톤",

    english: "4.5 TON SKY TRUCK",

    image: "/IMG_2249.jpeg",

    title: "4.5톤 스카이차",

    headline:
      "높은 작업 위치와 중대형 현장을 위한 스카이차",

    description:
      "4.5톤 스카이차는 높은 작업 위치가 필요한 건물 외벽, 철골, 공장 및 중대형 시설물 작업에서 활용할 수 있는 차량입니다.",

    heroDescription:
      "중대형 건물 외벽과 철골, 공장 시설물 등 높은 위치에서의 고소작업에 적합한 4.5톤 스카이차입니다.",

    suitableFor: [
      {
        title: "중대형 외벽",
        description:
          "중대형 건물의 외벽 및 고층부 작업",
      },

      {
        title: "철골 구조물",
        description:
          "대형 철골 및 구조물 설치·보수",
      },

      {
        title: "공장 고소작업",
        description:
          "공장 설비 및 외부 시설물 작업",
      },

      {
        title: "대형 간판",
        description:
          "높은 위치의 대형 간판 설치 및 철거",
      },
    ],

    features: [
      {
        title: "작업 높이",
        description:
          "높은 위치의 작업에 대응하기 좋은 차량입니다.",
      },

      {
        title: "중대형 현장",
        description:
          "공장·건물·철골 등 규모가 큰 현장에 적합합니다.",
      },

      {
        title: "안정적인 작업",
        description:
          "중대형 고소작업 현장에서 활용도가 높습니다.",
      },

      {
        title: "넓은 활용범위",
        description:
          "외벽부터 시설물까지 다양한 작업에 활용할 수 있습니다.",
      },
    ],

    seoTitle:
      "4.5톤 스카이차 | 서울·경기·인천 4.5톤 스카이차 | 707스카이",

    seoDescription:
      "서울·경기·인천 4.5톤 스카이차. 중대형 외벽, 철골, 공장 및 높은 위치의 고소작업 현장 차량 안내.",
  },

  {
    slug: "5ton",

    name: "5톤",

    english: "5 TON SKY TRUCK",

    image: "/IMG_2248.jpeg",

    title: "5톤 스카이차",

    headline:
      "높은 작업 높이와 대형 현장을 위한 고소작업 차량",

    description:
      "5톤 스카이차는 높은 작업 높이가 필요한 대형 시설물, 공장, 철골, 건물 외벽 등 대형 고소작업 현장에서 활용하는 차량입니다.",

    heroDescription:
      "높은 작업 위치와 대형 구조물, 공장, 철골 등 넓은 작업 범위가 필요한 현장에 적합한 5톤 스카이차입니다.",

    suitableFor: [
      {
        title: "고층 외벽",
        description:
          "높은 건물 외벽과 상부 시설물 작업",
      },

      {
        title: "대형 철골",
        description:
          "대형 철골 구조물 및 산업시설 작업",
      },

      {
        title: "공장 · 산업시설",
        description:
          "대형 공장과 산업시설 고소작업",
      },

      {
        title: "대형 시설물",
        description:
          "높은 위치의 대형 시설물 설치 및 유지보수",
      },
    ],

    features: [
      {
        title: "높은 작업 범위",
        description:
          "높은 위치의 작업에 대응하기 위한 차량입니다.",
      },

      {
        title: "대형 현장",
        description:
          "공장·산업시설·대형 건물 작업에 활용하기 좋습니다.",
      },

      {
        title: "철골 작업",
        description:
          "높은 철골 구조물 작업에 활용할 수 있습니다.",
      },

      {
        title: "현장 대응력",
        description:
          "대형 고소작업 현장의 다양한 조건에 대응합니다.",
      },
    ],

    seoTitle:
      "5톤 스카이차 | 서울·경기·인천 5톤 스카이차 | 707스카이",

    seoDescription:
      "서울·경기·인천 5톤 스카이차. 고층 외벽, 대형 철골, 공장, 산업시설 및 대형 고소작업 현장 차량 안내.",
  },
];

export function getVehicle(slug: string) {
  return vehicles.find(
    (vehicle) =>
      vehicle.slug === slug
  );
}
