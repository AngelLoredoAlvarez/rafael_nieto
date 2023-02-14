#!/usr/bin/env node
try {
  const rimraf = require("rimraf");

  // root
  rimraf.sync(`${__dirname}/../node_modules`);
  // @app/components
  rimraf.sync(`${__dirname}/../@app/components/node_modules`);
  rimraf.sync(`${__dirname}/../@app/components/dist`);
  rimraf.sync(`${__dirname}/../@app/components/.turbo`);
  rimraf.sync(`${__dirname}/../@app/components/tsconfig.tsbuildinfo`);
  // @app/config
  rimraf.sync(`${__dirname}/../@app/config/node_modules`);
  rimraf.sync(`${__dirname}/../@app/config/dist`);
  rimraf.sync(`${__dirname}/../@app/config/.turbo`);
  rimraf.sync(`${__dirname}/../@app/config/tsconfig.tsbuildinfo`);
  // @app/db
  rimraf.sync(`${__dirname}/../@app/db/node_modules`);
  rimraf.sync(`${__dirname}/../@app/db/.turbo`);
  // @app/e2e
  rimraf.sync(`${__dirname}/../@app/e2e/node_modules`);
  // @app/graphql
  rimraf.sync(`${__dirname}/../@app/graphql/node_modules`);
  rimraf.sync(`${__dirname}/../@app/graphql/dist`);
  rimraf.sync(`${__dirname}/../@app/graphql/.turbo`);
  rimraf.sync(`${__dirname}/../@app/graphql/tsconfig.tsbuildinfo`);
  // @app/hooks
  rimraf.sync(`${__dirname}/../@app/hooks/node_modules`);
  rimraf.sync(`${__dirname}/../@app/hooks/dist`);
  rimraf.sync(`${__dirname}/../@app/hooks/.turbo`);
  rimraf.sync(`${__dirname}/../@app/hooks/tsconfig.tsbuildinfo`);
  // @app/native
  rimraf.sync(`${__dirname}/../@app/native/node_modules`);
  rimraf.sync(`${__dirname}/../@app/native/dist`);
  rimraf.sync(`${__dirname}/../@app/native/.turbo`);
  rimraf.sync(`${__dirname}/../@app/native/tsconfig.tsbuildinfo`);
  rimraf.sync(`${__dirname}/../@app/native/.expo`);
  rimraf.sync(`${__dirname}/../@app/native/.expo-shared`);
  // @app/server
  rimraf.sync(`${__dirname}/../@app/server/node_modules`);
  rimraf.sync(`${__dirname}/../@app/server/dist`);
  rimraf.sync(`${__dirname}/../@app/server/.turbo`);
  rimraf.sync(`${__dirname}/../@app/server/tsconfig.tsbuildinfo`);
  // @app/utils
  rimraf.sync(`${__dirname}/../@app/utils/node_modules`);
  rimraf.sync(`${__dirname}/../@app/utils/dist`);
  rimraf.sync(`${__dirname}/../@app/utils/.turbo`);
  rimraf.sync(`${__dirname}/../@app/utils/tsconfig.tsbuildinfo`);
  // @app/web
  rimraf.sync(`${__dirname}/../@app/web/node_modules`);
  rimraf.sync(`${__dirname}/../@app/web/.next`);
  rimraf.sync(`${__dirname}/../@app/web/.turbo`);
  rimraf.sync(`${__dirname}/../@app/web/tsconfig.tsbuildinfo`);
  // @app/worker
  rimraf.sync(`${__dirname}/../@app/worker/node_modules`);
  rimraf.sync(`${__dirname}/../@app/worker/dist`);
  rimraf.sync(`${__dirname}/../@app/worker/.turbo`);
  rimraf.sync(`${__dirname}/../@app/worker/tsconfig.tsbuildinfo`);
} catch (e) {
  console.error("Failed to clean up, perhaps rimraf isn't installed?");
  console.error(e);
}
