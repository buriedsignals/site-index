import { useRouter } from 'next/router';
import ArticleList from '../../components/article-list-archive';
import articles from '../../articles.json';

const ArticleCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return <ArticleList articles={articles} catgory={category} />
}

export default ArticleCategory;