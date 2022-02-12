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
        <meta name="description" content="A publication curating visual, interactive and investigative stories." key="meta_description" />
        <meta name="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="meta_image" />
        <meta itemProp="name" content="Buried Signals" />
        <meta itemProp="description" content="A publication curating visual, interactive and investigative stories.." />
        <meta itemProp="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
        <meta name="twitter:title" content="Buried Signals" key="twitter_title" />
        <meta name="twitter:description" content="A publication curating visual, immersive and interactive journalism." key="twitter_description" />
        <meta name="twitter:site" content="@buriedsignals" key="twitter_site" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="twitter_image" />
        <meta name="title" property="og:title" content="Buried Signals" key="title" />
        <meta name="description" property="og:description" content="A publication curating visual, interactive and investigative stories."  key="description" />
        <meta name="image" property="og:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="image"></meta>
        <meta name="url" property="og:url" content="https://buriedsignals.com" key="url" />
        <meta name="site_name" property="og:site_name" content="Buried Signals" key="site_name" />
        <meta name="type" property="og:type" content="website" key="type" />
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
