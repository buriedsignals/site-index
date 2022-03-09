import React, {useState} from "react";
import styles from "./article-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function ArticleCard({ article = {}, featured = false }) {
  const creator = article?.creator?.toUpperCase();
  const client = article?.client?.toUpperCase();
  const category = article?.categories[0]?.toUpperCase();

  const [isHovered, setHover] = useState(false);

  // {article.redirect && (
  //   <div className={styles.article_redirect}>
  //     <div className={styles.article_redirect_icon}>
  //       <FontAwesomeIcon icon={faExternalLinkAlt} />
  //     </div>
  //   </div>
  // )}

  // IF ROUTE IS CATEGORY -> prefix article.image with "../"
  // uppercase categories, lowercase in json
  return (
    <a
      href={`${article.slug}`}
      key={article.slug}
      target="_blank"
      rel="noreferrer"
    >
      <div 
        className={styles.article_card} 
        data-featured={featured} 
        data-hovered={isHovered}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {featured && (
          <div className={styles.article_featured_tag}>FEATURED</div>
        )}
        <div className={styles.article_redirect}>
          {article.deployURL ? (
            ""
          ) : (
            <div className={styles.article_redirect_icon}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
          )}
        </div>
        <div className={styles.article_image_container}>
          <img className={styles.article_image} src={article.image} alt={`Hero image of ${article.title} by ${article.client}`}></img>
        </div>
        <div className={styles.article_details}>
          <div className={styles.article_category}>{category}</div>
          <div className={styles.article_title}>{article.title}</div>
          <div className={styles.article_creator}>{creator ? "CREATOR" : "CLIENT"}: {creator || client}</div>
        </div>
      </div>
    </a>
  );
}

export default ArticleCard;
