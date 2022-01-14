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
        <meta name="title" content="Buried Signals" />
        <meta
          name="description"
          content="Curating visual, immersive and open-source investigative journalism."
        />
        <meta image src="../static/img/meta.png" />
        <meta property="og:image" content="../static/img/meta.png" />
        <title>Buried Signals</title>
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
