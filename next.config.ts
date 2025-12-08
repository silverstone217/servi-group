import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // Si vous utilisez d'autres fournisseurs, ajoutez-les ici :
        // hostname: 'cdn.monautredomaine.com',
      },
    ],
  },
};

export default nextConfig;
