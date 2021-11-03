const React = require('react');
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navigation from './navigation';
import Footer from './footer';
import Head from 'next/head';
import footerLogo from '../static/img/bs_footer.png';
import navLogo from '../static/img/nav-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ArticleListRouter = (props) => {
  const router = useRouter()
  return (
    <div className="global-wrapper">
    <Navigation navLogo={navLogo} />
    <Head></Head>
      <div className="index-wrapper">
      <ArticleList {...props} router={router} />
      </div>
      <Footer footerLogo={footerLogo} />
    </div>
  );
}

class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: props.category || 'all'
    }
    this.categoryAllHandler = this.categoryAllHandler.bind(this);
    this.categoryHandler = this.categoryHandler.bind(this);
  }

  categoryAllHandler(e) {
    const filters = document.querySelectorAll(".filter-category");
    console.log(filters);
    filters.forEach(filter => filter.style.color = "#636363");
    e.target.style.color = "white";
    this.setState({selectedCategory: 'all'});
  };
  categoryHandler(category, e) {
    const filters = document.querySelectorAll(".filter-category");
    console.log(filters);
    filters.forEach(filter => filter.style.color = "#636363");
    e.target.style.color = "white";
    this.setState({ selectedCategory: category });
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;
    console.log('rendering article list archive', props.category);

    const allArticles = props.articles;
    const allCategories = [...(new Set(allArticles.flatMap(article => article.categories)))];

    allCategories.sort((a, b) => {
      return a.localeCompare(b);
    })

    const selectedCategoryArticles = props.category === 'all' ? allArticles : allArticles.filter((article) => article.categories.includes(props.category));

    return (
      <div>
        <div className="index-filters">
          <div className="filter-category" onClick={this.categoryAllHandler}>
              <Link href="/articles" className="filter-category-a">
                All
              </Link>
          </div>
          {allCategories.map((category) => {
            return <div key={category} className="filter-category" onClick={(e) => this.categoryHandler(category, e)}>
              <Link href={`/articles/${category}`} className="filter-category-a">
                {category}
              </Link>
            </div>
          })}
        </div>
        <div className="articles-index">
          {selectedCategoryArticles.map((article) => {
            const creator = article.creator.toUpperCase();
            const category = article.categories[0].toUpperCase();
            const imagePath = article.imagePath
            console.log("article", imagePath);
            return <a href={`${article.slug}`} key={article.slug}>
              <div className="article-card">
              <div className="article-redirect">{article.deployURL? "" : <FontAwesomeIcon icon={faExternalLinkAlt} />}</div>
              <img className="article-image" src={imagePath}></img>
              <div className="article-details">
                <div className="article-category">{category}</div>
                <div className="article-title">{article.title}</div>
                <div className="article-creator">CREATOR: {creator}</div>
              </div>
            </div>
            </a>
          })}
        </div>
      </div>
    );
  }
}

export default ArticleListRouter;
