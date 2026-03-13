import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@org-design-system/core", "@org-design-system/components", "@org-design-system/icons", "@org-design-system/styles"],
};

export default nextConfig;
