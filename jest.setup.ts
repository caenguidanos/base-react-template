import fetch from "isomorphic-fetch";

import { server } from "$msw/server";

import "@testing-library/jest-dom/extend-expect";

export function loadIsomorphicFetch(): void {
   globalThis.fetch = fetch as unknown as typeof globalThis.fetch;
}

beforeAll(() => {
   loadIsomorphicFetch();
   server.listen();
});

afterEach(() => {
   server.resetHandlers();
});

afterAll(() => {
   server.close();
});
