import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*.spec.{js,jsx,ts,tsx}",
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
