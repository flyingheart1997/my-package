import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@antaris/ui", "@antaris/icons", "@antaris/tokens"],
};

export default nextConfig;
