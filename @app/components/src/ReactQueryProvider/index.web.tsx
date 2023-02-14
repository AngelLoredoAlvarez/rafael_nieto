import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";

const rqClient = new QueryClient();

type ReactQueryProviderType = {
  children: React.ReactNode;
};

function ReactQueryProvider({ children }: ReactQueryProviderType) {
  return (
    <QueryClientProvider client={rqClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export { ReactQueryProvider };
