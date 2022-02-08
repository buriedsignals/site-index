import { useRouter } from "next/router";
import ArticleList from "../components/article-list";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import articles from "../articles.json";
import NewsletterBox from "../components/newsletter-box";

const ArticleCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="global-wrapper">
      <Navbar />
      <Head>
        <title>Buried Signals</title>
        <meta charset="utf-8" />
        <meta name="description" content="A publication curating visual, immersive and interactive journalism."/>
        <meta name="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta itemProp="name" content="Buried Signals" />
        <meta itemProp="description" content="A publication curating visual, immersive and interactive journalism." />
        <meta itemProp="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Buried Signals" />
        <meta name="twitter:description" content="A publication curating visual, immersive and interactive journalism." />
        <meta name="twitter:site" content="@buriedsignals" />
        <meta name="twitter:image:src" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="og:title" content="Buried Signals" />
        <meta name="og:description" content="A publication curating visual, immersive and interactive journalism." />
        <meta name="og:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="og:url" content="https://buriedsignals.com" />
        <meta name="og:site_name" content="Buried Signals" />
        <meta name="og:type" content="website" />
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
