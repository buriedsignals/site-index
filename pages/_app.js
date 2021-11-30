import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

function BuriedSignalsMag({ Component, pageProps, router }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Buried Signals" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.25,
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default BuriedSignalsMag;
