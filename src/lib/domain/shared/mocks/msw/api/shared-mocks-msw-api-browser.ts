import { setupWorker } from "msw";

import { handlers } from "../feature/handlers/shared-mocks-msw-feature-handlers";

export const worker = setupWorker(...handlers);
