// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('@expo/metro-config')}
 */
const { getDefaultConfig } = require("@expo/metro-config");
const { makeMetroConfig } = require("@rnx-kit/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");
const path = require("path");

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, "../..");

const symlinkResolver = MetroSymlinksResolver();
const requestResolver = (context, moduleName, platform, realName) => {
  // patch for unpatched dependencies
  // e.g. react-native-version-check-expo
  if (moduleName === "@unimodules/core") {
    const expoModules = "expo-modules-core";
    return symlinkResolver(context, expoModules, platform, expoModules);
  }

  return symlinkResolver(context, moduleName, platform, realName);
};

const config = getDefaultConfig(projectRoot);

const monorepoPackages = {
  "@app/components": path.resolve(workspaceRoot, "@app/components"),
  "@app/config": path.resolve(workspaceRoot, "@app/config"),
};
config.watchFolders = [workspaceRoot, ...Object.values(monorepoPackages)];
config.resolver.extraNodeModules = monorepoPackages;

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
config.resolver.sourceExts = ["jsx", "js", "ts", "tsx", "cjs", "json"];
config.resolver.disableHierarchicalLookup = true;

module.exports = {
  ...config,
  ...makeMetroConfig({
    projectRoot: __dirname,
    resolver: {
      resolveRequest: requestResolver,
    },
  }),
};
