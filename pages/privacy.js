import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Head from "next/head";

const Privacy = () => {
  return (
    <div className="global-wrapper">
      <Navbar />
      <Head>
        <meta />
      </Head>
      <div className="pages-wrapper">
        <h1>Privacy Policy</h1>
        <p>We currently do not have analytics tracking.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
