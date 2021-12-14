import * as NextImage from "next/image";

import { worker } from "../src/lib/domain/shared/mocks/msw/api/shared-mocks-msw-api-browser";

import "../src/lib/domain/shared/styles/globals.scss";

export const decorators = [];

// Next Image
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
   configurable: true,
   value: (props: any) => <OriginalNextImage {...props} unoptimized />
});

// Mock Service Worker
if (typeof window !== "undefined") {
   worker.start();

   decorators.push((story: any) => {
      worker.resetHandlers();
      return <>{story()}</>;
   });
}
