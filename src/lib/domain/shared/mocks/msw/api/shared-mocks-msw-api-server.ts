import { setupServer } from "msw/node";

import { handlers } from "../feature/handlers/shared-mocks-msw-feature-handlers";

export const server = setupServer(...handlers);
