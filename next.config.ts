import type { NextConfig } from "next";

const publicPages = [
  "about",
  "academics",
  "admissions",
  "contact",
  "facilities",
  "fees",
  "gallery",
  "history",
  "news",
  "primary-school",
  "schools",
  "college",
];
const adminPages = [
  "activities",
  "admissions",
  "dashboard",
  "login",
  "messages",
  "students",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/our-schools", destination: "/schools", permanent: true },
      { source: "/our-schools.html", destination: "/schools", permanent: true },
      ...publicPages.map((page) => ({
        source: `/${page}.html`,
        destination: `/${page}`,
        permanent: true,
      })),
      ...adminPages.map((page) => ({
        source: `/admin/${page}.html`,
        destination: `/admin/${page}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
