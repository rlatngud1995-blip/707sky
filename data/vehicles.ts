export type Vehicle = {
  slug: string;
  name: string;
  image: string;
  title: string;
  description: string;
  suitableFor: string[];
};

export const vehicles: Vehicle[] = [
  {
    slug: "1ton",
    name: "1톤",
    image: "/IMG_2254.jpeg",
    title: "1톤 스카이차",
    description:
      "좁은 도로와 골목, 상가 간판, 외벽, 전기·조명 등 비교적 기동성이 필요한 현장에 활용하기 좋은 스카이차입니다.",
    suitableFor: [
      "상가 간판 설치 및 철거",
      "좁은 골목 고소작업",
      "전기·조명 작업",
      "건물 외벽 보수",
    ],
  },
  {
    slug: "2-5ton",
    name: "2.5톤",
    image: "/IMG_2253.jpeg",
    title: "2.5톤 스카이차",
    description:
      "간판, 외벽, 시설물 등 다양한 고소작업 현장에서 활용하기 좋은 스카이차입니다.",
    suitableFor: [
      "간판 설치 및 철거",
      "건물 외벽 작업",
      "시설물 설치 및 보수",
      "전기·조명 작업",
    ],
  },
  {
    slug: "3-5ton",
    name: "3.5톤",
    image: "/IMG_2252.jpeg",
    title: "3.5톤 스카이차",
    description:
      "공장, 창고, 상업시설 및 각종 시설물의 중형 고소작업에 활용하기 좋은 스카이차입니다.",
    suitableFor: [
      "공장 시설물 작업",
      "창고 고소작업",
      "외벽 작업",
      "철골 및 구조물 작업",
    ],
  },
  {
    slug: "4-5ton",
    name: "4.5톤",
    image: "/IMG_2249.jpeg",
    title: "4.5톤 스카이차",
    description:
      "높은 작업 위치와 중대형 현장에서 건물 외벽, 철골, 공장 및 시설물 작업에 활용할 수 있는 스카이차입니다.",
    suitableFor: [
      "중대형 건물 외벽 작업",
      "철골 및 구조물 작업",
      "공장 고소작업",
      "대형 간판 작업",
    ],
  },
  {
    slug: "5ton",
    name: "5톤",
    image: "/IMG_2248.jpeg",
    title: "5톤 스카이차",
    description:
      "높은 작업 높이가 필요한 현장과 대형 시설물, 공장, 철골 등 다양한 고소작업에 활용하는 스카이차입니다.",
    suitableFor: [
      "높은 외벽 작업",
      "대형 철골 작업",
      "공장 및 산업시설",
      "대형 시설물 고소작업",
    ],
  },
];

export function getVehicle(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}
