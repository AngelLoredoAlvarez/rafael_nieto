const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [[require.resolve("./plugins/swc_plugin_reanimated.wasm")]],
  },
  images: {
    disableStaticImages: true,
  },
  // reanimated (and thus, Moti) doesn't work with strict mode currently...
  // https://github.com/nandorojo/moti/issues/224
  // https://github.com/necolas/react-native-web/pull/2330
  // https://github.com/nandorojo/moti/issues/224
  // once that gets fixed, set this back to true
  reactStrictMode: false,
  transpilePackages: ["expo", "moti", "nativewind", "react-native", "solito"],
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ["@tanstack/react-query", ...config.externals];
    }
    config.resolve.alias["@tanstack/react-query"] = path.resolve(
      require.resolve("@tanstack/react-query")
    );

    return config;
  },
};

module.exports = withPlugins([withFonts, withImages, withExpo], nextConfig);
