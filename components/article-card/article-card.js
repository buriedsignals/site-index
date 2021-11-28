import styles from "./article-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ArticleCard({ article = {}, featured = false }) {
  const creator = article?.creator?.toUpperCase();
  const category = article?.categories[0]?.toUpperCase();
  // IF ROUTE IS CATEGORY -> prefix article.image with "../"
  // uppercase categories, lowercase in json
  return (
    <a
      href={`${article.slug}`}
      key={article.slug}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.article_card} data-featured={featured}>
        {featured && (
          <div className={styles.article_featured_tag}>FEATURED</div>
        )}
        <div className={styles.article_redirect}>
          {article.deployURL ? (
            ""
          ) : (
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          )}
        </div>
        <img className={styles.article_image} src={article.image}></img>
        <div className={styles.article_details}>
          <div className={styles.article_category}>{category}</div>
          <div className={styles.article_title}>{article.title}</div>
          <div className={styles.article_creator}>CREATOR: {creator}</div>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;

// const creator = article.creator.toUpperCase();
// const category = article.categories[0].toUpperCase();
// return (
//   <a href={`${article.slug}`} key={article.slug}>
//     <div className="featured-article">
//       <div className="featured-article-tag">FEATURED</div>
//       <div className="article-redirect">
//         {article.deployURL ? (
//           ""
//         ) : (
//           <FontAwesomeIcon icon={faExternalLinkAlt} />
//         )}
//       </div>
//       <img
//         className="featured-article-image"
//         src={article.image}
//       ></img>
//       <div className="featured-article-details">
//         <div className="article-category">{category}</div>
//         <div className="featured-article-title">
//           {article.title}
//         </div>
//         <div className="article-creator">CREATOR: {creator}</div>
//       </div>
//     </div>
//   </a>
// );
