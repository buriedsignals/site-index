const React = require("react");
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
import Head from "next/head";
import ArticleCard from "./article-card/article-card";
import Header from "./header";

const ArticleListRouter = (props) => {
  const router = useRouter();
  const { pathname } = useRouter();
  let navLogo;
  pathname == "/articles/[category]"
    ? (navLogo = "../../static/img/nav-logo.png")
    : (navLogo = "../static/img/nav-logo.png");
  let footerLogo;
  pathname == "/articles/[category]"
    ? (footerLogo = "../../static/img/bs_footer.png")
    : (footerLogo = "../static/img/bs_footer.png");

  if (pathname == "/articles/[category]") {
    return (
      <div className="global-wrapper">
        <Navbar />
        <Head>
          <meta name="title" content="Articles | Buried Signals" />
          <meta
            name="description"
            content="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces."
          />
          <meta image src="../static/img/meta.png" />
          <meta property="og:image" content="../static/img/meta.png" />
          <title>Articles | Buried Signals</title>
        </Head>
        <h1 className="typography-page-header">Archive</h1>
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
          <meta
            name="description"
            content="Experiments in visual journalism. Curating and crafting explorable explanations, web documentaries and interfaces."
          />
          <meta image src="../static/img/meta.png" />
          <meta property="og:image" content="../static/img/meta.png" />
          <title>Articles | Buried Signals</title>
        </Head>
        <h1 className="typography-page-header">Archive</h1>
        <ArticleList {...props} router={router} path={pathname} />
      </div>
    );
  }
};

class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: props.category || "all",
      path: props.pathname,
    };
  }

  render() {
    const { hasError, idyll, updateProps, clickCount, ...props } = this.props;
    console.log("rendering article list archive", props.category);

    const allArticles = props.articles;
    const allCategories = [
      ...new Set(allArticles.flatMap((article) => article.categories)),
    ];

    allCategories.sort((a, b) => {
      return a.localeCompare(b);
    });

    const currentPath = props.path;
    const selectedCategoryArticles =
      props.category === "all"
        ? allArticles
        : allArticles.filter((article) =>
            article.categories.includes(props.category)
          );

    return (
      <div>
        <div className="index-filters">
          <div
            className="filter-category"
            data-active={props.category === "all"}
          >
            <Link href="/articles" className="filter-category-a">
              All
            </Link>
          </div>
          {allCategories.map((category) => {
            return (
              <div
                key={category}
                className="filter-category"
                data-active={props.category === category}
              >
                <Link
                  href={`/articles/${category}`}
                  className="filter-category-a"
                >
                  {category.toUpperCase()}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="articles-index">
          {selectedCategoryArticles.map((article) => {
            return <ArticleCard key={article.slug} article={article} />;
          })}
        </div>
      </div>
    );
  }
}

export default ArticleListRouter;
