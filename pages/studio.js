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
        <meta title="Studio | Buried Signals" />
        <meta description="A creative production studio, crafting explorable essays and immersive documentaries." />
        <meta image src="../static/img/meta.png" />
      </Head>
      <HeaderPages title="A creative production studio, crafting explorable essays and immersive documentaries." />
      <div className="projects-index">
          <ArticleCard article={projects[0]}></ArticleCard>
          <ArticleCard article={projects[1]}></ArticleCard>
      </div>
      <div className="pages-wrapper">
        <div className="pages-text-container">
          <h2 className="typography-paragraph-header">The Studio</h2>
          <p className="typography-paragraph">
            We craft{" "}
            <a
              href="https://en.wikipedia.org/wiki/Explorable_explanation"
              target="_blank"
              rel="noreferrer"
            >
              visual essays
            </a>
            ,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Web_documentary"
              target="_blank"
              rel="noreferrer"
            >
              web documentaries
            </a>{" "}
            and immersive journalism. 
            We combine the audio, visual, and interactive capabilities of dynamic media to visualise existing insights or create unique choice-driven narratives.
          </p>
          <p className="typography-paragraph">
            The studio relies on a constellation of senior artists and
            production partners from around the world to deliver outstanding
            results. Using capabilities in data visualisation, 3D, video,
            interaction design, mixed-reality user experience design and programming we&apos;ve produced enhanced editorial and video for commercial or institutional clients.
          </p>
          <p className="typography-paragraph">
            We work alongside the Human Data Interface Group to continuously
            improve our experiences, integrating the latest technological
            developments and user interaction research in our conceptualisation.
            Interactive articles and moving images are proven to amplify
            learning for readers by boosting engagement, time spent and virality
            when compared to static alternatives - we aim to continue
            challenging ourselves to find the most optimal mediums and methods
            for interactive storytelling.
          </p>
          <p className="typography-paragraph">Our productions are carbon offset with <a href="https://wren.co">Wren</a></p>
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
