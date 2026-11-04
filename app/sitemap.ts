import type { MetadataRoute } from "next";

import {
  regions,
} from "@/data/regions";

import {
  vehicles,
} from "@/data/vehicles";

const SITE =
  "https://707sky.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now =
    new Date();

  const mainPages: MetadataRoute.Sitemap = [
    {
      url:
        SITE,

      lastModified:
        now,

      changeFrequency:
        "weekly",

      priority:
        1,
    },

    {
      url:
        `${SITE}/area/seoul`,

      lastModified:
        now,

      changeFrequency:
        "weekly",

      priority:
        0.9,
    },

    {
      url:
        `${SITE}/area/gyeonggi`,

      lastModified:
        now,

      changeFrequency:
        "weekly",

      priority:
        0.9,
    },

    {
      url:
        `${SITE}/area/incheon`,

      lastModified:
        now,

      changeFrequency:
        "weekly",

      priority:
        0.9,
    },
  ];

  const vehiclePages: MetadataRoute.Sitemap =
    vehicles.map(
      (vehicle) => ({
        url:
          `${SITE}/vehicles/${vehicle.slug}`,

        lastModified:
          now,

        changeFrequency:
          "weekly",

        priority:
          0.85,
      })
    );

  const regionPages: MetadataRoute.Sitemap =
    regions.map(
      (region) => ({
        url:
          `${SITE}/area/${region.province}/${region.slug}`,

        lastModified:
          now,

        changeFrequency:
          "weekly",

        priority:
          0.8,
      })
    );

  const regionVehiclePages: MetadataRoute.Sitemap =
    regions.flatMap(
      (region) =>
        vehicles.map(
          (vehicle) => ({
            url:
              `${SITE}/area/${region.province}/${region.slug}/${vehicle.slug}`,

            lastModified:
              now,

            changeFrequency:
              "weekly" as const,

            priority:
              0.75,
          })
        )
    );

  return [
    ...mainPages,
    ...vehiclePages,
    ...regionPages,
    ...regionVehiclePages,
  ];
}
