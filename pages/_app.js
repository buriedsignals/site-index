import '../styles/globals.css'
import Head from "next/head";

function BuriedSignalsMag({ Component, pageProps }) {

  return (
    <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="keywords" content="titla, meta, nextjs" />
      <meta name="author" content="Buried Signals" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
    </div>
    );
}

export default BuriedSignalsMag
