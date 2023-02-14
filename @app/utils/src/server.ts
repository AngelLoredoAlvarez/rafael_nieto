import { setupServer } from "msw/node";

import { handlers } from "./MSWHandlers";

const server = setupServer(...handlers);

export { server };
