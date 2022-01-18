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
        <Head>
          <meta name="title" content="Articles | Buried Signals" />
          <meta
            name="description"
            content="Curating visual, immersive and open-source investigative journalism."
          />
          <meta image src="/img/meta.png" />
          <meta property="og:image" content="/img/meta.png" />
          <title>Articles | Buried Signals</title>
        </Head>
        <h1 className="typography-page-header" ref={ref}>Archive</h1>
        <div className="index-wrapper">
          <ArticleList {...props} router={router} path={pathname} onPageChange={scrollToTop} />
        </div>
        <Footer footerLogo="/img/bs_footer.png" />
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
          <meta image src="/img/meta.png" />
          <meta property="og:image" content="/img/meta.png" />
          <title>Articles | Buried Signals</title>
        </Head>
        <h1 className="typography-page-header" ref={ref}>Archive</h1>
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
    initialPageSize: 4,
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
