import { useRouter } from 'next/router';
import ArticleList from '../components/article-list';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Header from '../components/header';
import articles from '../articles.json';

const ArticleCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="global-wrapper">
      <Navigation />
      <div className="index-wrapper">
        <Header />
        <ArticleList articles={articles} catgory={category} />
      </div> 
      <Footer />
  </div>
  )
}

export default ArticleCategory;