import Script from "next/script";
import { RecoilRoot } from "recoil";

import "$msw";
import "$styles/globals";

import { getLayout, AppPropsWithLayout } from "$framework";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
   const dynamicLayout = getLayout(Component);

   return dynamicLayout({
      page: (
         <>
            <Script src="https://unpkg.com/spacingjs" strategy="lazyOnload" />
            <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />

            <RecoilRoot>
               <Component {...pageProps} />
            </RecoilRoot>
         </>
      )
   });
}

export default MyApp;
