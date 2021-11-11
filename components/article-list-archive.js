const React = require('react');
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navigation from './navigation';
import Footer from './footer';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const ArticleListRouter = (props) => {
  const router = useRouter()
  const {pathname} = useRouter()
  let navLogo;
  (pathname == "/articles/[category]") ? navLogo = "../../static/img/nav-logo.png" : navLogo = "../static/img/nav-logo.png";
  let footerLogo;
  (pathname == "/articles/[category]") ? footerLogo = "../../static/img/bs_footer.png" : footerLogo = "../static/img/bs_footer.png";

  if (pathname == "/articles/[category]") {
    return (
      <div className="global-wrapper">
      <Navigation navLogo={navLogo} />
      <Head>
        <meta name="title" content="Articles | Buried Signals" />
        <meta name="description" content="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces." />
        <meta image src="../static/img/meta.png" />
        <meta property="og:image" content="../static/img/meta.png" />
        <title>Articles | Buried Signals</title>
      </Head>
        <div className="index-wrapper">
        <ArticleList {...props} router={router} path={pathname} />
        </div>
        <Footer footerLogo={footerLogo} />
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <meta name="title" content="Articles | Buried Signals" />
          <meta name="description" content="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces." />
          <meta image src="../static/img/meta.png" />
          <meta property="og:image" content="../static/img/meta.png" />
          <title>Articles | Buried Signals</title>
        </Head>
        <ArticleList {...props} router={router} path={pathname} />
      </div>
    );
  }
  
}

class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: props.category || 'all',
      path: props.pathname
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

    const currentPath = props.path;
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
                {category.toUpperCase()}
              </Link>
            </div>
          })}
        </div>
        <div className="articles-index">
          {selectedCategoryArticles.map((article) => {
            const creator = article.creator.toUpperCase();
            const category = article.categories[0].toUpperCase();
            // let imagePath;
            // (currentPath == "/articles/[category]") ? imagePath = "../" + article.imagePath : imagePath = article.imagePath;
            return <a href={`${article.slug}`} key={article.slug} target="_blank" rel="noreferrer">
              <div className="article-card">
              <div className="article-redirect">{article.deployURL? "" : <FontAwesomeIcon icon={faExternalLinkAlt} />}</div>
              <img className="article-image" src={article.image}></img>
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
