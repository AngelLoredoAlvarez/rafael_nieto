import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

const rqClient = new QueryClient();

if (__DEV__) {
  import("react-query-native-devtools").then(({ addPlugin }) => {
    addPlugin({ queryClient: rqClient });
  });
}

type ReactQueryProviderType = {
  children: React.ReactNode;
};

function ReactQueryProvider({ children }: ReactQueryProviderType) {
  return (
    <QueryClientProvider client={rqClient}>{children}</QueryClientProvider>
  );
}

export { ReactQueryProvider };
