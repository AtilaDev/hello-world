import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hello-world", // Usa el nombre de tu repositorio
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
