const React = require('react');
import { useRouter } from 'next/router'

const ArticleListRouter = (props) => {
  const router = useRouter()
  return <ArticleList {...props} router={router} />
}

class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: props.category || 'all'
    }
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;

    const allArticles = props.articles;
    const allCategories = [...(new Set(allArticles.flatMap(article => article.categories)))];

    allCategories.sort((a, b) => {
      return a.localeCompare(b);
    })

    const selectedCategoryArticles = this.state.selectedCategory === 'all' ? allArticles : allArticles.filter((article) => article.categories.includes(this.state.selectedCategory));

    return (
      <div>
        <div style={{display: 'flex', flexDirection: 'row', marginTop: '2em'}}>
          <div className={'article-category'} onClick={() => {
              this.setState({ selectedCategory: 'all' });
              props.router.push(`/articles/`);
            }}>
            All
          </div>
          {allCategories.map((category) => {
            return <div key={category} className={'article-category'} onClick={() => {
              this.setState({ selectedCategory: category });
              props.router.push(`/articles/${category}`);
            }}>
              {category}
            </div>
          })}
        </div>
        {selectedCategoryArticles.map((article) => {
          return <div key={article.slug}>
            <a href={`${article.slug}`}>{article.title}</a>
          </div>
        })}
      </div>
    );
  }
}

export default ArticleListRouter;
