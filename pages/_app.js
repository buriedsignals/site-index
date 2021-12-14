import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

function BuriedSignalsMag({ Component, pageProps, router }) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Buried Signals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component
          {...pageProps}
          key={router.route}
          isFirstMount={isFirstMount}
        />
      </AnimatePresence>
    </div>
  );
}

export default BuriedSignalsMag;
