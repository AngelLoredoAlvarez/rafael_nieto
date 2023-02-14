import "raf/polyfill";
import "../global.css";

import {
  NavigationProvider,
  ReactQueryProvider,
  SafeArea,
} from "@app/components";
import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null;
  }
};

fixReanimatedIssue();

function RafaelNieto({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rafael Nieto</title>
        <meta
          name="description"
          content="Web - Native App's for the Rafael Nieto Kinder Garden"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactQueryProvider>
        <SafeArea>
          <NavigationProvider>
            <Component {...pageProps} />
          </NavigationProvider>
        </SafeArea>
      </ReactQueryProvider>
    </>
  );
}

export default RafaelNieto;
