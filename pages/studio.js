import Navbar from "../components/navbar/navbar";
import Link from "next/link";
// import ContactBox from "../components/contact-box";
// import Clients from "../components/clients";
import Footer from "../components/footer";
import Head from "next/head";
import HeaderPages from "../components/header-pages";
import projects from "../projects.json"
import ArticleCard from "../components/article-card/article-card";

const Studio = () => {

  return (
    <div className="global-wrapper">
      <Navbar theme="dark" />
      <Head>
        <title>Studio | Buried Signals</title>
        <meta charset="utf-8" />
        <meta name="description" content="A creative production studio crafting explorable essays, visual reports and immersive documentaries."/>
        <meta name="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta itemProp="name" content="Studio | Buried Signals" />
        <meta itemProp="description" content="A creative production studio crafting explorable essays, visual reports and immersive documentaries" />
        <meta itemProp="image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Studio | Buried Signals" />
        <meta name="twitter:description" content="A creative production studio crafting explorable essays, visual reports and immersive documentaries" />
        <meta name="twitter:site" content="@buriedsignals" />
        <meta name="twitter:image:src" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta property="og:title" content="Studio | Buried Signals" />
        <meta property="og:description" content="A creative production studio crafting explorable essays, visual reports and immersive documentaries" />
        <meta property="og:image" content="https://raw.githubusercontent.com/buriedsignalsmag/site-index/main/static/img/meta.png" />
        <meta property="og:url" content="https://buriedsignals.com" />
        <meta property="og:site_name" content="Buried Signals" />
        <meta property="og:type" content="website" />
      </Head>
      <HeaderPages title="A creative production studio crafting visual, interactive and immersive stories." />
      <div className="projects-index">
          <ArticleCard article={projects[0]}></ArticleCard>
          <ArticleCard article={projects[1]}></ArticleCard>
      </div>
      <div className="pages-wrapper">
        <div className="pages-text-container">
          <h2 className="typography-paragraph-header">The Studio</h2>
          <p className="typography-paragraph">
            We combine the audio, visual, and interactive capabilities of dynamic media to visualise existing insights or create unique choice-driven narratives.
          </p>
          <p className="typography-paragraph">
            The studio relies on a constellation of senior artists and
            production partners from around the world. Using expertise in data visualisation, 3D, video,
            design and development we&apos;ve produced enhanced editorial for commercial or institutional clients.
          </p>
          <p className="typography-paragraph">
            We work alongside the Human Data Interface Group to continuously
            improve our experiences, integrating the latest technological
            developments and user interaction research in our conceptualisation.
          </p>
          <p className="typography-paragraph">Our productions are carbon offset with <a className="link-animation" href="https://wren.co">Wren</a></p>
        </div>
        <div className="button-container">
          <Link href="https://t1ipnnn9dzv.typeform.com/to/vUqvFitw" passHref rel="noreferrer">
            <button className="button-white button-hover-underline">Contact Us</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Studio;
