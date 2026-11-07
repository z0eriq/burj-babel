import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "برج بابل",
    short_name: "برج بابل",
    description: "تجارة الجملة في الحلة، محافظة بابل، العراق.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9FAFB",
    theme_color: "#1E3A8A",
    lang: "ar",
    dir: "rtl",
  };
}
