if (process.env.NODE_ENV !== "production") {
   if (typeof window === "undefined") {
      const { server } = await import("../shared-mocks-msw-api-server");

      server.listen();
   } else {
      const { worker } = await import("../shared-mocks-msw-api-browser");

      worker.start();
   }
}

export {};
