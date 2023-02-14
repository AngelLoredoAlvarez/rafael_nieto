import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../../data/schema.graphql",
  documents: ["../hooks/src/**/*.ts", "!src/gql/**/*"],
  generates: {
    "./src/": {
      preset: "client",
      plugins: [],
      config: {
        link: {
          name: "rafael_nieto",
          endpoint: "http://localhost:5678/graphql",
        },
      },
    },
  },
};

export default config;
