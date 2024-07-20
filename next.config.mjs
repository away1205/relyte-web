/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  // trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // loader for the webm - Next js will throw err without this loader
  webpack(config) {
    config.module.rules.push({
      test: /\.webm$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/videos",
          publicPath: "/_next/static/videos",
        },
      },
    });
    return config;
  },
};

export default nextConfig;
