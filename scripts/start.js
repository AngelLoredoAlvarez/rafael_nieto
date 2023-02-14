#!/usr/bin/env node
const fs = require("fs");
const { spawn } = require("child_process");

const ENVFILE = `${__dirname}/../.env`;

if (!fs.existsSync(ENVFILE)) {
  console.error(
    "🛠️  Please run 'yarn run setup' before running 'yarn run start'"
  );
  process.exit(1);
}

spawn("yarn", ["dev"], {
  stdio: "inherit",
  env: {
    ...process.env,
    YARN_SILENT: "1",
    npm_config_loglevel: "silent",
  },
  shell: true,
});
