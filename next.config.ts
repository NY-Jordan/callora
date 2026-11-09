import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/callora-msg",
        destination: "https://message.callora.agency",
        permanent: true,
      },
    ];
  },
  images: {
    contentDispositionType: "inline",
  },
};

export default nextConfig;
