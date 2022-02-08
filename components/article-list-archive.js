import React, {useMemo, useRef, useState} from 'react';
import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "./navbar/navbar";
import Footer from "./footer";
import Head from "next/head";
import ArticleCard from "./article-card/article-card";
import { GeistProvider } from "@geist-ui/react";
import { Pagination } from "@geist-ui/react";
import { usePagination } from "react-use-pagination";
import Spacer from "../components/spacer/spacer";
import NewsletterBox from "../components/newsletter-box";

const ArticleListRouter = (props) => {

  const router = useRouter();
  const { pathname } = useRouter();
  const [isInitialPage, setIsInitialPage] = useState(true);

  const ref = useRef();

  function scrollToTop() {
    if(isInitialPage) {
      setIsInitialPage(false)
      return
    }
    ref.current && ref.current.scrollIntoView({behavior: "smooth"});
  }

  if (pathname == "/articles/[category]") {
    return (
      <div className="global-wrapper">
        <Navbar />
        <div className="index-wrapper">
          <ArticleList {...props} router={router} path={pathname} onPageChange={scrollToTop} />
        </div>
        <Footer footerLogo="/img/bs_footer.png" />
      </div>
    );
  } else {

    return (
      <div>
        <ArticleList {...props} router={router} path={pathname} onPageChange={scrollToTop} />
      </div>
    );
  }
};

function ArticleList (props) {

  const allCategories = useMemo(() => {
    return [
      ...new Set(props.articles.flatMap((article) => article.categories)),
    ].sort((a, b) => {
      return a.localeCompare(b);
    })
  }, [props.articles])

  const selectedCategoryArticles = useMemo(() => {
    return props.category === "all"
      ? props.articles
      : props.articles.filter((article) =>
          article.categories.includes(props.category)
        );
  }, [props.articles, props.category])

  const showPagination = useMemo(() => {
    return selectedCategoryArticles.length > 4
  }, [selectedCategoryArticles])

  const {
    totalPages,
    setPage,
    startIndex,
    endIndex
  } = usePagination({
    totalItems: selectedCategoryArticles.length,
    initialPageSize: 8,
    initialPage: 0
  });

  const categoryArticlesToShow = useMemo(() => {
    return showPagination 
      ? selectedCategoryArticles.slice(startIndex, endIndex + 1)
      : selectedCategoryArticles
  }, [selectedCategoryArticles, showPagination, startIndex, endIndex])

  function onPageChange(e) {
    setPage(e - 1);
    props.onPageChange();
  }

  return (
    <div>
      <Head>
        <title>Buried Signals</title>
        <meta charset="utf-8" />
        <meta name="description" content="A publication curating visual, immersive and interactive journalism." key="meta_description" />
        <meta name="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="meta_image" />
        <meta itemProp="name" content="Buried Signals" />
        <meta itemProp="description" content="A publication curating visual, immersive and interactive journalism." />
        <meta itemProp="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="twitter:card" content="summary_large_image" key="twitter_card" />
        <meta name="twitter:title" content="Buried Signals" key="twitter_title" />
        <meta name="twitter:description" content="A publication curating visual, immersive and interactive journalism." key="twitter_description" />
        <meta name="twitter:site" content="@buriedsignals" key="twitter_site" />
        <meta name="twitter:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="twitter_image" />
        <meta name="title" property="og:title" content="Buried Signals" key="title" />
        <meta name="description" property="og:description" content="A publication curating visual, immersive and interactive journalism."  key="description" />
        <meta name="image" property="og:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" key="image"></meta>
        <meta name="url" property="og:url" content="https://buriedsignals.com" key="url" />
        <meta name="site_name" property="og:site_name" content="Buried Signals" key="site_name" />
        <meta name="type" property="og:type" content="website" key="type" />
    </Head>
      <h1 className="typography-page-header">Archive</h1>
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
        {categoryArticlesToShow.map((article) => {
          return <ArticleCard key={article.slug} article={article} />;
        })}
      </div>

      {showPagination && (
        <>
          <Spacer multiplier={1} />
          <div id="archive-pagination" className="typography-paragraph">
            <GeistProvider>
              <Pagination count={totalPages} limit={3} onChange={onPageChange}></Pagination>
            </GeistProvider>
          </div>
            <Spacer multiplier={1} />
        </>
      )}
      <NewsletterBox />
    </div>
  );
}

export default ArticleListRouter;
