import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "img.clerk.com" }],
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // Use explicit file paths (avoid .mjs if not exported)
      "@lexical/react/LexicalComposer": path.resolve(
        __dirname,
        "node_modules/@lexical/react/LexicalComposer.js"
      ),
      "@lexical/react/LexicalComposerContext": path.resolve(
        __dirname,
        "node_modules/@lexical/react/LexicalComposerContext.js"
      ),
    };
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: "shoaib-hajj",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
