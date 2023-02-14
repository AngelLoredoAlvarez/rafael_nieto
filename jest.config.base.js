module.exports = (dir) => {
  const package = require(`${dir}/package.json`);

  return {
    testEnvironment: "node",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    testMatch: ["<rootDir>/**/__tests__/**/*.test.[jt]s?(x)"],
    moduleFileExtensions: [
      "web.tsx",
      "tsx",
      "web.ts",
      "ts",
      "web.jsx",
      "jsx",
      "web.js",
      "js",
      "node",
    ],
    roots: [`<rootDir>`],

    rootDir: dir,
    name: package.name,
    displayName: package.name,

    setupFilesAfterEnv: ["<rootDir>/../../jest.setup.js"],
    transformIgnorePatterns: [
      "<rootDir>/node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|solito)",
    ],
    moduleNameMapper: {
      "^react-native$": "react-native-web",
    },
  };
};
