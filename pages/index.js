import { useRouter } from "next/router";
import ArticleList from "../components/article-list";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import articles from "../articles.json";
import NewsletterBox from "../components/newsletter-box";
import InitialTransition from "../components/transitions/initial-transition";

const ArticleCategory = ({ isFirstMount }) => {
  const router = useRouter();
  const { category } = router.query;
  function handleAnalytics() {
    var _paq = (window._paq = window._paq || []);
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function () {
      var u = "https://buriedsignals.matomo.cloud/";
      _paq.push(["setTrackerUrl", u + "matomo.php"]);
      _paq.push(["setSiteId", "1"]);
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src = "//cdn.matomo.cloud/buriedsignals.matomo.cloud/matomo.js";
      s.parentNode.insertBefore(g, s);
    })();
  }

  return (
    <div className="global-wrapper">
      <Navbar />
      <Head>
        <meta name="title" content="Buried Signals" />
        <meta
          name="description"
          content="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces."
        />
        <meta image src="../static/img/meta.png" />
        <meta property="og:image" content="../static/img/meta.png" />
        <title>Buried Signals</title>
        {handleAnalytics}
      </Head>
      <div className="index-wrapper">
        <Header />
        <ArticleList articles={articles} catgory={category} />
      </div>
      <NewsletterBox />
      <Footer />
    </div>
  );
};

export default ArticleCategory;
