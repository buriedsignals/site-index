import { useRouter } from "next/router";
import ArticleListArchive from "../../components/article-list-archive";
import articles from "../../articles.json";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer";
import Head from "next/head";

const ArticleCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="global-wrapper">
      <Navbar />
      <Head></Head>
      <div className="index-wrapper">
        <ArticleListArchive articles={articles} category={"all"} />
      </div>
      <Footer />
    </div>
  );
};

export default ArticleCategory;
